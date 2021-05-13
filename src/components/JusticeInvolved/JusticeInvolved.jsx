import React from 'react';
import {useSelector} from 'react-redux'

function JusticeInvolved(){

    const form = useSelector((store)=>store.form);

    let none=0;
    let past=0;
    let awaitingSentencing=0;
    let drugCourt=0;
    let outOnBail=0;
    let probation=0;
    let parole=0;
    let workhouse=0;
    let declined=0;
    
     // const mjMap=form[119].answer
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      if(!form){
        display=<p>loading</p>
      }
      if(form.length){
        form.map((item)=>{
          console.log( 'item', item );
          let answer=item.answers[106]
          console.log( 'justice involved:', answer.answer );
        if ( answer.answer ) {
          if(answer.answer[0] === 'No current or past legal issues'){
            none++
          }
          else if (answer.answer[0] === 'Past issues, no current') {
            past++
          }
          else if (answer.answer[0] === 'Awaiting sentencing') {
            awaitingSentencing++
          }
          else if (answer.answer[0] === 'Part of drug court or other treatment court') {
            drugCourt++
          }
          else if (answer.answer[0] === 'Out on bail') {
            outOnBail++
          }
          else if (answer.answer[0] === 'On probation') {
            probation++
          }
          else if (answer.answer[0] === 'On parole') {
            parole++
          }
          else if (answer.answer[0] === 'In the workhouse') {
            workhouse++
          }
      }
        else{
          declined++
        }
      //console.log('in gender:', male, female, transgender, nonBinary, declined )
      display= 
      <>
        <p>No current or past legal issues: {none}</p>
        <p>Past issues, no current: {past}</p>
        <p>Awaiting sentencing: {awaitingSentencing}</p>
        <p>Part of drug court or other treatment court: {drugCourt}</p>
        <p>Out on bail: {outOnBail}</p>
        <p>On probation: {probation}</p>
        <p>On parole: {parole}</p>
        <p>In the workhouse: {workhouse}</p>        
        <p>Declined: {declined}</p>
      </>
      })
    }
    return display;
  }
    return(
        <>
        {answer1()}
        </>

    )
}

export default JusticeInvolved;