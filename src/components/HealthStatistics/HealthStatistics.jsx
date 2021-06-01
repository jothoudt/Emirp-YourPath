import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import FetalAlcoholSyndrome from '../FetalAlcoholSyndrome/FetalAlcoholSyndrome';
import MentalHealth from '../MentalHealth/MentalHealth';
import PastServices from '../PastServices/PastServices';
import Pregnant from '../Pregnant/Pregnant';
import './HealthStatistics.css';
import {useHistory} from 'react-router-dom';
//function that returns a dropdown menu for health statistics
function HealthStatistics(){
    //define dispatch and history
    const dispatch=useDispatch();
    const history=useHistory();
    //useState to select a component
    let [component, setComponent]=useState('')
    //function that takes the selected component and pushes the user to the correct url based on what the selected
    const getComponent=()=>{
        switch(component){
            case 'FetalAlcoholSyndrome':
                return history.push('/fetal_alcohol_syndrome');
                break;
            case 'MentalHealth':
                return history.push('/mental_health');
                break;
            case 'PastServices':
                return history.push('/past_services');
                break;
            case 'Pregnant':
                return history.push('/pregnant');
                break;
            default:
                return <></>
        }//end switch
    };//end getComponent
    //renders the health statistics dropdown menu to the DOM
    return(
        <div>
          <div className="page-title">
              <h1>Health Statistics</h1>
          </div>
          <div className="select-health-statistic">
              <select className="health-dropdown" name="Demographic Information" onChange={(event)=>setComponent(event.target.value)}>
                  <option>Select a Chart</option>
                  <option value="FetalAlcoholSyndrome">Fetal Alcohol Syndrome</option>
                  <option value="MentalHealth">Mental Health</option>
                  <option value="PastServices">Past Services</option>
                  <option value="Pregnant">Pregnant</option>
              </select>
          </div>
          <div>
            {getComponent()}
          </div>
        </div>
    )
}

export default HealthStatistics;