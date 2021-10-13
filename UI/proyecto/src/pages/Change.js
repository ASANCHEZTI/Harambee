import React from 'react'
import MensajeCha from '../components/MensajeCha'
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Button = styled.button`
    border-radius: 5px;
    margin: 8px
`

class Change extends React.Component {
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
            <MensajeCha/>
            <form 
                onSubmit={this.handleSubmit}
            >
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
                <br></br>
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
                        <th>Nombre</th>
                        <th>Permiso actual</th>
                    </thead>
                    <tbody>
                        <td>Nombre resultado</td>
                        <td>Permiso resultado</td>
                    </tbody>

                </table>
                <text style={{fontWeight:"bold"}}>Seleccione un nuevo perfil</text>
                <div>
                <br></br>
                <select>
                    <option value="permiso1">Permiso 1</option>
                    <option value="permiso2">Permiso 2</option>
                    <option selected value="permisoAct">Permiso actual</option>
                    <option value="permiso 3">Permiso 3</option>
                </select>
                </div>
                <br></br>
                <div>           
                <Button
                    
                    className="btn btn-primary"
                >
                    Aplicar cambios
                </Button>
                <Link to="/permisos" style={{ textDecoration: 'none' }}>
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

export default Change