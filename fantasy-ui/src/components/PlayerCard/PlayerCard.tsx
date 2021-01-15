import React, { useState } from 'react';

import './PlayerCard.css';
import { Player } from '../../store/playersReducer';
import {SELECT_PLAYER, DESELECT_PLAYER} from '../../store/actions'
import { useDispatch } from 'react-redux';

interface Props {
    player: Player
}


export default function PlayerCard(props: Props) {
    const dispatch = useDispatch(); 
    const [isSelected, setSelected] = useState(false);

    const myPlayer = props.player; 

    function handleSelect(player:Player){
        if(isSelected){
            dispatch({
                type: DESELECT_PLAYER,
                payload: {
                    playerId: player.id 
                }
            });
            setSelected(false);
        } else{
            dispatch({
                type: SELECT_PLAYER,
                payload:{
                    player: player
                }
            });
            setSelected(true);
        }
    }

    function getInitials(name:string){
        return name.split(" ").map((n, i)=>(i===0||i===1)&&n[0]).filter(n=>n).join(""); 
    }
    return (
        <div className={`player-card ${isSelected ? 'player-card-select' : ''}`} onClick={()=>handleSelect(myPlayer)}>
            <div>
                <a href="#" className="player-pic">
                    {getInitials(myPlayer.name)}
                </a>
            </div>
            <div className="player-text">
                <b> {myPlayer.name + ' ' + '(' + myPlayer.position + ')'} </b>
                <div style={{ fontSize: '14px', paddingTop: '4px' }}>
                {' ' + myPlayer.points + ' pts, ' + myPlayer.rebounds + ' rbs, ' +  myPlayer.assists + ' ast, ' + 
                myPlayer.blocks + ' blks, ' + myPlayer.steals + ' stls '}
                </div>
            </div>
        </div>
    );
}
