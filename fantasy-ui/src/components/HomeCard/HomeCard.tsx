import React from 'react';
import { CardData } from '../../store/statsReducer';

import './HomeCard.css';

interface Props {
  card: CardData;
}

export default function HomeCard(props: Props) {
  return (
    <div className="center-card">
      <h1> {props.card.title} </h1>
      <div>
        <b>{props.card.body}</b>
      </div>
    </div>
  );
}
