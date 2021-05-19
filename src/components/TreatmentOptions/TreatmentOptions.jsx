import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './TreatmentOptions.css';

function TreatmentOptions(){

    //define dispatch and store
    const dispatch= useDispatch();
    const form= useSelector((store)=>store.form);

    const useStyles = makeStyles({
        table: {
          width: "80%",
          margin: 'auto',
          marginBottom: '50px',
        },
      });
    
      const classes=useStyles();

    //---------variables to utilize for each question/function set-----------
        //global variables
    let total=0;
    let average=0;

    // -------------------arrays to target for visual------------------------------
    // let medicationNumbers= [];
    // let residentialNumbers=[];
    // let outpatientNumbers=[];
    // let individualTherapyNumbers=[];
    // let housingSupportNumbers=[];
    // let individualPeerRecoveryNumbers=[];
    // let mutualAidMeetingsNumbers=[];
    // let mentorNumbers=[];
    // let jobHelpNumbers=[];
    // let medCareNumbers=[];
    // let educationSupportNumbers=[];
    // let twelveStepResourceNumbers=[];
    // let nonTwelveStepResourceNumbers=[];
    // let legalSupportNumbers=[];
    // let transportationSupportNumbers=[];
    // let benefitHelpNumbers=[];
    // let harmReductionNumbers=[];
    let scoresArray=[];
    //---------------------------------------------------------------------------
   
        //---------reuseable functions-------
        const getScores=(array, number)=>{
            array=[];
            if(!form){
                display=<p>loading</p>
              }
              if(form.length){
              form.map((item)=>{
                let answer=item.answers[number]
               if(answer.answer){
                array.push(item.answers[number].answer)
               }
              })
            }
            console.log(array)
           return getAverageScore(array);
        }
        //adds up the total of the  medication scores and divides them by the array length to get the average score
                const getAverageScore=(array)=>{
                    total=0;
                console.log(array)
                array.map((item)=>{
                    total += Number(item);
                    })
                    console.log(total)
                    average= total / array.length;
                    console.log(average)
                    // let display= <><p>{average}</p></>
                    return average;
                }
    //------------------------------------------------------------
         
    return(
        
        <div>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <h1>Average scores of what users think would be the most helpful</h1>
                        </TableCell>
                        <TableCell>
                            <h4>(0-10, 0 being least helpful and 10 being the most helpful)</h4>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><h3>Type of Treatment help</h3></TableCell>
                        <TableCell align="right"><h3>Average Score</h3></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                <TableRow>
                  <TableCell>Medication for alcohol or opioid use disorder</TableCell><TableCell align="right">{getScores(scoresArray, 154)}</TableCell> 
                </TableRow>
                <TableRow>
                  <TableCell>Residential Treatment</TableCell> <TableCell align="right">{getScores(scoresArray, 156)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Outpatient Treatment</TableCell> <TableCell align="right">{getScores(scoresArray, 157)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Individual Therapy for mental health issues</TableCell> <TableCell align="right">{getScores(scoresArray, 158)} </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Housing support or finding sober/recovery housing</TableCell> <TableCell align="right">{getScores(scoresArray, 159)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Working individually with a peer recovery support specialist</TableCell> <TableCell align="right">{getScores(scoresArray, 160)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Mutual aid meetings (AA, NA, SMART recovery, Refuge Recovery, etc)</TableCell> <TableCell align="right"> {getScores(scoresArray, 161)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Working with a mentor or sponsor</TableCell><TableCell align="right">{getScores(scoresArray, 162)}</TableCell> 
                </TableRow>
                <TableRow>
                    <TableCell>Help finding a job</TableCell> <TableCell align="right">{getScores(scoresArray, 163)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Medical care for physical health issues</TableCell><TableCell align="right"> {getScores(scoresArray, 164)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Support with education or going back to school</TableCell><TableCell align="right"> {getScores(scoresArray, 165)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>12 step resources</TableCell><TableCell align="right"> {getScores(scoresArray, 166)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Non-12 Step Resources</TableCell><TableCell align="right"> {getScores(scoresArray, 167)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Legal Support</TableCell> <TableCell align="right">{getScores(scoresArray, 168)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Transportation Support</TableCell><TableCell align="right"> {getScores(scoresArray, 169)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Help with benefits, EBT,Food Supports, or insurance</TableCell> <TableCell align="right"> {getScores(scoresArray, 170)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Harm-reduction supports like clean needles, safer use supports, controlled use supports, etc.</TableCell><TableCell align="right">  {getScores(scoresArray, 171)}</TableCell>
                </TableRow>
                </TableBody>
                </Table>
            </TableContainer>
        </div>
        
    )
}

export default TreatmentOptions;