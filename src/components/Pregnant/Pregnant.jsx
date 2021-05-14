import React from 'react';
import {useSelector} from 'react-redux'

function Pregnant(){

    const form = useSelector((store)=>store.form);

    let pregnant=0;
    let notPregnant=0;
    let notSure=0;

    
     // const mjMap=form[119].answer
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      if(!form){
        display=<p>loading</p>
      }
      if(form.length){
        form.map((item)=>{
          let answer=item.answers[103]
        if(answer.answer === 'Yes'){
          pregnant++
        }
        else if (answer.answer === 'No') {
          notPregnant++
        }
        else if (answer.answer === 'Not Sure') {
          notSure++
        }
      console.log('in pregnant:', pregnant, notPregnant, notSure)
      display= 
      <>
        <p>Pregnant: {pregnant}</p>
        <p>Not Pregnant: {notPregnant}</p>
        <p>Not Sure: {notSure}</p>
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

export default Pregnant;