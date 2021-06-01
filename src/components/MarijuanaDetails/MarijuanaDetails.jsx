import React from 'react';
import MarijuanaTabs from '../MarijuanaTabs/MarijuanaTabs';
import DrugStatistics from '../DrugStatistics/DrugStatistics';
//function that returns the Drug Statistics dropdown menu and two tabs for the user to toggle between Marijuana use all time and use in the last month
function MarijuanaDetails (){

    return(
        <>
        <DrugStatistics />
        <MarijuanaTabs />
        </>
    )
}

export default MarijuanaDetails;