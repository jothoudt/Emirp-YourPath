import React from 'react';
import AlcoholTabs from '../AlcoholTabs/AlcoholTabs'
import DrugStatistics from '../DrugStatistics/DrugStatistics';

function AlcoholDetails (){

    //returns drop down of drug statistics at the top and below the dropdown two tabs to switch between alcohol all time and monthly
    return(
        <>
        <DrugStatistics />
        <AlcoholTabs />
        </>
    )
}

export default AlcoholDetails;