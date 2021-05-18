import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



  
function SexualOrientationPieChart () {
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
        labels: ['Heterosexual (straight)', 'Homosexual', 'Bisexual', 'Asexual', 'Not Disclosed '],
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
            <h1 className='title'>Demographics-Sexual Orientation</h1>
        </div>
        <Pie data={data} />
        </>
    )
}
  
  export default SexualOrientationPieChart;