import React from 'react';
import {useSelector} from 'react-redux'

function BenzodiazepinesAllTime(){

    const form = useSelector((store)=>store.form);

    let benzYes=0;
    let benzNo=0;
    
     // const mjMap=form[119].answer
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      if(!form){
        display=<p>loading</p>
      }
      if(form.length){
        form.map((item)=>{
          let answer=item.answers[124]
        if(answer.answer === 'Yes'){
            benzYes++
        }
        else {
            benzNo++
      }
      console.log(benzYes, benzNo)
      display= 
      <>
      <p>Benzodiazepines Yes:{benzYes}</p>
      <p>Benzodiazepines No: {benzNo}</p>
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

export default BenzodiazepinesAllTime;