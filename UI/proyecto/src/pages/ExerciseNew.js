import styled from 'styled-components'
import React from 'react'
import Mensaje from '../components/Mensaje'
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
                        placeholder="Nombre" 
                        name="nombre"
                        onChange={this.handleChange}
                        value={this.state.nombre}
                    />
                </div>
                <br/>
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Documento de identificación" 
                        name="documento"
                        onChange={this.handleChange}
                        value={this.state.documento}
                    />
                </div>
                <br/>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Permiso actual" 
                        name="permiso"
                        onChange={this.handleChange}
                        value={this.state.permiso}
                    />
                </div>
                <br/>
                <div className="form-group">
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Correo electrónico" 
                        name="correo"
                        onChange={this.handleChange}
                        value={this.state.correo}
                    />
                </div>
                <br></br>

                <Button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Buscar
                </Button>
                <Link to="/permisos" style={{ textDecoration: 'none' }}>
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