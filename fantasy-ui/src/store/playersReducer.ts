import { PlayerActionTypes } from './actions';

export type Player = {
  id: number; 
  name: string;
  position: string;
  points: number;
  rebounds: number;
  assists: number;
  blocks: number;
  steals: number;
};

export type PlayersState = {
  selected: Player[]; 
  players: Player[];
};

const initialState: PlayersState = {
  selected: [],
  players: [
    {
      id: 1, 
      name: 'Bam Adebayo',
      position: 'PF,C',
      points: 16.4,
      rebounds: 11.1,
      assists: 3.3,
      blocks: 2,
      steals: 3,
    },
  ]
};

export function playersReducer(
  state = initialState,
  action: PlayerActionTypes
): PlayersState {
  switch (action.type) {
    case 'SELECT_PLAYER': {
      return {
        ...state,
        selected: [
          ...state.selected,
          action.meta.player
        ]
      };
    }
    case 'DESELECT_PLAYER': {
      return {
        ...state,
        selected: [
          ...state.selected.slice(0,action.meta.playerIndex),
          ...state.selected.slice(action.meta.playerIndex+1)
        ]
      }
    }
    default:
      return state;
  }
}
