import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Activities from '../../API/ActivitiesApi'
import { setAll, setArchived } from '../../Redux/Slices/activitySlice';


/** Gets the activities and archived activities into Redux for the logged in user */
const useActivities = () => {
  
    const dispatch = useDispatch();

    useEffect(()=>{
        getActivities();
        getArchivedActivities();
    },[])

    const getActivities=async()=>{
        try{
          let activities = await Activities.get()
          dispatch(setAll(activities.data));
        }catch(ex){
          console.log(ex)
        }
    }

    const getArchivedActivities=async()=>{
        try{
            let archived = await Activities.getArchived()
            dispatch(setArchived(archived))
        }catch(ex){
            console.log(ex)
        }
    }

}

export default useActivities