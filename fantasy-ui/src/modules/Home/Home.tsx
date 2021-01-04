import React from 'react'
import './Home.css';
import HomeCard from '../../components/HomeCard/HomeCard'
import { RootState } from '../../store/reducers';
import { useSelector } from 'react-redux';
import { CardData } from '../../store/statsReducer';
import PlayerCard from '../../components/PlayerCard/PlayerCard';

export default function Home(){
    const selectTodos = (state: RootState) => state.stats;
    const todos = useSelector(selectTodos);

    return (
        <div className="container">
            <div className="left-module">
               <PlayerCard/>
               <PlayerCard/>
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