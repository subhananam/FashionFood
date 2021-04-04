import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainLayout from '../components/MainLayout'
import Login from '../views/auth/Login'
import Fashion from '../views/Fashion'
import Food from '../views/Food'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <MainLayout body={<Fashion/>}/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/fashion">
                    <MainLayout body={<Fashion/>}/>
                </Route>
                <Route exact path="/food">
                    <MainLayout body={<Food/>}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
