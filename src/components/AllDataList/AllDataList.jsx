import AllDataItem from '../AllDataItem/AllDataItem';
import React from 'react'

const AllDataList = ( { rows } ) => {
    //map through the rows of All Data
    return (
        <tbody>
            {rows.map( row => <AllDataItem row={row} key={row.chart}/>)}
        </tbody>
    )
}

export default AllDataList
