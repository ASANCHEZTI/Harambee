import React from 'react'
import Card from '../components/Card'
import Welcome from '../components/Welcome'
import {Button, Grid} from '@material-ui/core'
import {Link} from 'react-router-dom'
import '../components/styles/superior.css'


class Exercices extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[{
                "id": 1,
                "title": "Consulta de usuarios",
                "description": "Ingrese para consultar los usuarios y sus permisos actuales",
                "img": "https://aukera.es/blog/imagenes/personas-usuarios.png",
                "leftColor": "#EE9405",
                "rightColor": "#FEE489",
                "redireccion": "/permisos/search"
            },{
                "id": 2,
                "title": "Cambiar permisos",
                "description": "Ingrese para cambiar los permisos actuales de los usuarios",
                "img": "https://i.pinimg.com/originals/74/7f/56/747f56517407cf4801bbb769fc9d4e64.png",
                "leftColor": "#FEE489",
                "rightColor": "#EE9405",
                "redireccion": "/permisos/change"
            
            }]
            
        }
    }
    render(){
        return (
            
            <div>
              <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <nav>
                <ul className="navbar">
                 <li id="Inicio">
                <a href="/principal">Inicio</a>
                </li>
                 <li id="Log out"><a href="/login">Log Out</a></li>
                
                </ul>
                </nav>
                <br></br>
                <br></br>
                <br></br>
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