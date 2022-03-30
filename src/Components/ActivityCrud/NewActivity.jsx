import React from 'react';
import { useDispatch } from 'react-redux';

import ActivitiesApi from '../../API/ActivitiesApi';
import { addActivity } from '../../Redux/Slices/activitySlice';

const NewActivity =() => {

  const dispatch = useDispatch();

  const newActivitySubmit=async(e)=>{
    e.preventDefault();
    let submission = new FormData(e.target);
    let formData = Object.fromEntries(submission.entries());
    let newActivity = {...formData, is_active: true, is_archived: false}

    console.log(newActivity)
    try{
      let response = await ActivitiesApi.create({data:newActivity})
      if(response.errors){
        console.log(response.errors)
      }
      else {
        console.log (response.message) //Replace with success Toast when added
        dispatch(addActivity(response.data))
      }
    }
    catch(ex){
      console.log(ex)
    } 
  }


  return (

    <form onSubmit={newActivitySubmit}>
        <label htmlFor="name">Activity Name</label>
        <input name="name" id="name" required/>

        <label htmlFor="description">Description</label>
        <input name="description" id="description" />

        <select name="dow_one">
            <option value="">Select One</option>
            <option value="Social">Social</option>
            <option value="Physical">Physical</option>
            <option value="Emotional">Emotional</option>
            <option value="Spiritual">Spiritual</option>
            <option value="Environmental">Environmental</option>
            <option value="Financial">Financial</option>
            <option value="Creative">Creative</option>
            <option value="Intellectual">Intellectual</option>
            <option value="Occupational">Occupational</option>
            <option value="Sensory">Sensory</option>
        </select>

        <select name="dow_two">
            <option value="">Select One</option>
            <option value="Social">Social</option>
            <option value="Physical">Physical</option>
            <option value="Emotional">Emotional</option>
            <option value="Spiritual">Spiritual</option>
            <option value="Environmental">Environmental</option>
            <option value="Financial">Financial</option>
            <option value="Creative">Creative</option>
            <option value="Intellectual">Intellectual</option>
            <option value="Occupational">Occupational</option>
            <option value="Sensory">Sensory</option>
        </select>

        <select name="dow_three">
            <option value="">Select One</option>
            <option value="Social">Social</option>
            <option value="Physical">Physical</option>
            <option value="Emotional">Emotional</option>
            <option value="Spiritual">Spiritual</option>
            <option value="Environmental">Environmental</option>
            <option value="Financial">Financial</option>
            <option value="Creative">Creative</option>
            <option value="Intellectual">Intellectual</option>
            <option value="Occupational">Occupational</option>
            <option value="Sensory">Sensory</option>
        </select>

        <button type="submit">Create New Activity</button>
    </form>
  )
}

export default NewActivity