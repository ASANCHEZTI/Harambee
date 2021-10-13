import React from 'react'
import {Link} from 'react-router-dom'
import '../components/styles/superior.css'


class login extends React.Component{
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
              <h1 className="form-title"><span><b>Log In</b></span></h1>
            </div>
            <label htmlFor="Usuario" className="form-label">Nombre de Usuario</label>
            <input type="text" className="form-input" name="usuario" placeholder="Ingresa el Nombre de Usuario" 
            onChange={this.handleChange}
            value={this.state.usuario}
            />
            <label htmlFor="Contraseña" className="form-label">Contraseña</label>
            <input type="password" className="form-input" name="contraseña" placeholder="Ingresa la contraseña" 
            onChange={this.handleChange}
            value={this.state.contraseña}/>
            
            <input type="submit" value="Ingresar"  defaultValue="Log In" className="btn-submit" /> 
            <br></br>
            <br></br>
            <Link to="/registro" style={{ textDecoration: 'none' }}>
            <input type="submit" value="Registrarse"  defaultValue="Log In" className="btn-submit" /> 
            </Link>
            
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
export default login