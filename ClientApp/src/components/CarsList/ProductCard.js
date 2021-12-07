import React, { Component } from 'react';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle,CardText, Button} from 'reactstrap';
import "./../ServicesList/ServicesView.css"
import {render} from "react-dom";
export class ProductCard extends React.Component{
    constructor(props) {
        super(props);
    }
        render() {
            return(
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={this.props.img}
                        height = "228px"
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {this.props.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                        </CardSubtitle>
                        <CardText>
                            {this.props.Description} : {this.props.price}
                        </CardText>

                        <Button >
                            Заказать
                        </Button>
                    </CardBody>
                </Card>
            )


        }
}