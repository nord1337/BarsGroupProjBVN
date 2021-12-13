import React, { Component } from 'react';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle,CardText, Button} from 'reactstrap';
import "./ServicesView.css"
import ProductService from "../api/ProductService";
import {ProductCard} from "../CarsList/ProductCard";

export class ServicesView extends Component {

    constructor(props) {
        super(props);
        this.state={
            TechServices:[],
            CosmeticServices:[]
        }
        this.fetchProducts= this.fetchProducts.bind(this)
    }
    async componentDidMount() {
        try {

            await this.fetchProducts();
        }
        catch (e) {
            console.log("server not responding")
        }


    }
    async fetchProducts()
    {
        const techProducts = await ProductService.getProducts(1,"Технические услуги");
        const cosmProducts = await ProductService.getProducts(2,"Косметические услуги");

        this.setState({
            TechServices:techProducts,
            CosmeticServices:cosmProducts
        });
    }

    render() {
        return (
        <div>
            <h2>Технические услуги</h2>
                <CardGroup>
                    {this.state.TechServices.map((serv)=>
                        (
                            // console.log(Car)
                            <ProductCard prod={serv} img={serv.imagePath} name={serv.name} id={serv.id} price={serv.price} Description={serv.description} />
                        )
                    )}
                </CardGroup>
            <h2>Косметические услуги</h2>
                <CardGroup>
                    {this.state.CosmeticServices.map((serv)=>
                        (
                            // console.log(Car)
                            <ProductCard prod={serv} img={serv.imagePath} name={serv.name} id={serv.id} price={serv.price} Description={serv.description} />
                        )
                    )}
            </CardGroup>
        </div>);
    }
}