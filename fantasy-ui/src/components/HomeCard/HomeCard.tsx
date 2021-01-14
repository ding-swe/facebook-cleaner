import React from 'react';
import { CardData } from '../../store/statsReducer';
import { RootState } from '../../store/reducers';
import { useSelector } from 'react-redux';
import { Player } from '../../store/playersReducer';


import './HomeCard.css';

interface Props {
  card: CardData;
}

export default function HomeCard(props: Props) {
  const selectPlayers = (state: RootState) => state.players;
  const players = useSelector(selectPlayers);

  return (
    <div className="center-card">
      <h1> {props.card.title} </h1>
      <div>
        <b>{props.card.body}</b>
        <div>
          {players.selected.map((player:Player)=>(
            player.name + ' ' + player.steals + ' steals \n'
          ))}
        </div>
      </div>
    </div>
  );
}
