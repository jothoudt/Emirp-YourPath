import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';



  //function to return pie chart of Alcohol used in the last month
function AlcoholMonthPie () {
    //get information from the store
    const form = useSelector((store)=>store.form);

    //define variables
    let alcoholTotal=form.length;
    let alcoholYes=0;
    let alcoholNo=0;
    let alcoholYesDisplay= 0;
    let alcoholNoDisplay=0;

    //map through store info
    form.map((item)=>{
        //targets data set needed
        let answer=item.answers[134]
        //if the answer is yes
       if(answer.answer){
        alcoholYes++
       }
       //otherwise undecided and no equal No
       else{
        alcoholNo++
      }
      //returns alcohol yes as a percentage
      alcoholYesDisplay = ((alcoholYes / alcoholTotal) * 100).toFixed(1);
      //returns alcohol no as a percentage
      alcoholNoDisplay = ((alcoholNo / alcoholTotal) * 100).toFixed(1);
      })
      
      //data for Pie Chart
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
    //render to dom
    return (
        <>
        <div className='header'>
            <h1 className='title'>Alcohol used in the Last Month</h1>
        </div>
        <Box mx="auto" width="40%">
          <Pie data={data} />
        </Box>
        </>
    )
}
  
  export default AlcoholMonthPie;