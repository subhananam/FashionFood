import React, { useState } from 'react'
import { product } from '../data/Product'

function Fashion() {
    const [fashion, setFashion] = useState(product.filter(x=> x.category == "Fashion"))
    return (
        <div className="row">
            {
                fashion.map((x,i)=>(
                    <div className="col-md-4 mb-5  mr-2" key={i}>
                        <div className="card mr-2" style={{width: '18rem'}}>
                            <img src={process.env.PUBLIC_URL + x.image} className="card-img-top" alt={x.name} />
                            <div className="card-body">
                                <h5 className="card-title">{x.name}</h5>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Fashion
