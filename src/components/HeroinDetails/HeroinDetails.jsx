import React from 'react';
import DrugStatistics from '../DrugStatistics/DrugStatistics';
import HeroinTabs from '../HeroinTabs/HeroinTabs'
//function that returns the Drug Statistics drop down menu and two tabs that allow user to toggle between Heroin use in last month and lifetime.
function HeroinDetails (){

    return(
        <>
        <DrugStatistics />
        <HeroinTabs />
        </>
    )
}

export default HeroinDetails;