import React, { useEffect, useState } from 'react'
import { isAuthenticated } from '../auth/authHelper'

import Base from './Base'
import { Link, Redirect } from "react-router-dom"
import "./core-styles/HomeStyle.css"

function Home() {
    const [redirect, setredirect] = useState(false);
    useEffect(() => {
        if (!isAuthenticated()) {
            setredirect(true)
        }
    }, [])
    const handleRedirect = () => {
        return <Redirect to="/signup" />
    }
    return (
        <Base>
            <div className="homeBody">
                <div className="controlPanel">
                    <div className="leftColumn">
                        <div className="item1"><Link style={{ textDecoration: "none" }} to="/invoice/create">Create Invoice</Link></div>
                        <div className="item1"><Link style={{ textDecoration: "none" }} to="/invoice/search">Search Invoice</Link></div>
                        <div className="item1"><Link style={{ textDecoration: "none" }}>Search Customer</Link></div>
                        <div className="item1"><Link style={{ textDecoration: "none" }}>Ladger</Link></div>
                    </div>

                </div>

            </div>
            {/* <InvoiceCreation /> */}
        </Base >


    )
}

export default Home
