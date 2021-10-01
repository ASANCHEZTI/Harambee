import React, { Component } from 'react';
import './Header.css';
import logo from '../../HARAMBEE1.jpg';
import 'react-pro-sidebar/dist/css/styles.css';


export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <img src={logo} />
            </div>
        )
    }
}
