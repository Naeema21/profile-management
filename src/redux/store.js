
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authSlice, profileSlice } from './reducer';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  profiles: profileSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer
});
export default store;
