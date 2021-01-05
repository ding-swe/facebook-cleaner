import React, {useState} from 'react';
import './Home.css';
import HomeCard from '../../components/HomeCard/HomeCard'
import { RootState } from '../../store/reducers';
import { useSelector } from 'react-redux';
import { CardData } from '../../store/statsReducer';
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import {GiHamburgerMenu} from 'react-icons/gi';


export default function Home(){
    const selectTodos = (state: RootState) => state.stats;
    const todos = useSelector(selectTodos);

    const [isOpen, setOpen] = useState(false);


    function toggleSidebar(){
        setOpen(!isOpen); 
    }

    return (
        <div className="container">
            <div id="left-module" className={isOpen ? 'open' : 'closed'}>
                <div id="player-cards-menu" className={isOpen ? 'open' : 'closed'} onClick={()=>toggleSidebar()}>
                    <GiHamburgerMenu fontSize="36px"/>
                </div>
                <div className="player-cards">
                    <PlayerCard/>
                    <PlayerCard/>
                    <PlayerCard/>
                    <PlayerCard/>
                    <PlayerCard/>
                    <PlayerCard/>
                    <PlayerCard/>
                    <PlayerCard/>
                    <PlayerCard/>
                    <PlayerCard/>
                    <PlayerCard/>
                    <PlayerCard/>
                    <PlayerCard/>
                    <PlayerCard/>
                    <PlayerCard/>
                </div>
            </div>
            <div className="center-module">
                {
                    todos.cards.map((card : CardData) =>(
                        <HomeCard card={card}></HomeCard>
                    ))
                }
            </div>
        </div>
    )
}