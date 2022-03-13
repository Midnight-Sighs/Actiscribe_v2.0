import { configureStore } from '@reduxjs/toolkit';

import activitySlice from './Slices/activitySlice'
import userSlice from './Slices/userSlice';

export const store = configureStore({
    reducer: {
        activity: activitySlice,
        user: userSlice,
    },
})