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
      {/* <div>
        {displayFavorite()}
      </div> */}
      {/* {answer1()} */}
      {/* {displayFavorite()} */}
      {prefs.map(index=>{
        let Name= componentMapping[index.component_name]
        return Name
      })
    }
    <TotalAssessments />
    <Favorites />
    {/* <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
        <TotalAssessments />
      </Grid>
      <Grid item xs={12} sm={4}>  
        <MarijuanaAllTime />
      </Grid>
      <Grid item xs={4} sm={3}>
        <Race />
      </Grid>
      <Grid item xs={12} sm={4}>
        <MethAllTime />
      </Grid>
      <Grid item xs={12} sm={4}>
        <HallucinogenAllTime />
      </Grid>
      <Grid item xs={12} sm={4}>
        <HeroinAllTime />
      </Grid>
      <Grid item xs={12} sm={4}>
        <InhalantsAllTime />
      </Grid>
      <Grid item xs={12} sm={4}>
        <CocaineAllTime />
      </Grid>
      <Grid item xs={12} sm={4}>
        <OpiodsAllTime />
      </Grid>
      <Grid item xs={12} sm={4}>
        <BenzodiazepinesAllTime />
      </Grid>
      <Grid item xs={12} sm={4}>
        <NicotineAllTime />
      </Grid>
      <Grid item xs={12} sm={4}>
        <AlcoholAllTime />
      </Grid>
      <Grid item xs={12} sm={4}>
        <OtherSubstancesAllTime />
      </Grid>
      <Grid item xs={12} sm={4}>
        <OTCAllTime />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Pregnant />
      </Grid>
      <Grid item xs={12} sm={4}>
        <SexualOrientation />
      </Grid>
      <Grid item xs={12} sm={4}>
        <JusticeInvolved />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Gender />
      </Grid>
      <Grid item xs={12} sm={4}>
        <FetalAlcoholSyndrome />
      </Grid>
      <Grid item xs={12} sm={4}>
        <MentalHealth />
      </Grid>
      <Grid item xs={12} sm={4}>
        <PastServices />
      </Grid>
    </Grid>

      <p>Your ID is: {user.id}</p> */}
      <LogOutButton className="btn" />

    <Button
      onClick={handleExpandClick}
    >
    All Data
    </Button>
    {/* <Card>
      <CardActions>
      <IconButton
          className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <AllData />
      </Collapse>
    </Card> */}

    
    <p>Your ID is: {user.id}</p>
    <LogOutButton className="btn" />

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
