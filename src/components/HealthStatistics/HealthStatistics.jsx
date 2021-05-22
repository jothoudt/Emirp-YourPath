import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import FetalAlcoholSyndrome from '../FetalAlcoholSyndrome/FetalAlcoholSyndrome';
import MentalHealth from '../MentalHealth/MentalHealth';
import PastServices from '../PastServices/PastServices';
import Pregnant from '../Pregnant/Pregnant';
import './HealthStatistics.css';
import {useHistory} from 'react-router-dom';

function HealthStatistics(){

    const dispatch=useDispatch();
    const history=useHistory;
    
    let [component, setComponent]=useState('')

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
        }
    }

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