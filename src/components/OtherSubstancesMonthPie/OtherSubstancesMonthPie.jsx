import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
//function returns a pie chart of other substances used in the last month
function OtherSubstancesMonthPie () {
    //get information from the store
    const form = useSelector((store)=>store.form);

    //define variables
    let otherSubstancesTotal=form.length;
    let otherSubstancesYes=0;
    let otherSubstancesNo=0;
    let otherSubstancesYesDisplay= 0;
    let otherSubstancesNoDisplay=0;

    //map through store info
    form.map((item)=>{
        //targets data set needed
        let answer=item.answers[144]
        //if the answer is yes add one to otherSubstancesYes
       if(answer.answer){
        otherSubstancesYes++
       }//end if
       //otherwise undecided and no add one to otherSubstancesNo
       else{
        otherSubstancesNo++
      }//end else
      //display yes results as a percentage
      otherSubstancesYesDisplay = ((otherSubstancesYes / otherSubstancesTotal) * 100).toFixed(1);
      //display no results as a percentage
      otherSubstancesNoDisplay = ((otherSubstancesNo / otherSubstancesTotal) * 100).toFixed(1);
      })
      //data for Pie Chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [otherSubstancesYesDisplay, otherSubstancesNoDisplay],
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
            <h1 className='title'>Other Substances used in the Last Month</h1>
        </div>
        <Box mx="auto" width="40%">
          <Pie data={data} />
        </Box>
        </>
    )
}
  
  export default OtherSubstancesMonthPie;