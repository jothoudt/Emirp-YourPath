import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';

//returns a resized pie chart of marijuana use all time
function MarijuanaPieChartDetails () {
  //get data from the store
    const form = useSelector((store)=>store.form);
    //define the necessary variables
    let marijuanaTotal=form.length;
    let marijuanaYes=0;
    let marijuanaNo=0;
    let marijuanaYesDisplay= 0;
    let marijuanaNoDisplay=0;
    //map through the form data from the store
    form.map((item)=>{
      if(item.answers[119]){
      //target a specific question number to return results from the api
        let answer=item.answers[119]
        //if answer.answer is yes add one to marijuanaYes
        if(answer.answer==='Yes'){
           marijuanaYes++
        }//end if
        //if answer.answer is no or no answer add one to marijuanaNo
        else{
           marijuanaNo++
        }//end else
      }//end if
      else{
        marijuanaNo++
      }//end else
      //display yes results as a percentage
        marijuanaYesDisplay = ((marijuanaYes / marijuanaTotal) * 100).toFixed(1);
        //display no results as a percentage
        marijuanaNoDisplay = ((marijuanaNo / marijuanaTotal) * 100).toFixed(1);
      })
      //data for the pie chart
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
    //render a title and a pie chart
    return (
        <>
        <div className='header'>
            <h1 className='title'>Marijuana</h1>
        </div>
        <Box mx="auto" width="40%">
            <Pie data={data} />
        </Box>
        </>
    )
}
  
  export default MarijuanaPieChartDetails;