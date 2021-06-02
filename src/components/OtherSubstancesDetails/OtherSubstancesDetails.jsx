import React from 'react';
import DrugStatistics from '../DrugStatistics/DrugStatistics';
import OtherSubstancesTabs from '../OtherSubstancesTabs/OtherSubstancesTabs';
//function that returns drug statistics dropdown and two tabs that allow the user to toggle between other substances use all time and use in the last month
function OtherSubstancesDetails (){

    return(
        <>
        <DrugStatistics />
        <OtherSubstancesTabs />
        </>
    )
}

export default OtherSubstancesDetails;