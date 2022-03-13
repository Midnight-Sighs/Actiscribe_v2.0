import React from 'react'

const TableRows = (props) => {

  return (
    <>
    {/* {props.rowData && 
    props.rowData.map((data, i)=>(
        <tr key={`common-table-row-${i}`}>
            {Object.entries(data).map(property=>{
                return(
                    <>
                        <td>{property[1]}</td>
                    </>
                )
            })}
        </tr>
    ))} */}
    <tr>        
        {props.rowData &&
            props.rowData.map((data, i)=>(
                <td className={props.classname} key= {`common-table-row-${i}`}>
                    {data}
                </td>
            ))
        }
    </tr>
    </>
  )
}

export default TableRows