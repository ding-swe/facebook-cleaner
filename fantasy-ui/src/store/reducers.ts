import { combineReducers } from 'redux';
import { statsReducer } from './statsReducer';

export const rootReducer = combineReducers({
  stats: statsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
