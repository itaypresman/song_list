import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    title: process.env.PROJECT_NAME,
};

const InterfaceSlice = createSlice({
    name: 'title',
    initialState,
    reducers: {
        setTitle(state, action) {
            state.title = action.payload;
        },
    }
});


export const { setTitle } = InterfaceSlice.actions;
export default InterfaceSlice.reducer;
