import React from 'react';
import {useSelector} from 'react-redux'

function OpiodsAllTime(){

    const form = useSelector((store)=>store.form);

    let opiodsYes=0;
    let opiodsNo=0;
    
     // const mjMap=form[119].answer
   
     const answer1 =()=>{
       let display=''
       console.log('in answer')
       if(!form){
         display=<p>loading</p>
       }
       if(form.length){
       form.map((item)=>{
         let answer=item.answers[123]
        if(answer.answer==='Yes'){
            opiodsYes++
        }
        else{
            opiodsNo++
       }
       console.log(opiodsYes, opiodsNo)
       display= 
       <>
       <p>Opiods Yes:{opiodsYes}</p>
       <p>Opiods No: {opiodsNo}</p>
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

export default OpiodsAllTime;