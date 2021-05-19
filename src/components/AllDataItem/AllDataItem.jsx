import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const AllDataItem = ( { row } ) => {

    //needed for history
    const history = useHistory();

    const seeDetails = () =>{
        history.push(row.link_path)
    }

    return (
        <tr className="allDataRow">
            <td>{row.chart}</td>
            <td>{row.details}</td>
            <td><Button onClick={()=>seeDetails()}>See data</Button></td>
        </tr>
    )
}

export default AllDataItem
