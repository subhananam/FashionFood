import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { addToCart, removeFromCart } from '../actions'
import { product } from '../data/Product'

function Fashion() {
    const [fashion, setFashion] = useState(product.filter(x=> x.category == "Fashion"))
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const auth = useSelector(state => state.auth)
    const redirect = useHistory()
    const checkIfAuthtenticated = (product) => {
        if(auth.check){
            dispatch(addToCart(product))
        } else {
            localStorage.setItem("redirectUrl", "/fashion")
            redirect.push("/login")
        }
    }
    return (
        <div className="row">
            {
                fashion.map((x,i)=>(
                    <div className="col-lg-4 col-md-6 mb-4" key={i}>
                        <div className="card">
                            <img src={process.env.PUBLIC_URL + x.image} className="card-img-top" alt={x.name} />
                            <div className="card-body">
                                <h5 className="card-title">{x.name}</h5>
                                <p className="card-text">Rp. {x.price.toString().replace(/[^0-9.\-]/g, '').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</p>
                                {
                                    cart.find(c=> c.product_id == x.id) == undefined ?
                                    <button className="btn btn-primary" onClick={(e) => {checkIfAuthtenticated(x)}}>Add to Cart</button>
                                    :
                                    <>
                                        <button className="btn btn-secondary" onClick={(e) => {dispatch(removeFromCart(x))}}>-</button>
                                        <span className="m-3">{cart.find(c=> c.product_id == x.id).amount}</span>
                                        <button className="btn btn-primary" onClick={(e) => {dispatch(addToCart(x))}}>+</button>
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

export default Fashion
