import React from 'react';
import {useSelector} from 'react-redux'

function Gender(){

    const form = useSelector((store)=>store.form);

    let male=0;
    let female=0;
    let transgender=0;
    let nonBinary=0;
    let declined = 0
    
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
          let answer=item.answers[83]
          console.log( 'gender answer:', answer.answer );
        if ( answer.answer ) {
          if(answer.answer[0] === 'Male'){
            male++
          }
          else if (answer.answer[0] === 'Female') {
            female++
          }
          else if (answer.answer[0] === 'Transgender') {
            transgender++
          }
          else if (answer.answer[0] === 'Non-binary') {
            nonBinary++
          }
      }
        else{
          declined++
        }
      console.log('in gender:', male, female, transgender, nonBinary, declined )
      display= 
      <>
        <p>Male: {male}</p>
        <p>Female: {female}</p>
        <p>Transgender: {transgender}</p>
        <p>Non-binary: {nonBinary}</p>
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

export default Gender;