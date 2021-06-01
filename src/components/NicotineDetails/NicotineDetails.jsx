import React from 'react';
import DrugStatistics from '../DrugStatistics/DrugStatistics';
import NicotineTabs from '../NicotineTabs/NicotineTabs'
//function that returns drug statistics drop down and two tabs that allow user to toggle between nicotine use all time and nicotine use in the last month
function NicotineDetails (){

    return(
        <>
        <DrugStatistics />
        <NicotineTabs />
        </>
    )
}

export default NicotineDetails;