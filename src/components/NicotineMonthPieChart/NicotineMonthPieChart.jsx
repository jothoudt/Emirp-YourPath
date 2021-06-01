import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
//function returns monthly pie chart
function NicotineMonthPie () {
    //get information from the store
    const form = useSelector((store)=>store.form);
    //define variables
    let nicotineTotal=form.length;
    let nicotineYes=0;
    let nicotineNo=0;
    let nicotineYesDisplay= 0;
    let nicotineNoDisplay=0;
    //map through data from the store
    form.map((item)=>{
      //target specific question number to get results from the api
        let answer=item.answers[133]
      //if answer.answer exists add one to nicotineYes
       if(answer.answer){
           nicotineYes++
       }//end if
       //if answer.answer doesn't exis add one to nicotineNo
       else{
           nicotineNo++
      }//end else
      //display yes results as a percentage
        nicotineYesDisplay = ((nicotineYes / nicotineTotal) * 100).toFixed(1);
        //display no results as a percentage
        nicotineNoDisplay = ((nicotineNo / nicotineTotal) * 100).toFixed(1);
      })
      //data for the pie chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [nicotineYesDisplay, nicotineNoDisplay],
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
    //renders title and pie chart to DOM
    return (
        <>
        <div className='header'>
            <h1 className='title'>Nicotine Use(within last month)</h1>
        </div>
        <Box mx="auto" width="40%">
          <Pie data={data} />
        </Box>

        </>
    )
}
  
  export default NicotineMonthPie;