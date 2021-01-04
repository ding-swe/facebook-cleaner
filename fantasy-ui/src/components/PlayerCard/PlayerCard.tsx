import React from 'react'

import './PlayerCard.css';
import {Link} from 'react-router-dom'

interface Props {

}


export default function PlayerCard(){
    return (
        <div className="player-card">
            <div>
                <h1> ReadMe </h1>
                <hr></hr>
                <Link to="/About"> Long sentence with lots of text.
                    Long sentence with lots of text. Long sentence with lots of text.
                    Long <b>sentence</b> with lots of text. Long sentence with lots of text.
                    Long sentence with lots of text. Long sentence with lots of text.
                    Long sentence with lots of text. Long sentence with lots of text. 
                </Link>
            </div>
        </div>
    )
}