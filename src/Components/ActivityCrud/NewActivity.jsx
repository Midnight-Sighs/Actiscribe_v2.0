import React from 'react'

const NewActivity = () => {
  return (

    <form>
        <label htmlFor="name">Activity Name</label>
        <input id="name" required/>

        <label htmlFor="description">Description</label>
        <input id="description" />

    </form>
  )
}

export default NewActivity