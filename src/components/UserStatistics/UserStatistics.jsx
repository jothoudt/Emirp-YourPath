import React from 'react';
import {useSelector} from 'react-redux';
import TreatmentOptions from '../TreatmentOptions/TreatmentOptions';
import NetPromoterScore from '../NetPromoterScore/NetPromoterScore';
import TotalAssessments from '../TotalAssesments/TotalAssesments';


//function that returns total assessments, net promoter score, and perceived best treatment options
function UserStatistics(){
    
//returns net promoter scores and results from questionaire about perceived helpfulness of different treatments
    return(
        <div>
            <div>
                <h1>User Statistics</h1>
            </div>
             <TotalAssessments />
            <div>
                <NetPromoterScore />
            </div>
            <TreatmentOptions />
        </div>
    )
}

export default UserStatistics;