import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css';

export default function Home(){
    return (
        <div className="container">
            <div className="left-module">
                <div className="left-card">
                    <h1> ReadMe </h1>
                    <Link to="/About"> Long sentence with lots of text </Link>
                </div>
            </div>
            <div className="center-module">
                <div className="center-card">
                    <h1> Home </h1>
                    <Link to="/About">About </Link>
                </div>
                <div className="center-card">
                    <h1> Home </h1>
                    <Link to="/About">About </Link>
                </div>
                <div className="center-card">
                    <h1> Home </h1>
                    <Link to="/About">About </Link>
                </div> 
                <div className="center-card">
                    <h1> Home </h1>
                    <Link to="/About">About </Link>
                </div>
            </div>
        </div>
    )
}