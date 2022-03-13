import { createSlice } from '@reduxjs/toolkit';

const initialState={
    userId: null,
    userDetails: {}
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setId: (state, action)=>{
            state.userId = action.payload
        },
        setDetails: (state, action)=>{
            state.userDetails = action.payload
        }
    }
});

export const { setId, setDetails } = userSlice.actions
export default userSlice.reducer