import React from 'react'
import {Link} from 'react-router-dom'

export default function About(){
    return (
        <div className="center-square">
            <h1> About </h1>
            <Link to="/">Back to Home </Link>
        </div>
    )
}