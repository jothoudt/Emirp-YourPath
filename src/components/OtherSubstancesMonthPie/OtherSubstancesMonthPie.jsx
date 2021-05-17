import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



  
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
        //if the answer is yes
       if(answer.answer){
        otherSubstancesYes++
       }
       //otherwise undecided and no equal No
       else{
        otherSubstancesNo++
      }
      otherSubstancesYesDisplay = ((otherSubstancesYes / otherSubstancesTotal) * 100).toFixed(1);
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
    //render to dom
    return (
        <>
        <div className='header'>
            <h1 className='title'>Other Substances used in the Last Month</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default OtherSubstancesMonthPie;