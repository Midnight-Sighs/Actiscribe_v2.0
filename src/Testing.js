import React, { useState, useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Login from './Components/User/Login'
import UserDetails from './Tools/Users/UserDetails';

import TableHeaders from './Components/Legos/Table/TableHeaders';
import TableRows from './Components/Legos/Table/TableRows';

import CustomFilter from './Tools/CustomFilter'
import Activities from './API/ActivitiesApi'
import { setAll } from './Redux/Slices/activitySlice'
import NewActivity from './Components/ActivityCrud/NewActivity';

export const Testing = () => {

    const activity = useSelector((state)=>state.activity.allActivities);
    let details = UserDetails();
    
    const [ filteredActivities, setFilteredActivities ]=useState([])
    const headers= ["id", "name", "description", "dow-1","dow-2","dow-3"]
    
    useEffect(()=>{
      if(details) console.log(details)
    },[details])

    useEffect(()=>{
      if(activity && activity.length >0) {
        // let temp = CustomFilter.filterSingle(activity, "dow_one", "Physical")
        let temp = CustomFilter.filterDOWs(activity, "Physical")
        setFilteredActivities(temp)
      }
    },[activity])

  
  return (
      <>
        <Login />
        <table>

          <tbody>
          <TableHeaders headingData={headers} />
            {activity.map((activity)=>(
              <TableRows key={`activity-table-row-${activity.id}`}rowData={[activity.id, activity.name, activity.description, activity.dow_one, activity.dow_two, activity.dow_three ]} />
              ))}

          </tbody>
        </table>

        <NewActivity />

      </>
  )
}

export default Testing;