import React from 'react';
import AddDonar from '../addDonar/AddDonar';
import './cart.css'
const Cart = (props) => {
    /* const { cart } = props;
    const total = cart.reduce((previous, location) => previous + location.salary, 0); */
    let {cart} = props;
        let total = 0 ;
            for(let manSalary of cart){
                 total = total + parseFloat(manSalary.salary ) ;
            }
    return (
        <div>
            <div className="added-style">
                <h3>Add Your Donar: {props.cart.length}</h3>
                <br />
                <p>Total Donation: {total} $</p>
            </div>
            <div>
                <ul>
                    {
                        cart.map(donar => <li className="list" >
                            <span>{donar.key}</span>
                             <span>{donar.name}</span>
                        </li>)
                    }
                </ul>
                

            </div>
        </div>
    );
};

export default Cart;