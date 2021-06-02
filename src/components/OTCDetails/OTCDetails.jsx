import React from 'react';
import DrugStatistics from '../DrugStatistics/DrugStatistics';
import OTCTabs from '../OTCTabs/OTCTabs'
//function returns Drug Statistics dropdown and two tabs that allow the user to toggle between Over the Counter substance use all time and in the last month
function OTCDetails (){

    return(
        <>
        <DrugStatistics />
        <OTCTabs />
        </>
    )
}

export default OTCDetails;