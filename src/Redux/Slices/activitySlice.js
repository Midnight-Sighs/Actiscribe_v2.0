import { createSlice, current } from '@reduxjs/toolkit';

const initialState={
    allActivities: [],
    archivedActivities: [],
    activeActivity: {}
};

const activitySlice = createSlice({
    name: "activities",
    initialState,
    reducers:{
        setAll: (state, action)=>{
            state.allActivities = action.payload
        },
        setArchived: (state, action)=>{
            state.archivedActivities = action.payload
        },
        addActivity: (state, action)=>{
            state.allActivities = [...state.allActivities, ...action.payload]
        }
    }
});

export const { setAll, setArchived, addActivity } = activitySlice.actions
export default activitySlice.reducer