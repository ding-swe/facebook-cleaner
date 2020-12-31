import React from 'react'
import {Link} from 'react-router-dom'
import './Home.css';
import HomeCard from '../../components/HomeCard/HomeCard'
import { RootState } from '../../store/reducers';
import { useSelector } from 'react-redux';
import { CardData } from '../../store/statsReducer';

export default function Home(){
    const selectTodos = (state: RootState) => state.stats;
    const todos = useSelector(selectTodos);

    return (
        <div className="container">
            <div className="left-module">
                <div className="left-card">
                    <div>
                        <h1> ReadMe </h1>
                        <hr></hr>
                        <Link to="/About"> Long sentence with lots of text.
                            Long sentence with lots of text. Long sentence with lots of text.
                            Long <b>sentence</b> with lots of text. Long sentence with lots of text.
                            Long sentence with lots of text. Long sentence with lots of text.
                            Long sentence with lots of text. Long sentence with lots of text. </Link>
                    </div>
                </div>
                <div className="left-card">
                    <div>
                        <h1> ReadMe </h1>
                        <hr></hr>
                        <Link to="/About"> Long sentence with lots of text.
                            Long sentence with lots of text. Long sentence with lots of text.
                            Long sentence with lots of text. Long sentence with lots of text.
                            Long sentence with lots of text. Long sentence with lots of text.
                            Long sentence with lots of text. Long sentence with lots of text. </Link>
                    </div>
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