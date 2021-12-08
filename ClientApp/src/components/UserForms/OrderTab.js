import React, { Component } from 'react';
import {Table} from "reactstrap";
import ProductService from "../api/ProductService";

export class OrderTab extends  React.Component{
    constructor(props) {
        super(props);
        this.state={
            Orders:[]
        }
        this.fetchOrders= this.fetchOrders.bind(this)

    }
    async componentDidMount() {
        try {

            await this.fetchOrders();
        }
        catch (e) {
            console.log("server not responding")
        }


    }
    async fetchOrders()
    {
        const orders = await ProductService.getUserOrders();;

        this.setState({
            Orders:orders

        });
        console.log(this.state.Orders)
    }

    render() {
        return(
            <div>{this.state.Orders.map((order)=>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>
                            Order:{order.Id} at {order.CreatedAt}
                        </th>
                        <th>
                            Product
                        </th>
                        <th>
                            Quantity
                        </th>
                        <th>
                            im
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    {
                        order.Order_Items.map((item)=>

                            <tr>
                                <th scope="row">
                                    1
                                </th>
                                <td>
                                    {item.Product.Name}
                                </td>
                                <td>
                                    {item.Quantity}
                                    {console.log(item.Quantity)}
                                </td>
                                <td>
                                    <img width={40} height={40} src={item.Product.ImagePath}/>
                                </td>

                            </tr>

                        )}


                    </tbody>
                </Table>

            )}
            </div>
                )


    }
}
