import styled from 'styled-components'
import React from 'react'
import Mensaje from '../components/MensajeNuePro'
import {Link} from 'react-router-dom'

const Button = styled.button`
    border-radius: 5px;
    margin: 8px
`


class ExerciseNew extends React.Component {

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
            <Mensaje/>
            <form 
                onSubmit={this.handleSubmit}
            >
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nombre del producto" 
                        name="nomProd"
                        onChange={this.handleChange}
                        value={this.state.nomProd}
                    />
                </div>
                <br/>
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
                <br/>
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Valor unitario" 
                        name="valProd"
                        onChange={this.handleChange}
                        value={this.state.valProd}
                    />
                </div>
                <br/>
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Cantidad que ingresa al inventario" 
                        name="cantiProd"
                        onChange={this.handleChange}
                        value={this.state.cantiProd}
                    />
                </div>
                <br></br>

                <Button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Registrar
                </Button>
                <Link to="/menuproducto" style={{ textDecoration: 'none' }}>
                <Button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Volver
                </Button>
                </Link>
            </form>
        </div>
        )
    }
}

export default ExerciseNew