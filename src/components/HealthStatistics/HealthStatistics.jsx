import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import FetalAlcoholSyndrome from '../FetalAlcoholSyndrome/FetalAlcoholSyndrome';
import MentalHealth from '../MentalHealth/MentalHealth';
import PastServices from '../PastServices/PastServices';
import Pregnant from '../Pregnant/Pregnant';
import './HealthStatistics.css';

function HealthStatistics(){

    const dispatch=useDispatch();
    
    let [component, setComponent]=useState('')

    const getComponent=()=>{
        switch(component){
            case 'FetalAlcoholSyndrome':
                return <FetalAlcoholSyndrome />
                break;
            case 'MentalHealth':
                return <MentalHealth />
                break;
            case 'PastServices':
                return <PastServices />
                break;
            case 'Pregnant':
                return <Pregnant />
                break;
            default:
                return <h2>Select a chart.</h2>
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
                  <option value="Past Services">Past Services</option>
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