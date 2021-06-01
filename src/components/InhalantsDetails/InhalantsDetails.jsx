import React from 'react';
import DrugStatistics from '../DrugStatistics/DrugStatistics';
import InhalantsTabs from '../InhalantsTabs/InhalantsTabs'
//function that returns Drug Statistics dropdown menu and two tabs for the user to toggle between Inhalant usage all time and in the last month
function InhalantsDetails (){

    return(
        <>
        <DrugStatistics />
        <InhalantsTabs />
        </>
    )
}

export default InhalantsDetails;