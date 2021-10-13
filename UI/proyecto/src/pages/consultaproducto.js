import React from 'react'
import MensajeConPr from '../components/MensajeConpr'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Button = styled.button`
    border-radius: 5px;
    margin: 8px
`

class consultaproducto extends React.Component {
   state = {}
handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
}

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        
        return (
            
            <div className="container">
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
            <MensajeConPr/>
            <form 
                onSubmit={this.handleSubmit}
            >
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Código del producto" 
                        name="codProd"
                        onChange={this.handleChange}
                        value={this.state.codProd}
                    />
                </div>
                <br></br>
                <br></br>
                <div>           
                <Button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Buscar
                </Button>
                </div>
                <br></br>
                <table className="table">
                    <thead>
                        <th>Nombre del producto</th>
                        <th>Estado actual</th>
                        <th>Valor unitario</th>
                        <th>Cantidad disponible</th>
                    </thead>
                    <tbody>
                        <td>Producto1</td>
                        <td>Estado1</td>
                        <td>Precio1</td>
                        <td>Cantidad1</td>
                    </tbody>

                </table>
               
                <br></br>
                <div>           
                <Link to="/menuproducto" style={{ textDecoration: 'none' }}>
                <Button
                
                className="btn btn-primary"
                >
                 Volver
                </Button>
                </Link>
                </div>
            </form>
            
        </div>
        )
    }
}

export default consultaproducto