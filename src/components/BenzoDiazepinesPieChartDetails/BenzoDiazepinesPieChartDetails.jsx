import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import PastServicesBar from '../PastServicesBar/PastServicesBar';
import Box from '@material-ui/core/Box';


//used to resize the Pie chart
function BenzodiazepinesPieChartDetails () {
  //select information from the store
    const form = useSelector((store)=>store.form);
    //define the variable to count
    let total=form.length;
    let yes=0;
    let no=0;
    let yesDisplay= 0;
    let noDisplay=0;
    //map through information from the store
    form.map((item)=>{
      //targets a specific question in the form to get the answers from the api
        let answer=item.answers[119]
        //if answer.answer is yes add one to yes
       if(answer.answer==='Yes'){
           yes++
       }//end if
       //if answer.answer is no or no answer add one to no
       else{
           no++
      }//end else
      //display yes results as a percentage
        yesDisplay = ((yes / total) * 100).toFixed(1);
        //display no results as a percentage
        noDisplay = ((no / total) * 100).toFixed(1);
      })
      //data for the pie chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [yesDisplay, noDisplay],
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
    //render a resized pie chart with title
    return (
        <>
        <div className='header'>
            <h1 className='title'>Benzodiazepines</h1>
        </div>
        <Box mx="auto" width="40%">
            <Pie data={data} />
        </Box>
        </>
    )
}
  
  export default BenzodiazepinesPieChartDetails;