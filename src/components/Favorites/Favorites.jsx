import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import './Favorites.css';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

//drug charts
import AlcoholPieChart from '../AlcoholPieChart/AlcoholPieChart';
import BenzodiazepinesPieChart from '../BenzodiazepinesPieChart/BenzodiazepinesPieChart';
import CocainePieChart from '../CocainePieChart/CocainePieChart';
import HallucinogenPieChart from '../HallucinogenPieChart/HallucinogenPieChart';
import HeroinAllTimePie from '../HeroinAllTimePie/HeroinAllTimePie';
import InhalantsPieChart from '../InhalantsPieChart/InhalantsPieChart';
import MarijuanaPieChart from '../MarijuanaPieChart/MarijuanaPieChart'
import MethAllTimePie from '../MethAllTimePie/MethAllTimePie';
import NicotinePieChart from '../NicotinePieChart/NicotinePieChart';
import OpiodsPieChart from '../OpiodsPieChart/OpiodsPieChart';
import OTCPieChart from '../OTCPieChart/OTCPieChart';
import OtherSubstanceAllTimePie from '../OtherSubstancesAllTimePie/OtherSubstancesAllTimePie';

//demographics components
import GenderBarChart from '../GenderBarChart/GenderBarChart';
import JusticeInvolvedBar from '../JusticeInvolvedBar/JusticeInvolvedBar';
import RacePieChart from '../RacePieChart/RacePieChart';
import SexualOrientationPieChart from '../SexualOrientationPieChart/SexualOrientationPieChart';

//health statistics
import FetalAlcoholSyndromePieChart from '../FetalAlcoholSyndromePieChart/FetalAlcoholSyndromePieChart';
import MentalHealthBar from '../MentalHealthBar/MentalHealthBar';
import PastServicesBar  from '../PastServicesBar/PastServicesBar';
import PregnantPieChart from '../PregnantPieChart/PregnantPieChart';

//all data component for bottom
import AllData from '../AllData/AllData';

import Box from '@material-ui/core/Box';

//import sweetalert2
const Swal = require('sweetalert2')

import Icon from '@material-ui/core/Icon';

import { CardHeader } from '@material-ui/core';
import UserPage from '../UserPage/UserPage';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
//styles
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

//function to return dashboard
export default function Favorites() {
  //define variables
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  //get information from the store
  const prefs = useSelector((store)=>store.preferences)
  const user= useSelector((store)=>store.user)

  //variable for components
  const cards=prefs;

  //A map of components so they can be loaded from the database
  const componentMapping={
    AlcoholPieChart: <AlcoholPieChart />,
    BenzodiazepinesPieChart: <BenzodiazepinesPieChart />,
    CocainePieChart: <CocainePieChart />,
    HallucinogenPieChart: <HallucinogenPieChart />,
    HeroinAllTimePie: <HeroinAllTimePie />,
    InhalantsPieChart: <InhalantsPieChart />,
    MarijuanaPieChart: <MarijuanaPieChart />,
    MethAllTimePie: <MethAllTimePie />,
    NicotinePieChart: <NicotinePieChart />,
    OpiodsPieChart: <OpiodsPieChart />,
    OTCPieChart: <OTCPieChart />,
    OtherSubstanceAllTimePie: <OtherSubstanceAllTimePie />,
    // GenderBarChart: <GenderBarChart />,
    // JusticeInvolved: <JusticeInvolved />,
    RacePieChart: <RacePieChart />,
    SexualOrientationPieChart: <SexualOrientationPieChart />,
    FetalAlcoholSyndromePieChart: <FetalAlcoholSyndromePieChart />,
    // MentalHealth: <MentalHealth />,
    // PastServices: <PastServices />,
    PregnantPieChart: <PregnantPieChart />,
  }

  //function to add a chart to the database for the users favorites
  const addMenu=()=>{
    //object to be sent to the database
    let toAdd={
      id: user.id,
      component_name:''
    }
    console.log('in addMenu')
    //pop up menu that allows users to select a chart to add to their dashboard
    const { value: charts} = Swal.fire({
      title: 'Select Chart',
      input: 'select',
      inputOptions: {
       Drugs: {
        AlcoholPieChart: 'Alcohol',
        BenzodiazepinesPieChart: 'Benzodiazepines',
        CocainePieChart: 'Cocaine',
        HallucinogenPieChart: 'Hallucinogen',
        HeroinAllTimePie: 'Heroin',
        InhalantsPieChart: 'Inhalants',
        MarijuanaPieChart: 'Marijuana',
        MethAllTimePie: 'Meth',
        NicotinePieChart: 'Nicotine',
        OpiodsPieChart: 'Opioids',
        OTCPieChart: 'Over the Counter',
        OtherSubstanceAllTimePie: 'Other Substances',
        },
        Demographics: {
          // GenderBarChart: 'Gender',
          RacePieChart: 'Race',
          SexualOrientationPieChart: 'Sexual Orientation'
        },
        HealthStatistics:{
          FetalAlcoholSyndromePieChart: 'Fetal Alcohol Syndrome',
          // MentalHealth: 'Mental Health',
          PregnantPieChart: 'Pregnant'
        }
      },
      inputPlaceholder: 'Select a Chart',
      showCancelButton: true,
      //selects the value the user selected and dispatches the matching component to add to the database
      inputValidator: (value) => {
        if(value==='AlcoholPieChart'){
          toAdd.component_name= 'AlcoholPieChart';
          dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        }
        if(value==='BenzodiazepinesPieChart'){
          toAdd.component_name= 'BenzodiazepinesPieChart';
          dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        }
        if(value==='CocainePieChart'){
          toAdd.component_name= 'CocainePieChart';
          dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        }
        if(value==='HallucinogenPieChart'){
          toAdd.component_name= 'HallucinogenPieChart';
          dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        }
        if(value==='HeroinAllTimePie'){
          toAdd.component_name= 'HeroinAllTimePie';
          dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        }
        if(value==='InhalantsPieChart'){
          toAdd.component_name= 'InhalantsPieChart';
          dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        }
        if(value==='MarijuanaPieChart'){
          toAdd.component_name= 'MarijuanaPieChart';
          dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        }
        if(value==='MethAllTimePie'){
          toAdd.component_name= 'MethAllTimePie';
          dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        }
        if(value==='NicotinePieChart'){
          toAdd.component_name= 'NicotinePieChart';
          dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        }
        if(value==='OpiodsPieChart'){
          toAdd.component_name= 'OpiodsPieChart';
          dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        }
        if(value==='OTCPieChart'){
          toAdd.component_name= 'OTCPieChart';
          dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        }
        if(value==='OtherSubstanceAllTimePie'){
          toAdd.component_name= 'OtherSubstanceAllTimePie';
          dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        }
        // if(value==='Gender'){
        //   toAdd.component_name= 'GenderBarChart';
        //   dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        // }
        if(value==='RacePieChart'){
          toAdd.component_name= 'RacePieChart';
          dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        }
        if(value==='SexualOrientationPieChart'){
          toAdd.component_name= 'SexualOrientationPieChart';
          dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        }
        if(value==='FetalAlcoholSyndromePieChart'){
          toAdd.component_name= 'FetalAlcoholSyndromePieChart';
          dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        }
        // if(value==='MentalHealth'){
        //   toAdd.component_name= 'MentalHealth';
        //   dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        // }
        if(value==='PregnantPieChart'){
          toAdd.component_name= 'PregnantPieChart';
          dispatch({type:'ADD_PREFERENCES', payload:toAdd})
        }
      }
    })
    if (charts) {
    
      Swal.fire(`You selected: ${charts}`)
    }
  }

  //variable to display
   let cardDisplay=''
   //function to return the users saved components from the database
   const displayFavorites=()=>{
     //if there are no cards will display a message to add cards to the dashboard
     if(cards.length === '0'){
       cardDisplay=<><p>Click Below to add Charts</p></>
     }
     //else display the cards
     else{
       cardDisplay=
       cards.map((card) => {

        //function to remove card from users dashboard
        const removeFavorite=()=>{
          //object that defines the id to delete
          let toRemove={
            id: card.id
          }
          console.log(toRemove);
          //dispatch to delete and then dispatch to get updated preferences
          dispatch({type:'DELETE_CHART', payload:toRemove})
          dispatch({type: 'FETCH_PREFERENCES'})
        }

        // function that brings the user to the details of the chart depending on which one they clicked
        const viewClick = (card) => {
          let chart = card.card.component_name;
          console.log(chart)
          switch (chart){
            case 'AlcoholPieChart':
              return history.push('/alcohol_details');
              break;
            case 'BenzodiazepinesPieChart':
              return history.push('/benzodiazepines_details');
              break;
              case 'CocainePieChart':
                return history.push('/cocaine_details');
                break;
              case 'HallucinogenPieChart':
                return history.push('/hallucinogen_details');
                break;
              case 'HeroinAllTimePie':
                return history.push('/heroin_details')
                break;
              case 'InhalantsPieChart':
                return history.push('/inhalants_details')
                break;
              case 'MarijuanaPieChart':
                return  history.push('/marijuana_details')
                break;
              case 'MethAllTimePie':
                return history.push('/meth_details')
                break;
              case 'NicotinePieChart':
                return history.push('/nicotine_details')
                break;
              case 'OpiodsPieChart':
                return history.push('/opioids_details')
                break;
              case 'OTCPieChart':
                return history.push('/OTC_details')
                break;
              case 'OtherSubstanceAllTimePie':
                return history.push('/other_substances_details')
                break;
              case 'Gender':
                return history.push('/gender')
                break;
              case 'Race':
                return history.push('/RacePieChart')
                break;
              case 'SexualOrientationPieChart':
                return history.push('/sexual_orientation')
                break;
              case 'FetalAlcoholSyndromePieChart':
                return history.push('/fetal_alcohol_syndrome')
                break;
              case 'MentalHealth':
                  return history.push('/mental_health')
                  break;
              case 'PregnantPieChart':
                  return history.push('/pregnant')
                  break;
              default:
                return <><h2>Select a chart</h2></>
          }
        };
        //to be rendered to the dom
        return(
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Box boxShadow={12}>
                <Card className={classes.card}>
                  <CardMedia className="cards" >
                      {componentMapping[card.component_name]}
                  </CardMedia>
                  <CardActions>
                    <Button onClick={()=>viewClick({card})} className="cardBtn" size="small" color="primary" textAlign="center">
                      View Details
                    </Button>
                    <Button onClick={removeFavorite} className="cardBtn" size="small" color="primary" textAlign="center">
                      Remove
                    </Button>
                  </CardActions>
                </Card>
                </Box>
              </Grid>
            )}
       )
     }
     return cardDisplay
   }
   
  //FOR COLLAPSABLE ALL DATA TABLE
  //local state to expand email
  const [ expanded, setExpanded ] = useState( false );
  //handle expand click
  const handleExpandClick = () => {
      setExpanded(!expanded);
  };
  const displayAllData = () =>{
    //let returnDisplay = '';
    if ( expanded ){
      return (
        <>
          <AllData />
        </>
      )
    }

  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Your Saved Charts
            </Typography>
            {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>
              All of the charts located on the Dashboard below reflect whether or not applicants have ever used the substance in question.
              For more information and to see the data element reflected for the last month click the view button. 
            </Typography> */}
            <Button onClick={addMenu} color="primary" ><Icon className={classes.icon} color="primary" style={{fontSize:'48px'}}>
        add_circle
      </Icon>Add a Chart</Button>
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {displayFavorites()} 
          </Grid>
          <Grid container spacing={4}>
          
          </Grid>
        </Container>
      </main>
      <div className="allDataSection">
          <Button
            className="allDataBtn"
            variant="contained"
            onClick={handleExpandClick}
          >
          All Data
          </Button>
          { displayAllData() }
      </div>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          YourPath Dashboard
        </Typography>
            copyright YourPath 2021
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

// Source: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/album 