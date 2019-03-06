import React, {Component} from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    this.addToCart = this.addToCart.bind(this);
    }

    addToCart(item){
        this.setState({
            items: this.state.items.concat(item)
        })
        console.log(this.state.items);
    }

    render(){
        return <CartContext.Provider value = {{items: this.state.items, addToCart: this.addToCart}}>
            {this.props.children}   
        </CartContext.Provider>;
    }
    
}