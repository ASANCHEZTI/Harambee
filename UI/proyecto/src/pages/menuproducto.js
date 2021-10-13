import React from 'react'
import Card2 from '../components/Card2'
import Welcome from '../components/Mensajeproducto'
import {Button, Grid} from '@material-ui/core'
import {Link} from 'react-router-dom'
import '../components/styles/superior.css'


class menuproducto extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[{
                "id": 1,
                "title": "Consulta de productos",
                "description": "Ingrese para consultar el estado de los productos",
                "img": "https://cdn0.iconfinder.com/data/icons/business-finance-vol-2-56/512/gross_value_product_finance-512.png",
                "leftColor": "#EE9405",
                "rightColor": "#FEE489",
                "redireccion": "/menuproducto/consultaproducto"
            },{
                "id": 2,
                "title": "Agregar pproductos",
                "description": "Ingrese para agregar nuevos productos al sistema",
                "img": "https://cdn1.iconfinder.com/data/icons/business-finance-vol-3-39/512/business_plan_product_industry-512.png",
                "leftColor": "#FEE489",
                "rightColor": "#EE9405",
                "redireccion": "/menuproducto/nuevoproducto"
            
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
                    <Card2 
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

export default menuproducto