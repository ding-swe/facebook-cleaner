import React from 'react'
import {Link} from 'react-router-dom'

export default function Home(){
    return (
    <div>
        <div className="center-square">
            <h1> Home </h1>
            <Link to="/About">About </Link>
        </div>
        <div className="center-square">
            <h1> Home </h1>
            <Link to="/About">About </Link>
        </div>
        <div className="center-square">
            <h1> Home </h1>
            <Link to="/About">About </Link>
        </div>
    </div>
    )
}