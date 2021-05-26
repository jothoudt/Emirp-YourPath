import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';



  
function CocaineMonthPie () {
    //get information from the store
    const form = useSelector((store)=>store.form);

    //define variables
    let cocaineTotal=form.length;
    let cocaineYes=0;
    let cocaineNo=0;
    let cocaineYesDisplay= 0;
    let cocaineNoDisplay=0;

    //map through store info
    form.map((item)=>{
        //targets data set needed
        let answer=item.answers[136]
        //if the answer is yes
       if(answer.answer){
        cocaineYes++
       }
       //otherwise undecided and no equal No
       else{
        cocaineNo++
      }
      cocaineYesDisplay = ((cocaineYes / cocaineTotal) * 100).toFixed(1);
      cocaineNoDisplay = ((cocaineNo / cocaineTotal) * 100).toFixed(1);
      })
      
      //data for Pie Chart
    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [cocaineYesDisplay, cocaineNoDisplay],
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
            <h1 className='title'>Cocaine used in the Last Month</h1>
        </div>
        <Box mx="auto" width="40%">
          <Pie data={data} />
        </Box>
        </>
    )
}
  
  export default CocaineMonthPie;