import React, { Component } from 'react';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle,CardText, Button} from 'reactstrap';
import "./../ServicesList/ServicesView.css"
import ProductService from "../api/ProductService";
import { ProductCard} from "./ProductCard";

export class CarsView extends Component {

    constructor(props) {
      super(props);
      this.state={
          ProductCars:[]
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
        const products = await ProductService.getProducts(3,"Автомобили");;
        console.log(products);
        this.setState({
            ProductCars:products
        });
    }


    render() {

        return (
            <div>
            <h2>CARS</h2>
            <CardGroup>
                {this.state.ProductCars.map((Car)=>
                    (
                        // console.log(Car)
                         <ProductCard prod={Car} img={Car.imagePath} name={Car.name} id={Car.id} price={Car.price} Description={Car.description} />
                    )
                )}
            </CardGroup>
            </div>
            );

    }
}