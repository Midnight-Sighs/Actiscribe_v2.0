import React from 'react'

const TableHeaders = (props) => {

  return (
    <>
    {/* {props.headingData && 
    props.headingData.map((data, i)=>(
        <tr key={`common-table-row-${i}`}>
            {Object.entries(data).map(property=>{
                return(
                    <>
                        <td>{property[0]}</td>
                    </>
                )
            })}
        </tr>
    ))} */}
    <tr>
    {props.headingData && 
        props.headingData.map((data, i)=>(
            <th className={props.classname} key={`common-table-header-${i}`}>
                {data}
            </th>
        ))
    }
    </tr>
    </>
  )
}

export default TableHeaders