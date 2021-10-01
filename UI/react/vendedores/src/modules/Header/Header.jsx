import React, { Component } from 'react';
import './Header.css';
//import logo from '../../HARAMBEE1.jpg';
//import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
//import { FaGem, FaHeart } from 'react-icons/fa';
//import 'react-pro-sidebar/dist/css/styles.css';



export default class Header extends Component {
    render() {
        return (
            <div className="Nav">
                    <nav>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Ventas</a></li>
                            <li><a href="#">Estado de Ventas</a></li>
                            <li><a href="#">Vendedores</a></li>
                            <li><a href="#">Permisos de Usuario</a></li>
                            <li><a href="#">Contactenos</a></li>
                        </ul>
                    </nav>
                </div>
        )
    }
}
