import React, { useState } from 'react';
import './Home.css';
import HomeCard from '../../components/HomeCard/HomeCard';
import SidePanel from '../../components/SidePanel/SidePanel';
import { RootState } from '../../store/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { CardData } from '../../store/statsReducer';


export default function Home() {
  const selectTodos = (state: RootState) => state.stats;
  const todos = useSelector(selectTodos);

  const selectPlayers = (state: RootState) => state.players;
  const players = useSelector(selectPlayers);


  return (
    <div className="container">
      <SidePanel/>
      <div className="center-module">
        {todos.cards.map((card: CardData) => (
          <HomeCard card={card}></HomeCard>
        ))}
      </div>
    </div>
  );
}
