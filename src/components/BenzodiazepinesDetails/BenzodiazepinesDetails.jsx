import React from 'react';
import BenzodiazepinesTabs from '../BenzodiazepinesTabs/BenzodiazepinesTabs'
import DrugStatistics from '../DrugStatistics/DrugStatistics';

function BenzodiazepinesDetails (){

    return(
        <>
        <DrugStatistics />
        <BenzodiazepinesTabs />
        </>
    )
}

export default BenzodiazepinesDetails;