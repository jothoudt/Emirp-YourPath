import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
//returns a pie chart of marijuana use in the last month  
function MarijuanaMonthPieChart () {
  //get data from the store
    const form = useSelector((store)=>store.form);
    //define necessary variables
    let marijuanaTotal=form.length;
    let marijuanaYes=0;
    let marijuanaNo=0;
    let marijuanaYesDisplay= 0;
    let marijuanaNoDisplay=0;
    //map through data from the store
    form.map((item)=>{
      //targe specific question number to return the results from the api
        let answer=item.answers[135]
        //if answer.answeris yes add one to marijuanaYes
       if(answer.answer){
           marijuanaYes++
       }//end if 
       //if answer.answer is no or no answer add one to marijuanaNo
       else{
           marijuanaNo++
      }//end else
      //display yes results as a percentage
        marijuanaYesDisplay = ((marijuanaYes / marijuanaTotal) * 100).toFixed(1);
        //display no results as a percentage
        marijuanaNoDisplay = ((marijuanaNo / marijuanaTotal) * 100).toFixed(1);
      })
      //data for the table
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [marijuanaYesDisplay, marijuanaNoDisplay],
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
    //render a title and pie chart to the DOM
    return (
        <>
        <div className='header'>
            <h1 className='title'>Marijuana Use(with in last month)</h1>
        </div>
        <Box mx="auto" width="40%">
        <Pie data={data} />
        </Box>
        </>
    )
}
  
  export default MarijuanaMonthPieChart;