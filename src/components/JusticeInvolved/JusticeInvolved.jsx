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
          let answerArray = answer.answer
          console.log( 'answer length:', answerArray.length );
          answerArray.map( ( itemAnswer )=>{  
            if(itemAnswer === 'No current or past legal issues'){
              none++
            }
            else if (itemAnswer === 'Past issues, no current') {
              past++
            }
            else if (itemAnswer === 'Awaiting sentencing') {
              awaitingSentencing++
            }
            else if (itemAnswer === 'Part of drug court or other treatment court') {
              drugCourt++
            }
            else if (itemAnswer === 'Out on bail') {
              outOnBail++
            }
            else if (itemAnswer === 'On probation') {
              probation++
            }
            else if (itemAnswer === 'On parole') {
              parole++
            }
            else if (itemAnswer === 'In the workhouse') {
              workhouse++
            }
        })
      }
        else{
          declined++
        }
      //console.log('in gender:', male, female, transgender, nonBinary, declined )
      display= 
      <>
        <h2>{answer.text}</h2>
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