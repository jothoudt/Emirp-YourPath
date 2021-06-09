import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
import { shadows } from '@material-ui/system';



//function to return pie chart for lifetime meth use
function MethPieChartDetails () {
    //select items from the store
    const form = useSelector((store)=>store.form);

    //define variables
    let methTotal=form.length;
    let methYes=0;
    let methNo=0;
    let methYesDisplay= 0;
    let methNoDisplay=0;

    //map through the store data
    form.map((item)=>{
      //if api number exists proceed through conditionals
      if(item.answers[121]){
      //target specific question number to return results from the api
        let answer=item.answers[121]
        //if answer is yes add one to yes
        if(answer.answer==='Yes'){
          methYes++
        }//end if 
        //if answer is no or undecided add one to no
        else{
          methNo++
        }//end else
      }//end if
      //if api doesn't exist add one to methNo
      else{
        methNo++
      }//end else
      //display in percentages
      methYesDisplay = ((methYes / methTotal) * 100).toFixed(1);
      methNoDisplay = ((methNo / methTotal) * 100).toFixed(1);
      })
      
      //data for pie chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [methYesDisplay, methNoDisplay],
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
    //render a pie chart and title to dom
    return (
        <>
        <div className='header'>
            <h1 className='title'>Methamphetamine</h1>
        </div>
        <Box mx="auto" width="40%" >
            <Pie data={data} />
        </Box>
        </>
    )
}
  
  export default MethPieChartDetails;