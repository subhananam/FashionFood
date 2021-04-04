import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { removeAllCart, signIn } from '../../actions'

function Login() {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [emailMsg, setEmailMsg] = useState("")
    const [pwMsg, setPwMsg] = useState("")

    const redirect = useHistory()

    const login = (e) => {
        e.preventDefault();
        var cekEmail = /(\w+)\@(\w+)\.[a-zA-Z]/g;
        var cekPassword = /^[A-Za-z0-9]\w{8,20}$/;
        if(cekEmail && cekPassword){
            setEmailMsg("")
            setPwMsg("")
            dispatch(signIn(email))
            dispatch(removeAllCart())
        }
        if(!cekEmail){
            setEmailMsg("Email is not valid")
        }
        if(!cekPassword){
            setPwMsg("Password must be at least 8 characters length and contain Uppercase, Lowercase and Number")
        }
    }

    useEffect(() => {
        if(auth.check){
            var redirectUrl = localStorage.getItem("redirectUrl") || "/";
            localStorage.removeItem("redirectUrl")
            redirect.push(redirectUrl)
        }
    }, [auth.check])
    return (

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 m-20"></div>
                <div className="col-4">
                    <div className="card">
                        <h5 className="card-header bg-primary text-white">Login</h5>
                        <div className="card-body">
                            <form onSubmit={login}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="email"/>
                                    <span className="text-danger">{emailMsg}</span>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="password" />
                                    <span className="text-danger">{pwMsg}</span>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
