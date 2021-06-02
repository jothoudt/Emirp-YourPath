import React from 'react';
import DrugStatistics from '../DrugStatistics/DrugStatistics';
import OpioidsTabs from '../OpioidsTabs/OpioidsTabs'
//function that returns drug statistics dropdown and two tabs that aallow the user to switch between opioid use all time and opioid use in the last month
function OpioidsDetails (){

    return(
        <>
        <DrugStatistics />
        <OpioidsTabs />
        </>
    )
}

export default OpioidsDetails;