import React from 'react'
import Mensaje from '../components/Mensaje'

class ExerciseNew extends React.Component {

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
                        type="text" 
                        className="form-control" 
                        placeholder="Permiso actual" 
                        name="permisoActual"
                        onChange={this.handleChange}
                        value={this.state.permisoActual}
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
                                
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Buscar
                </button>
            </form>
        </div>
        )
    }
}

export default ExerciseNew