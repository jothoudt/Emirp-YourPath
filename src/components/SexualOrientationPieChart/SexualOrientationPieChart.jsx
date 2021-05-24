import React from 'react';
import {useSelector} from 'react-redux';
import { Pie } from 'react-chartjs-2';



  
function SexualOrientationPieChart () {
    //get info from the store
    const form = useSelector((store)=>store.form);

    //variables to target
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

    //map through data from the store
    form.map((item)=>{
        //targets proper question
        let answer=item.answers[97]
        //if heterosexual add 1 to heterosexual
        if(answer.answer==='Heterosexual (straight)'){
            heterosexual++
        }
        //if homosexual add 1 to homosexual
        else if(answer.answer==='Homosexual'){
            homosexual++
        }
        //if bisexual add 1 to bisexual
        else if(answer.answer==='Bisexual'){
            bisexual++
        }
        //if asexual add 1 to asexual
        else if(answer.answer==='Asexual'){
            asexual++
        }
        //if nothing add one to no disclosure
        else {
            noDisclosure++
        }
        //display heterosexual count as a percentage of the total
        heterosexualDisplay = ((heterosexual / total) * 100).toFixed(1);
        //display homosexual count as a percentage of the total
        homosexualDisplay = ((homosexual / total) * 100).toFixed(1);
        //display bisexual count as a percentage of the total
        bisexualDisplay = ((bisexual / total) * 100).toFixed(1);
        //display asexual count as a percentage of the total
        asexualDisplay = ((asexual / total) * 100).toFixed(1);
        //display no disclosure as a percentage of the total
        noDisclosureDisplay = ((noDisclosure / total) * 100).toFixed(1);
    })
    //data for the table
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
      //returns total and pie chart
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