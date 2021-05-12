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
         let answer=item.answers[119]
        if(answer.answer){
            marijuanaYes++
        }
        if(!answer.answer){
            marijuanaNo++
       }
       console.log(marijuanaYes, marijuanaNo)
       display= 
       <>
       <p>Marijuana Yes:{marijuanaYes}</p>
       <p>Marijuana No: {marijuanaNo}</p>
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