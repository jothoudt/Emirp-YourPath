import React from 'react';
import AllDrugsTabs from '../AllDrugsTabs/AllDrugsTabs';
import DrugStatistics from '../DrugStatistics/DrugStatistics';

function AllDrugsDetails (){

    return(
        <>
        <DrugStatistics />
        <AllDrugsTabs />
        </>
    )
}

export default AllDrugsDetails;