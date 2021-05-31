import React from 'react';
import {useSelector} from 'react-redux'
//pass thru bar chart
import GenderBarChart from '../GenderBarChart/GenderBarChart';
//styling
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';
import Demographics from '../Demographics/Demographics';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

function Gender(){
  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
  const classes=useStyles();

    const form = useSelector((store)=>store.form);

    let male=0;
    let female=0;
    let transgender=0;
    let nonBinary=0;
    let declined = 0
    
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
          let answer=item.answers[83]
          console.log( 'gender answer:', answer.answer );
        if ( answer.answer ) {
          let answerArray = answer.answer
          console.log( 'answer length:', answerArray.length );
          answerArray.map( ( itemAnswer )=>{
            if(itemAnswer === 'Male'){
              male++
            }
            else if (itemAnswer === 'Female') {
              female++
            }
            else if (itemAnswer === 'Transgender') {
              transgender++
            }
            else if (itemAnswer === 'Non-binary') {
              nonBinary++
            }
        })
      }
        else{
          declined++
        }
      console.log('in gender:', male, female, transgender, nonBinary, declined )
      display= 
      <Box mx='auto' width="75%" >
          <Card> 
            <CardContent>
              <GenderBarChart />
              <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell><h3>People taking the YourPath assessment are given the option of indicating their gender. Because the form allows more than one response, we used a bar chart to visualize the count totals of each category.</h3></TableCell><TableCell></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableRow>
                      <TableCell><p>The number of users that identified as Male.</p></TableCell><TableCell align="right">{male}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that identified as Female.</p></TableCell><TableCell align="right">{female}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that identified as Transgender.</p></TableCell><TableCell align="right">{transgender}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that identified as Non-binary</p></TableCell><TableCell align="right">{nonBinary}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell><p>The number of users that Declined to answer.</p></TableCell><TableCell align="right">{declined}</TableCell>
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
        <Demographics />
        {answer1()}
        </>

    )
}

export default Gender;