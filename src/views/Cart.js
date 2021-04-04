import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { product } from '../data/Product'

function Cart() {
    const [fashion, setFashion] = useState(product.filter(x=> x.category == "Fashion"))
    const cart = useSelector(state => state.cart)
    return (
        <div className="card mr-2" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">My Cart</h5>
                {
                    cart.length > 0 ? 

                    cart.map((x,i)=>(
                        <div key={i}>
                        <span>{x.name}</span>
                        <span>{x.amount}</span>
                        </div>
                    ))
                    : ""
                }
            </div>
        </div>
    )
}

export default Cart
