import React, { Component } from 'react'
import './Registration.css'
//import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
//import { FaGem, FaHeart } from 'react-icons/fa';

function Registration() {
    const handleSubmit = event => {
        event.preventDefault();
        alert('Accion Exitosa')
    }
    return (
        <div className="form">
                <h2>INFORMACION DE VENDEDORES</h2>
                <br />
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label>Nombre:</label>
                        <br/>
                        <input maxlength="100" name="nombre" required size="100" type="text" autofocus placeholder="Escriba su nombre"/>
                        <br/>
                        <label> Tipo de ID: </label>
                        <br/>
                        <input required size="100" list="Tipo de ID" type="text" placeholder="Seleccione su tipo de ID" />
                        <datalist id="Tipo de ID">
                            <option value="Cedula de ciudadania"></option>
                            <option value="Cedula de Extranjeria"></option>
                            <option value="Pasaporte"></option>
                            <option value="NIT"></option>
                        </datalist>
                        <br/>
                        <label>ID (IU): </label>
                        <br/>
                        <input max length="100" name="ID" required size="100" Type="ID" placeholder="Escriba su numero de ID" />
                        <br />
                        <label>Direccion</label>
                        <br/>
                        <input type="text" length="100" id="inputAddress" required size="100" placeholder="Ej. Av 0 #23-24 "/>
                        <br/>
                        <label>E-mail: </label>
                        <br/>
                        <input max length="100" name="email" required size="100" Type="email" placeholder="name@example.com.co" />
                        <br />
                        <label>Teléfono: </label>
                        <br/>
                        <input maxlenght="100" name="telefono" required size="100" pattern="[0-8]{8}" required type="tel" placeholder="Ind. de ciudad + telefono" />
                        <br />
                        <label>Celular: </label>
                        <br/>
                        <input maxlength="100" name="Mobile" required size="100" pattern="[0-9]{9}" required type="tel" placeholder="Ingrese su numero de celular" />
                        <br />
                        <label>Cargo: </label>
                        <br/>
                        <input required size="50" list="Cargo" type="text" placeholder="Seleccione el cargo" />
                        <datalist id="Cargo">
                            <option value="Vendedor"></option>
                            <option value="Operario"></option>
                            <option value="Ejecutivo"></option>
                            <option value="Administrador"></option>
                        </datalist>
                        <br />
                        <label>Especialidad: </label>
                        <br/>
                        <input required size="50" list="Especialidad" type="text" placeholder="Seleccione la Especialidad" />
                        <datalist id="Especialidad">
                            <option value="Producto-01"></option>
                            <option value="Producto-02"></option>
                            <option value="Producto-03"></option>
                            <option value="Producto-04"></option>
                            <option value="Producto-05"></option>
                        </datalist>
                        <br />
                        <label>Fecha de Ingreso: </label>
                        <br/>
                        <input name="fecha"  type="date" />
                        <br />
                        <br />
                        <label>Observaciones: </label>
                        <br />
                        <textarea cols="95" name="observaciones" rows="8">
                            Escriba sus observaciones...
                        </textarea>
                        <br />
                        <br />
                        <button type="submit">Guardar</button>
                        <br />
                    </fieldset>

                </form>
        </div>
        )}

export default Registration;


