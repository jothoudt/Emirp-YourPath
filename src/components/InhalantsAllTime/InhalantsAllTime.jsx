import React from 'react';
import {useSelector} from 'react-redux'

function MarijuanaAllTime(){

    const form = useSelector((store)=>store.form);

    let marijuanaYes=0;
    let marijuanaNo=0;
    
     // const mjMap=form[119].answer
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      if(!form){
        display=<p>loading</p>
      }
      if(form.length){
        form.map((item)=>{
          let answer=item.answers[126]
        if(answer.answer === 'Yes'){
            marijuanaYes++
        }
        else {
            marijuanaNo++
      }
      console.log(marijuanaYes, marijuanaNo)
      display= 
      <>
      <p>Inhalant Yes:{marijuanaYes}</p>
      <p>Inhalant No: {marijuanaNo}</p>
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

export default MarijuanaAllTime;