import React from 'react';
import {useSelector} from 'react-redux';
import { 
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Typography
  } from '@material-ui/core';
  import './TotalAssessments.css';
//function that returns the total amount of assessments
function TotalAssessments(){
//get data from the table
    const form = useSelector((store)=>store.form);
//conditionally render the number of assessments
    const getTotalAssessments=()=>{
        let totalDisplay=''
        //if form data doesn't exist, display loading
        if(!form){
            totalDisplay= 
            <div className="total-assessments">
              <h1>Loading</h1>
            </div>
        }//end if
        //if form data exist, display number of assessments
        else{
            totalDisplay=
                <div className="total-assessments">
                  <h1>Total number of assessments: {form.length}</h1>
                </div>
        }//end else
        return totalDisplay;
    }

//conditionally render the number of assessments
return(
    <>
    {getTotalAssessments()}
    </>
)
}

export default TotalAssessments;