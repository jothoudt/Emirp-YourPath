import React from 'react';
import CocaineTabs from '../CocaineTabs/CocaineTabs'
import DrugStatistics from '../DrugStatistics/DrugStatistics';
//function to return drug statistics dropdown and tabs to switch between Cociane usage monthly and all time
function CocaineDetails (){

    return(
        <>
            
            <DrugStatistics />
            <CocaineTabs />
        </>
    )
}

export default CocaineDetails;