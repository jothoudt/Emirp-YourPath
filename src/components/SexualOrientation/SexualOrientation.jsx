import React from 'react';
import {useSelector} from 'react-redux'

function SexualOrientation(){

    const form = useSelector((store)=>store.form);

    let heterosexual=0;
    let homosexual=0;
    let bisexual=0;
    let asexual=0;
    
     // const mjMap=form[119].answer
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      if(!form){
        display=<p>loading</p>
      }
      if(form.length){
        form.map((item)=>{
          let answer=item.answers[97]
        if(answer.answer === 'Heterosexual (straight)'){
          heterosexual++
        }
        else if (answer.answer === 'Homosexual') {
          homosexual++
        }
        else if (answer.answer === 'Bisexual') {
          bisexual++
        }
        else if (answer.answer === 'Asexual') {
          asexual++
        }
      console.log('in orientation:', heterosexual, homosexual, bisexual, asexual)
      display= 
      <>
        <h2>{answer.text}</h2>
        <p>heterosexual: {heterosexual}</p>
        <p>homosexual: {homosexual}</p>
        <p>bisexual: {bisexual}</p>
        <p>asexual: {asexual}</p>
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

export default SexualOrientation;