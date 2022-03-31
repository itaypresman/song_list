import { combineReducers, configureStore } from '@reduxjs/toolkit';
import SongSlice from '@Store/SongSlice.js';
import InterfaceSlice from '@Store/InterfaceSlice.js';


const rootReducer = combineReducers({
    song: SongSlice,
    interface: InterfaceSlice,
});


export default configureStore({ reducer: rootReducer });
