import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
//returns a resized pie chart
function RacePieChartDetails () {
    //get data from the store
    const form = useSelector((store)=>store.form);
    //define the necessary variables
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
    //map through data from the store
    form.map((item)=>{
        //target specific question number to return results from the store
        let answer=item.answers[95]
        //if answer.answer matches the string add one to the variable in that conditional
        if(answer.answer==='Native American'){
            nativeAmerican++
        }//end if
        else if(answer.answer==='Black or African American'){
            blackOrAfricanAmerican++
        }//end else if
        else if(answer.answer==='East African/Somali/African-born'){
            eastAfricanSomaliAfricanBorn++
        }//end else if
        else if(answer.answer==='East African/Somali/African-born'){
            eastAfricanSomaliAfricanBorn++
        }//end else if
        else if(answer.answer==='Asian'){
            asian++
        }//end else if
        else if(answer.answer==='Native Hawaiian or Pacific Islander'){
            nativeHawaiinOrPacificIslander++
        }//end else if
        else if(answer.answer==='Alaska Native'){
            alaskaNative++
        }//end else if
        else if(answer.answer==='White'){
            white++
        }//end else if
        //if answer.answer doesn't exist add one to noDisclosure
        else {
            noDisclosure++
        }//end else
        //display results as percentages
        blackOrAfricanAmericanDisplay = ((blackOrAfricanAmerican / raceTotal) * 100).toFixed(1);
        eastAfricanSomaliAfricanBornDisplay = ((eastAfricanSomaliAfricanBorn / raceTotal) * 100).toFixed(1);
        asianDisplay = ((asian / raceTotal) * 100).toFixed(1);
        nativeHawaiinOrPacificIslanderDisplay = ((nativeHawaiinOrPacificIslander / raceTotal) * 100).toFixed(1);
        alaskaNativeDisplay = ((alaskaNative / raceTotal) * 100).toFixed(1);
        whiteDisplay = ((white / raceTotal) * 100).toFixed(1);
        nativeAmericanDisplay = ((nativeAmerican / raceTotal) * 100).toFixed(1);
        noDisclosureDisplay = ((noDisclosure / raceTotal) * 100).toFixed(1);
      })
      //data for the pie chart
    const data = {
        labels: ['Black %', 'East African %', 'Asian %', 'Hawaiin/Pacific Islander %', 'Alaska Native %', 'White %', 'Native American %', 'Not Disclosed %'],
        datasets: [
          {
            label: '# of Votes',
            data: [blackOrAfricanAmericanDisplay, eastAfricanSomaliAfricanBornDisplay, asianDisplay, nativeHawaiinOrPacificIslanderDisplay, alaskaNativeDisplay, whiteDisplay, nativeAmericanDisplay, noDisclosureDisplay],
            backgroundColor: [
                'rgba(0, 172, 129, .2)',
                'rgba(188, 149, 255, .2)',
                'rgba(218, 204, 242, .2)',
                'rgba(130, 184, 239, .2)',
                'rgba(28, 79, 67, .2)',
                'rgba(102, 73, 189, .2)',
                'rgba(84, 84, 121, .2)',
                'rgba(205, 238, 143, .2)',
                
            ],
            borderColor: [
                'rgba(0, 172, 129, 1)',
                'rgba(188, 149, 255, 1)',
                'rgba(218, 204, 242, 1)',
                'rgba(130, 184, 239, 1)',
                'rgba(28, 79, 67, 1)',
                'rgba(102, 73, 189, 1)',
                'rgba(84, 84, 121, 1)',
                'rgba(205, 238, 143, 1)',
                
            ],
            borderWidth: 1,
          },
        ],
    };
      //renders resized pie chart and title to the DOM
    return (
        <>
        <div className='header'>
            <h1 className='title'>Race</h1>
        </div>
        <Box mx="auto" width="40%">
            <Pie data={data} />
        </Box>
        {/* <p>{blackOrAfricanAmerican}</p> */}
        </>
    )
}
  
  export default RacePieChartDetails;