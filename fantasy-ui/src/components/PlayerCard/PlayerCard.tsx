import React from 'react'

import './PlayerCard.css';
import {Link} from 'react-router-dom'

interface Props {

}


export default function PlayerCard(){
    return (
        <div className="player-card">
            <div>
                <a href="#" className="icon-button">O</a>
            </div>
            <div className="player-text">
                <b> Bam Adebayo (PF / C) </b>
                <div style={{fontSize: "14px", paddingTop: "4px"}}> 16.4 pts, 11.1 rbs, 3.3 ast, 2 blks, 3 stls </div>
            </div>
        </div>
    )
}