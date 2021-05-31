import React from 'react';
import {useSelector} from 'react-redux';
//pass thru bar chart
import MentalHealthBar from '../MentalHealthBar/MentalHealthBar';
//styling for card
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import HealthStatistics from '../HealthStatistics/HealthStatistics';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';


function MentalHealth(){

  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
  const classes=useStyles();

    const form = useSelector((store)=>store.form);

    let ptsd=0;
    let anxiety=0;
    let depression=0;
    let bipolar=0;
    let schizophrenia=0;
    let adhd=0;
    let eatingDisorder=0;
    let ocd=0;
    let personalityDisorder=0;
    let other=0;
    let declined=0;
    
     // const mjMap=form[119].answer
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      if(!form){
        display=<p>loading</p>
      }
      if(form.length){
        form.map((item)=>{
          console.log( 'item', item );
          let answer=item.answers[150]
          console.log( 'mental health:', answer.answer );
        if ( answer.answer ) {
          let answerArray = answer.answer
          console.log( 'answer length:', answerArray.length );
          answerArray.map( ( itemAnswer )=>{
            if(itemAnswer === 'Post-Traumatic Stress Disorder or PTSD'){
              ptsd++
            }
            else if (itemAnswer === 'Anxiety or Panic Attacks') {
              anxiety++
            }
            else if (itemAnswer === 'Depression') {
              depression++
            }
            else if (itemAnswer === 'Bipolar Disorder') {
              bipolar++
            }
            else if (itemAnswer === 'Schizophrenia') {
              schizophrenia++
            }
            else if (itemAnswer === 'Attention-deficit hyperactivity disorder (ADHD)') {
              adhd++
            }
            else if (itemAnswer === 'Eating disorder, including anorexia or bulimia') {
              eatingDisorder++
            }
            else if (itemAnswer === 'Obsessive-Compulsive Disorder') {
              ocd++
            }
            else if (itemAnswer === 'Borderline Personality Disorder') {
              personalityDisorder++
            }
            else if (itemAnswer === 'Other mental health issue') {
              other++
            }
        })
      }
        else{
          declined++
        }
      //console.log('in gender:', male, female, transgender, nonBinary, declined )
      display= 
      <Box mx='auto' width="75%" >
      <Card>
        <CardContent>
          <MentalHealthBar /> 
          <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>The YourPath assessment asks people to indicate whether they suspect or were told they have a mental health diagnosis. Because the form allows takers to mark more than one option, we used a bar chart to show full counts for each mental health condition selected.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableRow>
                      <TableCell><p>The number of users that selected Post-Traumatic Stress Disorder or PTSD.</p></TableCell><TableCell align="right">{ptsd}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that selected Anxiety or Panic Attacks.</p></TableCell><TableCell align="right">{anxiety}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that selected Depression.</p></TableCell><TableCell align="right">{depression}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that selected Bipolar Disorder .</p></TableCell><TableCell align="right">{bipolar}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that selected Schizophrenia.</p></TableCell><TableCell align="right">{schizophrenia}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that selected Attention-deficit hyperactivity disorder or ADHD .</p></TableCell><TableCell align="right">{adhd}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that selected Eating disorder, including anorexia or bulimia.</p></TableCell><TableCell align="right">{eatingDisorder}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that selected Obsessive-Compulsive Disorder.</p></TableCell><TableCell align="right">{ocd}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that selected Borderline Personality Disorder.</p></TableCell><TableCell align="right">{personalityDisorder}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that selected Other mental health issue.</p></TableCell><TableCell align="right">{other}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that declined to answer.</p></TableCell><TableCell align="right">{declined}</TableCell>
                    </TableRow>
                </Table> 
          </CardContent>
      </Card>
      </Box>
      })
    }
    return display;
  }
    return(
        <>
        <HealthStatistics />
        {answer1()}
        </>

    )
}

export default MentalHealth;