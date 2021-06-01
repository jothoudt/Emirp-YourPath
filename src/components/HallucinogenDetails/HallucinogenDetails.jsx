import React from 'react';
import DrugStatistics from '../DrugStatistics/DrugStatistics';
import HallucinogenTabs from '../HallucinogenTabs/HallucinogenTabs'

//function that returns drug statistics drop down menu and a set of tabs that allows users to toggle between Hallucinogen All time use and use in the last month
function HallucinogenDetails (){

    return(
        <>
        <DrugStatistics />
        <HallucinogenTabs />
        </>
    )
}

export default HallucinogenDetails;