import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import PastServicesBar from '../PastServicesBar/PastServicesBar';
import Box from '@material-ui/core/Box';


  
function BenzodiazepinesPieChartDetails () {
    const form = useSelector((store)=>store.form);

    

    let total=form.length;
    let yes=0;
    let no=0;
    let yesDisplay= 0;
    let noDisplay=0;


    form.map((item)=>{
        let answer=item.answers[119]
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
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };
    return (
        <>
        <div className='header'>
            <h1 className='title'>Benzodiazepines</h1>
        </div>
        <Box mx="auto" width="40%">
            <Pie data={data} />
        </Box>
        </>
    )
}
  
  export default BenzodiazepinesPieChartDetails;