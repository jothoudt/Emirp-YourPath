import React from 'react';
import {useSelector} from 'react-redux';

function TotalAssessments(){

    const form = useSelector((store)=>store.form);

    const getTotalAssessments=()=>{
        let totalDisplay=''
        if(!form){
            totalDisplay= <><h2>Loading</h2></>
        }
        else{
            totalDisplay=<><h1>Total Number of Assessments: {form.length}</h1></>
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