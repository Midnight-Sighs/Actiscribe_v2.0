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
		let temp = [];
		let properties = ["dow_one", "dow_two", "dow_three"];
		properties.forEach((property)=>{
		array.filter((each)=>{
			if(each[property]===condition) temp.push(each)
		})
		})
		return temp
	}

	/**Searches certain fields by term.  
	 * @variable type - can include "Note", "Resident", "Activity", "Participation"
	 * @variable array - the data being searched
	 * @variable term - the term searching
	 */
	 const filterByTerm=(type, array, term )=>{
		 let temp =[];
		switch(type){
			case "Note":
				array.filter((each)=>{
					if(each.content.includes(term)) temp.push(each)
				})
				break
			case "Resident":
				array.filter((each)=>{
					if(each.r_first_name.includes(term) || each.r_last_name.includes(term)) temp.push(each)
				})
				break
			case "Activity":
				array.filter((each)=>{
					if(each.name.includes(term) || each.description.includes(term)) temp.push(each)
				})
		}
		return temp
	}


	const CustomFilter = {
		filterSingle, filterDOWs, filterByTerm
	}


export default CustomFilter