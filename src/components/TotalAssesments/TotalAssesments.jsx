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

function TotalAssessments(){

    const form = useSelector((store)=>store.form);

    const getTotalAssessments=()=>{
        let totalDisplay=''
        if(!form){
            totalDisplay= 
            <div className="total-assessments">
              <h2>Loading</h2>
            </div>
        }
        else{
            totalDisplay=
                <div className="total-assessments">
                  <h2>Total number of assessments: {form.length}</h2>
                </div>

        }
        return totalDisplay;
    }


return(
    <>
    {getTotalAssessments()}
    </>
)
}

export default TotalAssessments;