import React from 'react'
import Cart from '../views/Cart'
import Navbar from './Navbar'

function MainLayout(props) {
    return (
        <div>
            <Navbar/>
            <div className="mt-4 container">
                <div className="row">
                    <div className="col-md-8">
                        {props.body}
                    </div>
                    <div className="col-md-4">
                        <Cart/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainLayout
