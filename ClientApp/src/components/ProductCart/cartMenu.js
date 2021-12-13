import React, {useState} from "react";
import {Button, Table} from "reactstrap";
import {useSelector} from "react-redux";
import {deleteItemInCart, setItemInCart} from "./reducer";
import {useDispatch} from "react-redux";
import axios from "axios";
export const cartMenu =()=>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Order_Items,setOrder_Items]=useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const items = useSelector(state=>state.cart.itemsInCart);

    async function  sendOffer(){


        items.map(item=>{
            var it={
                Product:{
                    Id:item.id
                },
                Quantity:1
            }
            Order_Items.push(it);
            })
        var obj = {
            "Order_items": Order_Items
        }
        console.log((JSON.stringify(obj)));
        const req= await axios.post('http://localhost:5000/api/order/create',(obj));
        if(req.status=='Ok'){
            console.log("OOOOkk");
        }

    }
    return (
        <div className='row mt-3'>
        CartMenu
        {
            items.length>0 ?
                <table className="table  text-center">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Img</th>
                        <th scope="col">Remove</th>
                    </tr>
                    </thead>
                        <tbody>
                    {
                        items.map((i,index)=>

                            < tr key={i.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{i.name}</td>

                                <td>
                                    {i.price}
                                </td>
                                <td>
                                    <button
                                        onClick={() => null}
                                        className="btn btn-primary btn-sm"
                                    >
                                        -
                                    </button>
                                    {i.quantity}
                                    <button
                                        onClick={() => null}

                                        className="btn btn-primary btn-sm"
                                        size="sm"
                                    >
                                        +
                                    </button>
                                </td>
                                <td>
                                  <img width={40} height={40} src={i.imagePath}/>
                                </td>
                                <td>
                                    <Button className="btn-danger" onClick={()=>null}/>
                                </td>


                            </tr >


                    )}
                        </tbody>
                    </table>
                : <div className='row mt-3'>Корзина пуста</div>
        }
        {
            items.length>0 ?
                <div>
                    <Button class='btn-primary' onClick={sendOffer} > Оформить заказ</Button>
                </div>
                : null

        }
    </div>
    )
}