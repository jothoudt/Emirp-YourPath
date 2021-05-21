import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';



  
function MarijuanaPieChartDetails () {
    const form = useSelector((store)=>store.form);

    

    let marijuanaTotal=form.length;
    let marijuanaYes=0;
    let marijuanaNo=0;
    let marijuanaYesDisplay= 0;
    let marijuanaNoDisplay=0;


    form.map((item)=>{
        let answer=item.answers[119]
       if(answer.answer==='Yes'){
           marijuanaYes++
       }
       else{
           marijuanaNo++
      }
        marijuanaYesDisplay = ((marijuanaYes / marijuanaTotal) * 100).toFixed(1);
        marijuanaNoDisplay = ((marijuanaNo / marijuanaTotal) * 100).toFixed(1);
      })
      

    const data = {
        labels: ['Yes %', 'No %'],
        datasets: [
          {
            label: '# of Votes',
            data: [marijuanaYesDisplay, marijuanaNoDisplay],
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
            <h1 className='title'>Marijuana</h1>
        </div>
        <Box mx="auto" width="40%">
            <Pie data={data} />
        </Box>
        </>
    )
}
  
  export default MarijuanaPieChartDetails;