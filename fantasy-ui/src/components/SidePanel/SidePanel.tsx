import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './SidePanel.css';
import { IoChevronForwardSharp, IoChevronBackSharp} from 'react-icons/io5';
import { RootState } from '../../store/reducers';
import {BsSearch} from 'react-icons/bs'
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import { Player } from '../../store/playersReducer';
import { DESELECT_ALL_PLAYERS, SELECT_ALL_PLAYERS } from '../../store/actions';


export default function SidePanel(){

    const [isOpen, setOpen] = useState(false);
    const [playerMenuOpen, setPlayerMenuOpen] = useState(false);

    const selectPlayers = (state: RootState) => state.players;
    const players = useSelector(selectPlayers);

    const dispatch = useDispatch(); 
  
    function toggleSidebar() {
      setOpen(!isOpen);
    }

    return (
        <div id="left-module" className={isOpen ? 'open' : 'closed'}>
            <div className="player-cards-menu">
            <div id="player-cards-header" className={isOpen ? 'open' : 'closed'}>
                {isOpen && (
                <div style={{ marginRight: '215px', fontSize: '22px'}}>
                    players
                </div>
                )}
                {isOpen ? (
                <IoChevronBackSharp
                    fontSize="28px"
                    onClick={() => toggleSidebar()}
                />
                ) : (
                <IoChevronForwardSharp
                    fontSize="28px"
                    onClick={() => toggleSidebar()}
                />
                )}
            </div>
            {isOpen && 
                <div className="player-selectors">
                <div onClick={() => dispatch({type: SELECT_ALL_PLAYERS})}>select all</div>
                <div onClick={() => dispatch({type: DESELECT_ALL_PLAYERS})}>deselect all</div>
                <div onClick={()=>setPlayerMenuOpen(!playerMenuOpen)}> {playerMenuOpen ? 'less' : 'more'} </div>
                </div>
            }
            {isOpen && playerMenuOpen && 
                <div className = "expandedPlayerMenu">
                <div className="inputWithIcon">
                    <BsSearch id="BsSearch"/>
                    <input type="text" placeholder="search"></input>              
                </div>
                <div className="player-filters">
                    <div>
                    sort by
                    </div>
                    <div>
                    filter by
                    </div>
                </div>
                </div>
            }
            </div>
            <div className="player-cards">
            {players.players.map((player: Player) => (
                <PlayerCard player={player}></PlayerCard>
            ))}
            </div>
        </div>
    )
}