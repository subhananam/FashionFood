import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../actions'
import { product } from '../data/Product'

function Food() {
    const [food, setFood] = useState(product.filter(x=> x.category == "Food"))
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    return (
        <div className="row">
            {
                food.map((x,i)=>(
                    <div className="col-md-4 mb-4" key={i}>
                        <div className="card">
                            <img src={process.env.PUBLIC_URL + x.image} className="card-img-top" alt={x.name} />
                            <div className="card-body">
                                <h5 className="card-title">{x.name}</h5>
                                {
                                    cart.find(c=> c.product_id == x.id) == undefined ?
                                    <button className="btn btn-primary" onClick={(e) => {dispatch(addToCart(x))}}>Add to Cart</button>
                                    :
                                    <>
                                        <button className="btn btn-primary m-2" onClick={(e) => {dispatch(removeFromCart(x))}}>-</button>
                                        <span>{cart.find(c=> c.product_id == x.id).amount}</span>
                                        <button className="btn btn-primary m-2" onClick={(e) => {dispatch(addToCart(x))}}>+</button>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Food
