import React, {useEffect, useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import clsx from 'clsx';
import axios from 'axios';
//pass thru all datasets
import MarijuanaAllTime from '../MarijuanaAllTime/MarijuanaAllTime';
import MethAllTime from '../MethAllTime/MethAllTime';
import InhalantsAllTime from '../InhalantsAllTime/InhalantsAllTime';
import HeroinAllTime from '../HeroinAllTime/HeroinAllTime';
import CocaineAllTime from '../CocaineAllTime/CocaineAllTime';
import HallucinogenAllTime from '../HallucinogenAllTime/HallucinogenAllTime';
import OpiodsAllTime from '../OpiodsAllTime/OpiodsAllTime';
import BenzodiazepinesAllTime from '../BenzodiazepinesAllTime/BenzodiazepinesAllTime';
import NicotineAllTime from '../NicotineAllTime/NicotineAllTime';
import OtherSubstancesAllTime from '../OtherSubstancesAllTime/OtherSubstancesAllTime';
import OTCAllTime from '../OTCAllTime/OTCAllTime';
import SexualOrientation from '../SexualOrientation/SexualOrientation';
import Race from '../Race/Race';
import Pregnant from '../Pregnant/Pregnant';
import JusticeInvolved from '../JusticeInvolved/JusticeInvolved';
import AlcoholAllTime from '../AlcoholAllTime/AlcoholAllTime';
import Gender from '../Gender/Gender';
import MentalHealth from '../MentalHealth/MentalHealth';
import TotalAssessments from '../TotalAssesments/TotalAssesments';
import FetalAlcoholSyndrome from '../FetalAlcoholSyndrome/FetalAlcoholSyndrome';
import PastServices from '../PastServices/PastServices';
import HiComponent from '../HiComponent/HiComponent';
//material-ui for styling
import { Button, Grid, Card, CardActions, Collapse, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';


import Favorites from '../Favorites/Favorites';

//pass thru AllData
import AllData from '../AllData/AllData';

//styling
const useStyles = makeStyles( ( theme )=> ({
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
},
expandOpen: {
    transform: 'rotate(180deg)',
},
}))




function UserPage() {

  const dispatch=useDispatch();
  const onLoad=()=>{
    dispatch({type:'FETCH_FORM'});
    dispatch({type:'FETCH_ASSESSMENT'})
    dispatch({type:'FETCH_PROMOTER_SCORES'})
    dispatch({type: 'FETCH_PREFERENCES'})
    // dispatch({type:'FETCH_REPORT_1'});
  }
  //for styling
  const classes= useStyles();
  //get Jotform data from redux store
  const form = useSelector((store)=>store.form);
  const prefs = useSelector((store)=>store.preferences);
  // const report =useSelector((store)=>store.report1)


  const componentMapping={
    HiComponent: <HiComponent />,
    CocaineAllTime: <CocaineAllTime />,
    Race: <Race />
  }

  //for collapsable table
  //local state to expand email
  const [ expanded, setExpanded ] = useState( false );
  //handle expand click
  const handleExpandClick = () => {
      setExpanded(!expanded);
  };
  //expand conditional
  if ( expanded ){
    return (
      <>
        <AllData />
      </>
    )
  }
  
  
  useEffect(()=>
    onLoad()
  ,[]);


  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <TotalAssessments />
      <Favorites />
      <LogOutButton className="btn" />
      {/* <Button
        onClick={handleExpandClick}
      >
      All Data
      </Button>
      <LogOutButton className="btn" /> */}

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
