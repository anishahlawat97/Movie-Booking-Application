import React from "react";
import { Component } from "react";
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';
import './Header.css';

class Header extends Component{
    render(){
        return <div className="header">
           <ReactLogo className="logo"/>
        </div>        
    }
}

export default Header;