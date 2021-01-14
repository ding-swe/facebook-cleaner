import { combineReducers } from 'redux';
import { playersReducer } from './playersReducer';
import { statsReducer } from './statsReducer';

export const rootReducer = combineReducers({
  stats: statsReducer,
  players: playersReducer
});

export type RootState = ReturnType<typeof rootReducer>;
