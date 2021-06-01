import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
  //function returns a pie chart of meth use in the last month
function MethMonthPie () {
    //get information from the store
    const form = useSelector((store)=>store.form);

    //define variables
    let MethTotal=form.length;
    let MethYes=0;
    let MethNo=0;
    let MethYesDisplay= 0;
    let MethNoDisplay=0;

    //map through store info
    form.map((item)=>{
        //targets data set needed
        let answer=item.answers[137]
        //if the answer is yes add one to MethYes
       if(answer.answer){
        MethYes++
       }//end if
       //otherwise undecided and no equal No
       else{
        MethNo++
      }//end else
      //display yes results as a percentage
        MethYesDisplay = ((MethYes / MethTotal) * 100).toFixed(1);
        //display no results as a percentage
        MethNoDisplay = ((MethNo / MethTotal) * 100).toFixed(1);
      })
      
      //data for Pie Chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [MethYesDisplay, MethNoDisplay],
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
    //renders a title and pie chart to dom
    return (
        <>
        <div className='header'>
            <h1 className='title'>Meth use in the Last Month</h1>
        </div>
        <Box mx="auto" width="40%" >
          <Pie data={data} />
        </Box>
        </>
    )
}
  
  export default MethMonthPie;