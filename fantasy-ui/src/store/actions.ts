import { Player } from "./playersReducer";

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const SELECT_PLAYER = 'SELECT_PLAYER';
export const DESELECT_PLAYER = 'DESELECT_PLAYER';

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: string;
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE;
  meta: {
    timestamp: number;
  };
}

interface SelectPlayerAction {
  type: typeof SELECT_PLAYER;
  meta: {
    player: Player; 
  };
}

interface DeselectPlayerAction {
  type: typeof DESELECT_PLAYER;
  meta: {
    playerIndex: number; 
  };
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction;
export type PlayerActionTypes = SelectPlayerAction | DeselectPlayerAction; 
