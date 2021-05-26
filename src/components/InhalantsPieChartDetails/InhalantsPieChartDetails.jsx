import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import PastServicesBar from '../PastServicesBar/PastServicesBar';
import Box from '@material-ui/core/Box';




  
function InhalantsPieChartDetails () {
    const form = useSelector((store)=>store.form);

    

    let total=form.length;
    let yes=0;
    let no=0;
    let yesDisplay= 0;
    let noDisplay=0;


    form.map((item)=>{
        let answer=item.answers[126]
       if(answer.answer==='Yes'){
           yes++
       }
       else{
           no++
      }
        yesDisplay = ((yes / total) * 100).toFixed(1);
        noDisplay = ((no / total) * 100).toFixed(1);
      })
      

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
    return (
        <>
        <div className='header'>
            <h1 className='title'>Inhalants</h1>
        </div>
        <Box mx="auto" width="40%">
            <Pie data={data} />
        </Box>
        </>
    )
}
  
  export default InhalantsPieChartDetails;