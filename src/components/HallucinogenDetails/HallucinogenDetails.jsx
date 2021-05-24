import React from 'react';
import DrugStatistics from '../DrugStatistics/DrugStatistics';
import HallucinogenTabs from '../HallucinogenTabs/HallucinogenTabs'

function HallucinogenDetails (){

    return(
        <>
        <DrugStatistics />
        <HallucinogenTabs />
        </>
    )
}

export default HallucinogenDetails;