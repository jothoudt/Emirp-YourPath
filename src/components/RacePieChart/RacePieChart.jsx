import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



  
function RacePieChart () {
    const form = useSelector((store)=>store.form);

    

    let raceTotal=form.length;
    let blackOrAfricanAmerican=0;
    let blackOrAfricanAmericanDisplay=0;
    let eastAfricanSomaliAfricanBorn=0;
    let eastAfricanSomaliAfricanBornDisplay=0;
    let asian=0;
    let asianDisplay=0;
    let nativeHawaiinOrPacificIslander=0;
    let nativeHawaiinOrPacificIslanderDisplay=0;
    let alaskaNative=0;
    let alaskaNativeDisplay=0;
    let white=0;
    let whiteDisplay=0;
    let nativeAmerican=0;
    let nativeAmericanDisplay=0;
    let noDisclosure=0;
    let noDisclosureDisplay=0;



    form.map((item)=>{
        let answer=item.answers[95]
        if(answer.answer==='Native American'){
            nativeAmerican++
        }
        else if(answer.answer==='Black or African American'){
            blackOrAfricanAmerican++
        }
        else if(answer.answer==='East African/Somali/African-born'){
            eastAfricanSomaliAfricanBorn++
        }
        else if(answer.answer==='East African/Somali/African-born'){
            eastAfricanSomaliAfricanBorn++
        }
        else if(answer.answer==='Asian'){
            asian++
        }
        else if(answer.answer==='Native Hawaiian or Pacific Islander'){
            nativeHawaiinOrPacificIslander++
        }
        else if(answer.answer==='Alaska Native'){
            alaskaNative++
        }
        else if(answer.answer==='White'){
            white++
        }
        else {
            noDisclosure++
        }
        blackOrAfricanAmericanDisplay = ((blackOrAfricanAmerican / raceTotal) * 100).toFixed(1);
        eastAfricanSomaliAfricanBornDisplay = ((eastAfricanSomaliAfricanBorn / raceTotal) * 100).toFixed(1);
        asianDisplay = ((asian / raceTotal) * 100).toFixed(1);
        nativeHawaiinOrPacificIslanderDisplay = ((nativeHawaiinOrPacificIslander / raceTotal) * 100).toFixed(1);
        alaskaNativeDisplay = ((alaskaNative / raceTotal) * 100).toFixed(1);
        whiteDisplay = ((white / raceTotal) * 100).toFixed(1);
        nativeAmericanDisplay = ((nativeAmerican / raceTotal) * 100).toFixed(1);
        noDisclosureDisplay = ((noDisclosure / raceTotal) * 100).toFixed(1);
      })
      

    const data = {
        labels: ['Black %', 'East African %', 'Asian %', 'Hawaiin/Pacific Islander %', 'Alaska Native %', 'White %', 'Native American %', 'Not Disclosed %'],
        datasets: [
          {
            label: '# of Votes',
            data: [blackOrAfricanAmericanDisplay, eastAfricanSomaliAfricanBornDisplay, asianDisplay, nativeHawaiinOrPacificIslanderDisplay, alaskaNativeDisplay, whiteDisplay, nativeAmericanDisplay, noDisclosureDisplay],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'red',
              'blue',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'black',
              'black',
            ],
            borderWidth: 1,
          },
        ],
    };
      
    return (
        <>
        <div className='header'>
            <h1 className='title'>Race</h1>
        </div>
        <Pie data={data} />
        {/* <p>{blackOrAfricanAmerican}</p> */}
        </>
    )
}
  
  export default RacePieChart;