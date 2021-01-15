import { Player } from "./playersReducer";

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const SELECT_PLAYER = 'SELECT_PLAYER';
export const DESELECT_PLAYER = 'DESELECT_PLAYER';
export const SELECT_ALL_PLAYERS = 'SELECT_ALL_PLAYERS';
export const DESELECT_ALL_PLAYERS = 'DESELECT_ALL_PLAYERS';

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: string;
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE;
  payload: {
    timestamp: number;
  };
}

interface SelectPlayerAction {
  type: typeof SELECT_PLAYER;
  payload: {
    player: Player; 
  };
}

interface DeselectPlayerAction {
  type: typeof DESELECT_PLAYER;
  payload: {
    playerId: number; 
  };
}

interface SelectAllPlayerAction {
  type: typeof SELECT_ALL_PLAYERS;
  payload: { };
}

interface DeselectAllPlayerAction {
  type: typeof DESELECT_ALL_PLAYERS;
  payload: { };
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction;
export type PlayerActionTypes = SelectPlayerAction | DeselectPlayerAction | SelectAllPlayerAction | DeselectAllPlayerAction; 
