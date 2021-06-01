import React from 'react';
import MethTabs from '../MethTabs/MethTabs'
import DrugStatistics from '../DrugStatistics/DrugStatistics';
//function to return Drug statistics dropdown and two tabs to toggle between meth use all time and use in the last month
function MethDetails (){

    return(
        <>
        <DrugStatistics />
        <MethTabs />
        </>
    )
}

export default MethDetails;