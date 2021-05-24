import React from 'react';
import {useSelector} from 'react-redux';
import TreatmentOptions from '../TreatmentOptions/TreatmentOptions';
import NetPromoterScore from '../NetPromoterScore/NetPromoterScore';



function UserStatistics(){
    

    return(
        <div>
            <div>
                <h1>User Statistics</h1>
            </div>
            <div>
                <NetPromoterScore />
            </div>
            <TreatmentOptions />
        </div>
    )
}

export default UserStatistics;