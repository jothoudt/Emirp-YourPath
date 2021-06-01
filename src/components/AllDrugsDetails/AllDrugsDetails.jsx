import React from 'react';
import AllDrugsTabs from '../AllDrugsTabs/AllDrugsTabs';
import DrugStatistics from '../DrugStatistics/DrugStatistics';

//functin that returns a drop down menu and the tabs for all drugs to switch views between All Drugs Last Month and All Drugs Lifetime
function AllDrugsDetails (){

    return(
        <>
        <DrugStatistics />
        <AllDrugsTabs />
        </>
    )
}

export default AllDrugsDetails;