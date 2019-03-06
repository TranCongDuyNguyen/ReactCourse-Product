import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';

import { CartContext } from '../contexts/CartItems';

export default class TopMenuBar extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render(){
        return <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Hello</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="mr-2">
                <Link to="/products">Products</Link>  
              </NavItem>
              <NavItem>
                <Link to="/users">Users</Link> 
              </NavItem>
              <NavItem>
                <CartContext.Consumer>
                    {({items}) => <Link to="/products">Cart {items.length}</Link> }
                </CartContext.Consumer>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
    }
}