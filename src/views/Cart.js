import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllCart, removeCartByID } from '../actions'
import { product } from '../data/Product'

function Cart() {
    const [fashion, setFashion] = useState(product.filter(x => x.category == "Fashion"))
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        if (cart != undefined && cart.length > 0) {
            var total = 0;
            for (var i = 0; i < cart.length; i++) {
                total += cart[i].amount * cart[i].price;
            }
            setTotalPrice(total)
        }else{
            setTotalPrice(0)
        }
    }, [cart])

    return (
        <div className="card mr-2 mb-5">
            <div className="card-body">
                <h5 className="card-title">My Cart</h5>
                <table border="0" width="100%" className="table table-responsive">
                    <tbody>
                        {
                            cart.length > 0 ?

                                cart.map((x, i) => (
                                    <tr key={i}>
                                        <td>{x.name}</td>
                                        <td className="text-right" valign="middle">{x.amount}</td>
                                        <td className="text-right">Rp. {(x.amount * x.price).toString().replace(/[^0-9.\-]/g, '').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</td>
                                        <td><button className="btn btn-sm btn-danger" onClick={(e) => { dispatch(removeCartByID(x)) }}>x</button></td>
                                    </tr>
                                )
                                )
                                : <tr>
                                    <td><i>No Item Yet</i></td>
                                </tr>
                        }
                    </tbody>
                </table>
                {cart.length > 0 ?
                    <table border="0" width="100%">
                        <tbody>
                            <tr>
                                <td align="right"><button className="btn btn-sm btn-danger" onClick={(e) => { dispatch(removeAllCart()) }}>Remove All</button></td>
                            </tr>
                        </tbody>
                    </table> : ""
                }
                <table border="0" width="100%" className="mt-4">
                    <tbody>
                        <tr>
                            <td><b>Total Price</b></td>
                            <td align="right"><b>Rp. {totalPrice.toString().replace(/[^0-9.\-]/g, '').replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}</b></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Cart
