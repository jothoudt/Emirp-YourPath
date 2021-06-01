import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';

//used to properly size chart
function AlcoholPieChartDetails () {
  //get information from the store
    const form = useSelector((store)=>store.form);

    //variables to target
    let alcoholTotal=form.length;
    let alcoholYes=0;
    let alcoholNo=0;
    let alcoholYesDisplay= 0;
    let alcoholNoDisplay=0;

    //map through the information from the store
    form.map((item)=>{
      //targets the proper question
        let answer=item.answers[118]
        //if answer is yes add one to Yes
       if(answer.answer==='Yes'){
           alcoholYes++
       }
       //else for undecided and no add one to no
       else{
           alcoholNo++
      }
      //alcohol yes as a percentage
        alcoholYesDisplay = ((alcoholYes / alcoholTotal) * 100).toFixed(1);
      //alcohol no as a percentage
        alcoholNoDisplay = ((alcoholNo / alcoholTotal) * 100).toFixed(1);
      })
      
    //data for charts
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [alcoholYesDisplay, alcoholNoDisplay],
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
    //returns title and pie chart
    return (
        <>
        <div className='header'>
            <h1 className='title'>Alcohol</h1>
        </div>
        <Box mx="auto" width="40%">
            <Pie data={data} />
        </Box>
        </>
    )
}
  
  export default AlcoholPieChartDetails;