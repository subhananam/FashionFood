import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { removeAllCart, signOut } from '../actions'

function Navbar() {
    const auth = useSelector(state => state.auth)
    const redirect = useHistory()
    const dispatch = useDispatch()

    const logout = () =>{
        dispatch(removeAllCart())
        dispatch(signOut())
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <NavLink className="navbar-brand" to="/" exact>FashionFood</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/fashion">Fashion</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/food">Food</NavLink>
                        </li>
                    
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        {
                            auth.check ?
                            <>
                                <li className="nav-item">
                                    <span className="nav-link">{auth.user}</span>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-light" onClick={logout}>Logout</button>
                                </li>
                            </>
                            :
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                            </>
                        }
                        </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
