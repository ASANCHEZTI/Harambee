import React from 'react'
import Card from '../components/Card'
import Welcome from '../components/Welcome'
import {Button, Grid} from '@material-ui/core'
import {Redirect, Link} from 'react-router-dom'

class Exercices extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[{
                "id": 1,
                "title": "Consulta de usuarios",
                "description": "Ingrese para consultar los usuarios y sus permisos actuales",
                "img": "https://aukera.es/blog/imagenes/personas-usuarios.png",
                "leftColor": "#A74CF2",
                "rightColor": "#617BFB",
                "redireccion": "/exercise/search"
            },{
                "id": 2,
                "title": "Cambiar permisos",
                "description": "Ingrese para cambiar los permisos actuales de los usuarios",
                "img": "https://i.pinimg.com/originals/74/7f/56/747f56517407cf4801bbb769fc9d4e64.png",
                "leftColor": "#17EAD9",
                "rightColor": "#6078EA",
                "redireccion": "/exercise/change"
            
            }]
            
        }
    }
    render(){
        return (
            <div>
                <Welcome/>
                
                { this.state.data.map((icono) =>{
                    return(
                    <Grid container direction='column' alignItems='center' justifyContent='center'>
                    <Link to={icono.redireccion} style={{ textDecoration: 'none' }}>
                    <Button>
                    <Card 
                        tittle={icono.title}
                        description={icono.description}
                        img={icono.img}
                        leftColor={icono.leftColor}
                        rightColor={icono.rightColor}
    
                    />
                    </Button>
                    </Link>
                    </Grid>
                    )

                })}
                
                
                </div>
        )
    }

}

export default Exercices