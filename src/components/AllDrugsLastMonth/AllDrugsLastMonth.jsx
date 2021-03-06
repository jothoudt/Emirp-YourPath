import React from 'react';
import {useSelector} from 'react-redux';
import { Bar } from 'react-chartjs-2';
import { LogarithmicScale } from 'chart.js';
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TableCell,
  TableRow,
  Typography
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import { makeStyles } from '@material-ui/core/styles';


function AllDrugsLastMonth (){

  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
  const classes=useStyles();


    // pulls down assessment results from the store
    const form = useSelector((store)=>store.form);

    // naming variables to track totals for each response category
    let total=form.length;
    let marijuana=0;
    let marijuanaDisplay=0;
    let overTheCounter=0;
    let overTheCounterDisplay=0;
    let hallucinogen=0;
    let hallucinogenDisplay=0;
    let methamphetamine=0;
    let methamphetamineDisplay=0;
    let cocaine=0;
    let concaineDisplay=0;
    let inhalants=0;
    let inhalantsDisplay=0;
    let benzodiazepines=0;
    let benzodiazepinesDisplay=0;
    let otherOpiods=0;
    let otherOpiodsDisplay=0;
    let heroin=0;
    let heroinDisplay=0;
    let alcohol=0;
    let alcoholDisplay=0;
    let nicotine=0;
    let nicotineDisplay=0;
    let other=0;
    let otherDisplay=0;
    let yCounter= 0;
    let nCounter=0;
    let counterDisplay=0;
//function that returns the counts of users that selected yes to a specified drug
    function getDrugs(counter, display, number) {
        counter=0;
        //map through the answers
        form.map((item)=>{
          //targets specific question in the dataset
            let answer=item.answers[number]
            //if answer doesn't exist, display 0
            if(!answer){
              display=0;
            }
            //if answer does exist add one to counter
            else if(answer.answer){
                counter++
        }
        //display result as a percentage
          display = ((counter / total) * 100).toFixed(1);
        })
        console.log('this is the display:', display);
        //returns display
        return display;
    }
    //function that gets the yes and no counts of each specified drug and number to target the correct api location for that drug
   const getCount=(drug, number)=>{
     //clear the variables
     yCounter=0
     nCounter=0
     counterDisplay=<></>
     //map through answers
     form.map((item)=>{
       let answer=item.answers[number]
       //if anwer doesn't exist display loading
       if(!answer){
        counterDipslay= <p>loading</p>
       }
       //if answer.answer doesn't exist add one to nCounter
       if(!answer.answer){
         nCounter++
       }
       //if answer.answer does exist add one to yCounter
       else if(answer.answer){
         yCounter++
       }
       //counterDisplay returns two rows.  One for users that selected YES to using a specified drug and one for users that selected NO.
       counterDisplay=
       <>
       <TableRow>
         <TableCell>The number of users that selected YES to using {drug} in the last month.</TableCell><TableCell align="right">{yCounter}</TableCell>
       </TableRow>
       <TableRow>
         <TableCell>The number of users that selected NO to using {drug} in the last month.</TableCell><TableCell align="right">{nCounter}</TableCell>
         </TableRow>
       </>
     }
   )
   //returns display
   return counterDisplay;
   }
//data for the table
    const data = {
        labels: ['Marijuana', 'Over The Counter', 'Hallucinogens', 'Methamphetamine', 'Cocaine', 'Inhalants', 'Benzodiazepines', 'Other Opiods', 'Heroin', 'Alcohol', 'Nicotine', 'Other'],
        datasets: [
          {

            label: '% of Respondents',
            data: [getDrugs(marijuana, marijuanaDisplay, 135), getDrugs(overTheCounter, overTheCounterDisplay, 143), getDrugs(hallucinogen, hallucinogenDisplay, 141), getDrugs(methamphetamine, methamphetamineDisplay, 137), getDrugs(cocaine, concaineDisplay, 136), getDrugs(inhalants, inhalantsDisplay, 142), getDrugs(benzodiazepines, benzodiazepinesDisplay, 140), getDrugs(otherOpiods, otherOpiodsDisplay, 139), getDrugs(heroin, heroinDisplay, 138), getDrugs(alcohol, alcoholDisplay, 134) , getDrugs(nicotine, nicotineDisplay, 133), getDrugs(other, otherDisplay, 144)],

            backgroundColor: 'rgba(167, 221, 205, 1)',
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                suggestedMax: 1,
                min: 1,
                
              },
            },
          ],
        },
      };
//returns a card with a barchart and a table with all of the information in text form.
    return(
      <Box mx='auto' width="75%" >
        <Card>
          <CardContent>
            <div className='header'>
              <h1 className='title'>All Drugs Used</h1>
            </div>
            <Bar data={data} options={options} />
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><h3>YourPath assessment takers were given the choice of entering how many days in the previous month they ingested a selection of different substances in the last month. This bar chart summarizes the percentage of people who had used at least one day in the previous month, across all of the included categories.</h3></TableCell><TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {getCount('Alcohol', 134)}
                {getCount('Benzodiazepines', 140)}
                {getCount('Cocaine', 136)}
                {getCount('Hallucinogen', 141)}
                {getCount('Heroin', 138)}
                {getCount('Inhalants', 142)}
                {getCount('Marijuana', 135)}
                {getCount('Methamphetamine', 137)}
                {getCount('Nicotine', 133)}
                {getCount('Opioids', 139)}
                {getCount('Over the Counter', 143)}
                {getCount('Other Substances', 144)}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Box>
    )
}

export default AllDrugsLastMonth;