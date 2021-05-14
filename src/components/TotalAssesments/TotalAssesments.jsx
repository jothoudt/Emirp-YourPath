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

function TotalAssessments(){

    const form = useSelector((store)=>store.form);

    const getTotalAssessments=()=>{
        let totalDisplay=''
        if(!form){
            totalDisplay= <><h2>Loading</h2></>
        }
        else{
            totalDisplay=
            <Card>
            <CardHeader
            title="Assessments taken" 
            />
            <CardContent>
                <Divider />
                <p>Total number of assessments: {form.length}</p>
            </CardContent>
            </Card>
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