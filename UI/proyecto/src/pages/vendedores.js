import React from 'react';

import '../components/styles/superior.css';


class vendedores extends React.Component {
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
        return(
            <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            <nav>
              <ul className="navbar">
                <li id="Inicio"><a href="/principal">Inicio</a></li>
                <li id="Log out"><a href="/login">Log Out</a></li>
                
              </ul>
            </nav>
          
            <main>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
          
              
          <section className="formulario"
            onSubmit={this.handleSubmit}
          >
                <div className="contenedor">
                  <div className="form">
                    <form action>
                      <div className="form-header">
                        <h1 className="form-title"><span><b>Información de vendedores</b></span></h1>
                      </div>
                      <label htmlFor="Usuario" className="form-label">Nombre </label>
                      <input type="text" className="form-input" maxlength="100" autofocus placeholder="Escriba su nombre"
                      name="nombre"
                      onChange={this.handleChange}
                      value={this.state.nombre}
                      />  
                      <label htmlFor="ID" className="form-label">Tipo de ID </label>    
                      <input type="text" className="form-input" name="tipoID" list="Tipo de ID" placeholder="Seleccione su tipo de ID"
                      onChange={this.handleChange}
                      value={this.state.tipoID}
                      />
                      <datalist id="Tipo de ID">                
                                      <option value="Cedula de ciudadania"></option>
                                      <option value="Cedula de Extranjeria"></option>
                                      <option value="Pasaporte"></option>
                                      <option value="NIT"></option>
                                  </datalist>
                      <label htmlFor="ID (IU)" className="form-label"> ID (IU)</label>
                      <input type="ID" className="form-input" placeholder="Escriba su numero de ID"
                      name="ID"
                      onChange={this.handleChange}
                      value={this.state.ID}/> 
                      <label htmlFor="direccion" className="form-label">Dirección</label>
                      <input type="text" className="form-input" placeholder="Ej. Av 0 #23-24" 
                      name="direccion"
                      onChange={this.handleChange}
                      value={this.state.direccion}
                      />
                      <label htmlFor="E-mail" className="form-label">E-mail </label>
                      <input type="email" className="form-input" name="email" placeholder="name@example.com.co"
                      onChange={this.handleChange}
                      value={this.state.email} />
                      <label htmlFor="Teléfono" className="form-label">Teléfono</label>
                      <input type="tel" className="form-input" name="telefono" placeholder="Ind. de ciudad + telefono"
                      onChange={this.handleChange}
                      value={this.state.telefono}
                      />
                      <label htmlFor="Celular" className="form-label">Celular</label>
                      <input type="tel" className="form-input" name="celular" placeholder="Ingrese su número de celular"
                      onChange={this.handleChange}
                      value={this.state.celular}
                      />        
                      <label htmlFor="Cargo" className="form-label">Cargo</label>
                      <input type="text" className="form-input" name="cargo" list="Cargo" placeholder="Seleccione su cargo"
                      onChange={this.handleChange}
                      value={this.state.cargo}/>     
                      <datalist id="Cargo">
                                      <option value="Vendedor"></option>
                                      <option value="Operario"></option>
                                      <option value="Ejecutivo"></option>
                                      <option value="Administrador"></option>
                                  </datalist>   
                      <label htmlFor="Especialidad" className="form-label">Especialidad</label>      
                      <input type="text" className="form-input" name="especialidad" required size="50" list="Especialidad" placeholder="Seleccione la Especialidad"
                      onChange={this.handleChange}
                      value={this.state.especialidad}
                      />                
                      <datalist id="Especialidad">
                                      <option value="Producto-01"></option>
                                      <option value="Producto-02"></option>
                                      <option value="Producto-03"></option>
                                      <option value="Producto-04"></option>
                                      <option value="Producto-05"></option>
                                  </datalist>
                      <label htmlFor="Fecha de Ingreso" className="form-label">Fecha </label>
                      <input type="date" className="form-input" autofocus placeholder="Ingrese la fecha de ingreso"
                      name="fecha"
                      onChange={this.handleChange}
                      value={this.state.fecha}
                      />
                      <label htmlFor="mensaje" className="form-label">Mensaje</label>  
                      <textarea cols="69" id="mensaje" class="form-textarea" placeholder="Escriba sus observaciones..." 
                      name="mensaje"
                      onChange={this.handleChange}
                      value={this.state.mensaje}
                      ></textarea>
                      <br></br>
                      <input type="submit" value="Guardar" defaultValue="Log In" className="btn-submit" />
                    </form>
                  </div>
                </div>
              </section>
                        
                    
              <br />
              <br />
              
            </main></div>
        )
    }
}
export default vendedores
