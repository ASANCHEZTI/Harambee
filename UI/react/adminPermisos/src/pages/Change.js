import React from 'react'
import MensajeCha from '../components/MensajeCha'
import 'bootstrap/dist/css/bootstrap.css'

class Change extends React.Component {
   state = {}
handleSubmit = e => {
    e.preventDefaul()
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
            <MensajeCha/>
            <form 
                onSubmit={this.handleSubmit}
            >
                <div className="form-group">
                    <input 
                        type="number" 
                        className="form-control" 
                        placeholder="Documento de identificación" 
                        name="documentoIdentificacion"
                        onChange={this.handleChange}
                        value={this.state.documentoIdentificacion}
                    />
                </div>
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
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Buscar
                </button>
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
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Aplicar cambios
                </button>
                </div>
            </form>
            
        </div>
        )
    }
}

export default Change