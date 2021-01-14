import React, { useState } from 'react';
import './Home.css';
import HomeCard from '../../components/HomeCard/HomeCard';
import { RootState } from '../../store/reducers';
import { useSelector } from 'react-redux';
import { CardData } from '../../store/statsReducer';
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import { IoChevronForwardSharp, IoChevronBackSharp} from 'react-icons/io5';
import {BsSearch} from 'react-icons/bs'
import { Player } from '../../store/playersReducer';

export default function Home() {
  const selectTodos = (state: RootState) => state.stats;
  const todos = useSelector(selectTodos);

  const selectPlayers = (state: RootState) => state.players;
  const players = useSelector(selectPlayers);

  const [isOpen, setOpen] = useState(false);
  const [playerMenuOpen, setPlayerMenuOpen] = useState(false);

  function toggleSidebar() {
    setOpen(!isOpen);
  }

  return (
    <div className="container">
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
              <a>select all</a>
              <a>deselect all</a>
              <a onClick={()=>setPlayerMenuOpen(!playerMenuOpen)}> {playerMenuOpen ? 'less' : 'more'} </a>
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
      <div className="center-module">
        {todos.cards.map((card: CardData) => (
          <HomeCard card={card}></HomeCard>
        ))}
      </div>
    </div>
  );
}
