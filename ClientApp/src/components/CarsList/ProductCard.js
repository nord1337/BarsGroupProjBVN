import React, { Component } from 'react';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle,CardText, Button} from 'reactstrap';
import "./../ServicesList/ServicesView.css"
import {render} from "react-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteItemInCart, setItemInCart} from "../ProductCart/reducer";
export const ProductCard=({prod})=> {


    const dispatch = useDispatch();
    const handleClick=(e)=>{
        e.stopPropagation();
        if(isItemInCard){
            dispatch(deleteItemInCart(prod.id))
        }
        else{
            dispatch(setItemInCart(prod))
        }


    }
    const items = useSelector(state=>state.cart.itemsInCart);
    const isItemInCard=items.some(item=>item.id===prod.id);
            return(
                <Card>
                    <CardImg
                        alt="Card image cap"
                        src={prod.imagePath}
                        height = "228px"
                        width="100%"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {prod.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                        </CardSubtitle>
                        <CardText>
                            {prod.Description} : {prod.price}
                        </CardText>
                        {   isItemInCard?
                            <CardText>
                                Уже в корзине!
                                <Button onClick={handleClick}>
                                    Убрать из корзины.
                                </Button>
                            </CardText>

                            : <Button onClick={handleClick}>
                            Заказать
                            </Button>

                        }

                    </CardBody>
                </Card>
            )


        //}
}
