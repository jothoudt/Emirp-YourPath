import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
//function to return resized bar chart
function FASChartDetails () {
  //get data from the store
    const form = useSelector((store)=>store.form);
    //define necessary variables
    let fasTotal=form.length;
    let fasYes=0;
    let fasNo=0;
    let fasYesDisplay= 0;
    let fasNoDisplay=0;
    //map through data from the store
    form.map((item)=>{ 
      //target a specific question number to return results from the api
        let answer=item.answers[108]
        //if answer.answer is yes add one to fasYes
       if(answer.answer==='Yes'){
           fasYes++
       }//end if
       //if answer is no or no answer add one to fasNO
       else{
           fasNo++
      }//end else
      //display yes results as a percentage
        fasYesDisplay = ((fasYes / fasTotal) * 100).toFixed(1);
        //display no results as a percentage
        fasNoDisplay = ((fasNo / fasTotal) * 100).toFixed(1);
      })
      //data for the pie chart
      const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [fasYesDisplay, fasNoDisplay],
            backgroundColor: [
              'rgba(167, 221, 205, .3)',
              'rgba(0, 73, 116, .2)',
            ],
            borderColor: [
              'rgba(0, 73, 116, 1)',
              'rgba(0, 73, 116, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };
    //reders a resized pie chart with a title
    return (
        <>
        <div className='header'>
            <h1 className='title'>FAS Diagnoses</h1>
        </div>
        <Box mx="auto" width="40%">
            <Pie data={data} />
        </Box>
        </>
    )
}
  
  export default FASChartDetails;