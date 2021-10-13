import React from 'react'
import Card1 from '../components/Card1'
import Welcome1 from '../components/Welcome1'
import {Button, Grid} from '@material-ui/core'
import {Link} from 'react-router-dom'



class Exercices extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[{
                "id": 1,
                "title": "Información de ventas",
                "description": "Ingrese para consultar las ventas que han sido realizadas",
                "img": "https://cdn3.iconfinder.com/data/icons/education-science-vol-1-1/512/computer_education_information_school-512.png",
                "leftColor": "#EE9405",
                "rightColor": "#FEE489",
                "redireccion": "/ventas"
            },{
                "id": 2,
                "title": "Información del personal",
                "description": "Ingrese para consultar la información del personal contratado",
                "img": "https://cdn2.iconfinder.com/data/icons/social-media-marketing-color/64/personal-branding-motivation-passion-success-confident-512.png",
                "leftColor": "#FEE489",
                "rightColor": "#EE9405",
                "redireccion": "/vendedores"
            
            },{
                "id": 3,
                "title": "Permisos de usuario",
                "description": "Ingrese o modificar los permisos de los usuarios activos",
                "img": "https://cdn1.iconfinder.com/data/icons/popicon-bluetone-seo-1/256/19-512.png",
                "leftColor": "#EE9405",
                "rightColor": "#FEE489",
                "redireccion": "/permisos"
            },{
                "id": 4,
                "title": "Administración de productos",
                "description": "Ingrese para consultar o registrar los productos de la empresa",
                "img": "https://cdn4.iconfinder.com/data/icons/prettycons-shopping-flat/58/026-Online_Shopping-shopping_commerce_buy_sale_sell-512.png",
                "leftColor": "#FEE489",
                "rightColor": "#EE9405",
                "redireccion": "/menuproducto"
            }
        ]
            
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
                 <li id="Log out"><a href="/login">Log Out</a></li>
                
                </ul>
                </nav>
                <br></br>
                <br></br>
                <br></br>
                <Welcome1/>
                
                { this.state.data.map((icono) =>{
                    return(
                    <Grid container direction='column' alignItems='center' justifyContent='center'>
                    <Link to={icono.redireccion} style={{ textDecoration: 'none' }}>
                    <Button>
                    <Card1 
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