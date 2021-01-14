import { DESELECT_PLAYER, PlayerActionTypes, SELECT_PLAYER } from './actions';


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
    {
      id: 2, 
      name: 'Giannis Antetokounmpo',
      position: 'PF,SF',
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
    case SELECT_PLAYER: {
      return {
        ...state,
        selected: [
          ...state.selected,
          action.payload.player
        ]
      };
    }
    case DESELECT_PLAYER: {
      return {
        ...state,
        selected: state.selected.filter(player => player.id !== action.payload.playerId)
      }
    }
    default:
      return state;
  }
}
