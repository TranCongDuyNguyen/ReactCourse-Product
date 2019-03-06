import React, {Component} from 'react';
import {Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import axios from 'axios';

import { CartContext } from '../contexts/CartItems';

export default class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get("http://localhost:8080/products").then(res => {
            this.setState({
                products: res.data
            })
        })
    }

    render(){
        let {products} = this.state;
        return <div>
            <Container>
                <Row className = "mt-3">
                    <Col lg="3"><h2>Products</h2></Col>
                </Row>
                <Row>
                    {products.map(
                        product => (
                            <Col md="3">
                            <Card>
                                <CardImg top width="100%" src={product.image} />
                                <CardBody>
                                <CardTitle>{product.name}</CardTitle>
                                <CardText>{product.description}</CardText>
                                <CartContext.Consumer>
                                    {({addToCart}) => (
                                        <Button onClick = { () => (addToCart(product)) }>Add to cart</Button>
                                    )}
                                </CartContext.Consumer>
                                </CardBody>
                            </Card>
                            </Col>
                        )
                    )}
                </Row>
            </Container>
        </div>
    }
}