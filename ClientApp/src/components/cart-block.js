import React from "react";
import {useSelector} from "react-redux";
import {Button, NavItem} from 'reactstrap';
import {cartMenu} from "./ProductCart/cartMenu";
import {Link, NavLink} from "react-router-dom";
export const CartBlock=()=>{
    const items = useSelector(state=>state.cart.itemsInCart);
    return (
            <div >

                <NavItem>
                    <NavLink tag={Link} className="text-dark" to='/cart'>Cart
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {items.length}
                        </span>
                    </NavLink>
                </NavItem>



            </div>
    )
}