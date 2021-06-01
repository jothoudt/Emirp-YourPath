import React from 'react';
import BenzodiazepinesTabs from '../BenzodiazepinesTabs/BenzodiazepinesTabs'
import DrugStatistics from '../DrugStatistics/DrugStatistics';

//function to return the drug statistics drop down and tabs to switch between Benzodiazepines use in the Last Month and in their lifetime.
function BenzodiazepinesDetails (){
    
    return(
        <>
        <DrugStatistics />
        <BenzodiazepinesTabs />
        </>
    )
}

export default BenzodiazepinesDetails;