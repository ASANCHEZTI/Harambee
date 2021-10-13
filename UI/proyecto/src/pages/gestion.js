import React from 'react'

import '../components/styles/gestion.css'


class gestion extends React.Component {
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
  <header>
    <section className="Header"> 
    
    </section>
  </header>
  
  <nav>
    <ul className="navbar">
      <li id="Inicio"><a href="/principal">Inicio</a></li>
     
      <li id="Log out"><a href="/login">Log out</a></li>
       
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
              <h1 className="form-title"><span><b>Información de ventas</b></span></h1>
            </div>
            <label htmlFor="IUVenta" className="form-label">IU Venta</label>
            <input type="text" className="form-input" name="iuVenta" placeholder="Ingresa el IU de venta" 
            onChange={this.handleChange}
            value={this.state.iuVenta}
            />
            <label htmlFor="Cliente" className="form-label">Cliente</label>
            <input type="text" className="form-input" name="cliente" placeholder="Ingresa los nombres y apellidos del cliente" 
            onChange={this.handleChange}
            value={this.state.cliente}
            />
            <label htmlFor="Valor de la Venta" className="form-label">Valor de la Venta</label>
            <input type="number" className="form-input" name="valorVenta" placeholder="Ingresa el valor total de la venta" 
            onChange={this.handleChange}
            value={this.state.valorVenta}
            />
            <label htmlFor="Descripción detallada" className="form-label">Descripción detallada</label>
            <input type="text" className="form-input" name="descripcion" placeholder="Descripción detallada"
            onChange={this.handleChange}
            value={this.state.descripcion}
            />
            <label htmlFor="Fecha inicial de pago" className="form-label"> Fecha inicial de pago</label>
            <input type="date" className="form-input" name="fechaInicialPago" placeholder="Ingresa la fecha inicial de pago" 
            onChange={this.handleChange}
            value={this.state.fechaInicialPago}
            />
            <label htmlFor="Fecha futura de pago" className="form-label">Fecha futura de pago</label>
            <input type="date" className="form-input" name="fechaFuturaPago" placeholder="Ingresa la fecha futura de pago" 
            onChange={this.handleChange}
            value={this.state.fechaFuturaPago}
            />
            <label htmlFor="IU(Vendedor)" className="form-label">IU(Vendedor)</label>
            <input type="text" className="form-input" name="iuVendedor" placeholder="Ingresa el IU(Vendedor)"
            onChange={this.handleChange}
            value={this.state.iuVendedor}
            />
            <label htmlFor="Vendedor" className="form-label">Vendedor</label>
            <input type="text" className="form-input" name="nombreVendedor" placeholder="Ingresa los nombres y apellidos del vendedor" 
            onChange={this.handleChange}
            value={this.state.nombreVendedor}
            />
            <input type="submit" value="Buscar venta" defaultValue="Enviar datos de la venta" className="btn-submit" />
            <br></br>
            <br></br>
            <input type="submit" value="Registrar venta" defaultValue="Enviar datos de la venta" className="btn-submit" />
          </form>
        </div>
      </div>
    </section>
    <br />
    <br />
    <section className="footer">
      <br />
      <br />
      </section>
  </main></div>
        )
    }

}

export default gestion