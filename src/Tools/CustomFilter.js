import React from 'react'

	/**function to quickly filter an array by a single property and condition and return said array.
		* @variable props.array - what to be filtered
		* @variable props.property - the property to filter by
		* @variable props.condition - the condition of the property to be returned
		*/
	const filterSingle=(array, property, condition)=>{
		let temp = []
		array.filter((each)=>{
			if(each[property]===condition) temp.push(each)
		})
		return temp
	}

	/**Filters activities by the dimensions of wellness.  
	 * @variable array - what's being filtered
	 * @variable condition - the condition by which its filtering
	 */
  const filterDOWs=(array, condition)=>{
		debugger
		let temp = [];
		let properties = ["dow_one", "dow_two", "dow_three"];
		properties.forEach((property)=>{
		array.filter((each)=>{
			if(each[property]===condition) temp.push(each)
		})
		})
		return temp
	}

	


	const CustomFilter = {
		filterSingle, filterDOWs
	}


export default CustomFilter