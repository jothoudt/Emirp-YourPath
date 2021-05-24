import React, {useState, useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import AllDrugsDetails from '../AllDrugsDetails/AllDrugsDetails';
import AlcoholDetails from '../AlcoholDetails/AlcoholDetails';
import NicotineDetails from '../NicotineDetails/NicotineDetails';
import MarijuanaDetails from '../MarijuanaDetails/MarijuanaDetails';
import CocaineDetails from '../CocaineDetails/CocaineDetails';
import MethDetails from '../MethDetails/MethDetails';
import OpioidsDetails from '../OpioidsDetails/OpioidsDetails';
import BenzodiazepinesDetails from '../BenzodiazepinesDetails/BenzodiazepinesDetails';
import HallucinogenDetails from '../HallucinogenDetails/HallucinogenDetails';
import InhalantsDetails from '../InhalantsDetails/InhalantsDetails';
import OTCDetails from '../OTCDetails/OTCDetails';
import OtherSubstancesDetails from '../OtherSubstancesDetails/OtherSubstancesDetails';
import HeroinDetails from '../HeroinDetails/HeroinDetails';
import './DrugStatistics.css';
import {useHistory} from 'react-router-dom';


function DrugStatistics(){

  const dispatch=useDispatch();
  const history= useHistory();

  // const onLoad=()=>{
  // dispatch({type:'FETCH_FORM'});
  // }

    let [component, setComponent]=useState('');

    const Components={
        All: <AllDrugsDetails />
    }
    const getComponent=()=>{
    switch (component){
        case 'AllDrugsDetails':
          return history.push('/all_drugs_details')
          break;
        case 'AlcoholDetails':
          return history.push('/alcohol_details')
          break;
          case 'NicotineDetails':
            return history.push('/nicotine_details')
            break;
          case 'MarijuanaDetails':
            return history.push('/marijuana_details')
            break;
          case 'CocaineDetails':
            return history.push('/cocaine_details');
            break;
          case 'MethDetails':
            return history.push('/meth_details')
            break;
          case 'OpioidsDetails':
            return history.push('/opioids_details')
            break;
          case 'BenzodiazepinesDetails':
            return history.push('/benzodiazepines_details');
            break;
          case 'HallucinogenDetails':
            return history.push('/hallucinogen_details');
            break;
          case 'InhalantsDetails':
            return history.push('/inhalants_details')
            break;
          case 'OTCDetails':
            return history.push('/OTC_details')
            break;
          case 'OtherSubstancesDetails':
            return history.push('/other_substances_details')
            break;
          case 'HeroinDetails':
            return history.push('/heroin_details')
        default:
            return <></>
    }
}
// useEffect(()=>
//     onLoad()
//   ,[]);

    return(
        <div>
          <div className="page-title">
            <h1>Drug Statistics</h1>
          </div>
          <div className="select-drug">
            <select className="drug-dropdown" name="Drug Information" onChange={(event)=>setComponent(event.target.value)}>
              <option>Select a Chart</option>
              <option value="AllDrugsDetails">All Drugs</option>
              <option value= "AlcoholDetails" >Alcohol</option>
              <option value="BenzodiazepinesDetails">Benzodiazepines</option>
              <option value="CocaineDetails">Cocaine</option>
              <option value="HallucinogenDetails">Hallucinogen</option>
              <option value="HeroinDetails">Heroin</option>
              <option value="InhalantsDetails">Inhalants</option>
              <option value="MarijuanaDetails">Marijuana</option>
              <option value="MethDetails">Methamphetamine</option>
              <option value="NicotineDetails">Nicotine</option>
              <option value="OpioidsDetails">Opioids</option>
              <option value="OtherSubstancesDetails">Other Substances</option>
              <option value="OTCDetails">Over the Counter</option>
            </select>
          </div>
          <div>
             {getComponent()}
          </div>
        </div>
    )
}

export default DrugStatistics;