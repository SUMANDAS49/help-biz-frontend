import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import Home from './components/core/Home'
import InvoiceDisplayByLink from './components/invoice/core/InvoiceDisplayByLink'
import InvoiceCreation from "./components/invoice/InvoiceCreation"
import SearchInvoice from './components/invoice/SearchInvoice'
function Routes() {

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/signin" component={Signin} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/invoice/create" component={InvoiceCreation} />
                    <Route exact path="/invoice/display/email/:id" component={InvoiceDisplayByLink} />
                    <Route exact path="/invoice/search" component={SearchInvoice} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routes
