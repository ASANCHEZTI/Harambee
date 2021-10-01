import React, { Component } from 'react'
import './MainVendedores.css'

export default class MainVendedores extends Component {
    render() {
        return (
        <div>
            <section className="main-content">
            <h2>INFORMACION VENDEDORES</h2>
            <br/>
            <form>
                <div className="row">
                <button type="submit">Registrar</button>
                <button type="submit">Modificar</button>
                </div>
            </form>
            <br/>
            </section>
        </div>
        )
    }
}
