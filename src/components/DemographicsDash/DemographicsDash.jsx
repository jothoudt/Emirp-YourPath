import React from 'react';
import {useHistory} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import './DemographicsDash.css';
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
import FASChart from '../FetalAlcoholSyndromePieChart/FetalAlcoholSyndromePieChart';
import GenderBar from '../GenderBarChart/GenderBarChart';
import HealthStatistics from '../HealthStatistics/HealthStatistics';
import JusticeInvolved from '../JusticeInvolved/JusticeInvolved';
import MentalHealth from '../MentalHealth/MentalHealth';
import PregnantPieChart from '../PregnantPieChart/PregnantPieChart';
import RacePieChart from '../RacePieChart/RacePieChart';
import SexualOrientationPieChart from '../SexualOrientationPieChart/SexualOrientationPieChart';


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

const cards = [<GenderBar/>, <JusticeInvolved/>, <RacePieChart/>, <SexualOrientationPieChart/>]

export default function DemographicsDash() {
  const classes = useStyles();
  const history = useHistory();

  const viewClick = (card) => {
        let chartName = card.card.type.name;
        console.log('in viewClick', chartName);}
//         if (chartName === 'AlcoholPieChart'){
//             history.push('/alcohol_details')
//         }
//         else if (chartName === 'BenzodiazepinesPieChart'){
//             history.push('/benzodiazepines_details')
//         }
//         else if (chartName === 'CocainePieChart'){
//             history.push('/cocaine_details')
//         }
//         else if (chartName === 'HallucinogenPieChart'){
//             history.push('/hallucinogen_details')
//         }
//         else if (chartName === 'HeroinAllTimePie'){
//             history.push('heroin_details')
//         }
//         else if (chartName === 'InhalantsPieChart'){
//             history.push('/inhalants_details')
//         }
//         else if (chartName === 'MarijuanaPieChart'){
//             history.push('/marijuana_details')
//         }
//         else if (chartName === 'MethAllTimePie'){
//             history.push('/meth_details')
//         }
//         else if (chartName === 'NicotinePieChart'){
//             history.push('/nicotine_details')
//         }
//         else if (chartName === 'OpiodsPieChart'){
//             history.push('/opioids_details')
//         }
//         else if (chartName === 'OTCPieChart'){
//             history.push('/OTC_details')
//         }
//         else if (chartName === 'OtherSubstanceAllTimePie'){
//             history.push('/other_substances_details')
//         }
//    }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Dashboard
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              All of the charts located on the Dashboard below reflect whether assessment takers have self identified in any of these categories.
            </Typography>
            <div className={classes.heroButtons}>
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
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className="cards" >
                      {card}
                  </CardMedia>
                  <Typography className="cardText">
                      Select button below to view more details including use in last month
                    </Typography>
                  <CardActions>
                    <Button onClick={()=>viewClick({card})} className="cardBtn" size="small" color="primary" textAlign="center">
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
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