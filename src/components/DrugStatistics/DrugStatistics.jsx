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


function DrugStatistics(){

  const dispatch=useDispatch();

  const onLoad=()=>{
  dispatch({type:'FETCH_FORM'});
  }

    let [component, setComponent]=useState('');

    const Components={
        All: <AllDrugsDetails />
    }
    const getComponent=()=>{
    switch (component){
        case 'AllDrugsDetails':
          return <AllDrugsDetails />
          break;
        case 'AlcoholDetails':
          return <AlcoholDetails />
          break;
          case 'NicotineDetails':
            return <NicotineDetails />
            break;
          case 'MarijuanaDetails':
            return <MarijuanaDetails />
            break;
          case 'CocaineDetails':
            return <CocaineDetails />
            break;
          case 'MethDetails':
            return <MethDetails />
            break;
          case 'OpioidsDetails':
            return <OpioidsDetails />
            break;
          case 'BenzodiazepinesDetails':
            return <BenzodiazepinesDetails />
            break;
          case 'HallucinogenDetails':
            return <HallucinogenDetails />
            break;
          case 'InhalantsDetails':
            return <InhalantsDetails />
            break;
          case 'OTCDetails':
            return <OTCDetails />
            break;
          case 'OtherSubstancesDetails':
            return <OtherSubstancesDetails />
            break;
          case 'HeroinDetails':
            return <HeroinDetails />
        default:
            return <><h2>Select a chart</h2></>
    }
}
useEffect(()=>
    onLoad()
  ,[]);

    return(
        <div>
          <div className="page-title">
            <h1>Drug Statistics</h1>
          </div>
          <div className="select-drug">
            <select className="drug-dropdown" name="Drug Information" onChange={(event)=>setComponent(event.target.value)}>
              <option></option>
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