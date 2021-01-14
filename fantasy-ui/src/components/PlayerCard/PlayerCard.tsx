import React, { useState } from 'react';

import './PlayerCard.css';
import { Link } from 'react-router-dom';
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
                meta: {
                    id: 0 // todo 
                }
            });
            setSelected(false);
        } else{
            dispatch({
                type: SELECT_PLAYER,
                meta:{
                    player: player
                }
            });
            setSelected(true);
        }
    }

    return (
        <div className="player-card" onClick={()=>handleSelect(myPlayer)}>
            <div>
                <a href="#" className="player-pic">
                AB
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
