import { Link } from "react-router-dom";
import React from 'react'

export function Location() {
    return (
        <div>
            this is location
            <h2 className="exploretxt font2"><Link to="/masp" className="exploretxt-Link">Go To Next Page to Explore More about sadashiva printing press</Link></h2>
        </div>
    )
}

export default Location
