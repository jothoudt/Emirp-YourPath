import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';




  
function SexualOrientationPieChartDetails () {
    const form = useSelector((store)=>store.form);

    

    let total=form.length;
    let heterosexual=0;
    let homosexual=0;
    let bisexual=0;
    let asexual=0;
    let noDisclosure=0;
    let heterosexualDisplay=0;
    let homosexualDisplay=0;
    let bisexualDisplay=0;
    let asexualDisplay=0;
    let noDisclosureDisplay=0;



    form.map((item)=>{
        let answer=item.answers[97]
        if(answer.answer==='Heterosexual (straight)'){
            heterosexual++
        }
        else if(answer.answer==='Homosexual'){
            homosexual++
        }
        else if(answer.answer==='Bisexual'){
            bisexual++
        }
        else if(answer.answer==='Asexual'){
            asexual++
        }
        else {
            noDisclosure++
        }
        heterosexualDisplay = ((heterosexual / total) * 100).toFixed(1);
        homosexualDisplay = ((homosexual / total) * 100).toFixed(1);
        bisexualDisplay = ((bisexual / total) * 100).toFixed(1);
        asexualDisplay = ((asexual / total) * 100).toFixed(1);
        noDisclosureDisplay = ((noDisclosure / total) * 100).toFixed(1);
    })

    const data = {
        labels: ['Heterosexual (straight) %', 'Homosexual %', 'Bisexual %', 'Asexual %', 'Not Disclosed %'],
        datasets: [
          {
            label: '# of Votes',
            data: [
                heterosexualDisplay,
                homosexualDisplay,
                bisexualDisplay,
                asexualDisplay,
                noDisclosureDisplay
            ],
            backgroundColor: [
                'rgba(188, 149, 255, .2)',
                'rgba(255, 184, 111, .2)',
                'rgba(148, 197, 204, 0.2)',
                'rgba(224, 202, 60, .5)',
                'rgba(114, 24, 23, 0.2)',
            ],
            borderColor: [
                'rgba(0, 73, 116, 1)',
                'rgba(0, 73, 116, 1)',
                'rgba(0, 73, 116, 1)',
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
            <h1 className='title'>Sexual Orientation</h1>
        </div>
        <Box mx="auto" width="40%">
            <Pie data={data} />
        </Box>

        </>
    )
}
  
  export default SexualOrientationPieChartDetails;