import React from 'react';
import {useSelector} from 'react-redux'

function CocaineAllTime(){

    const form = useSelector((store)=>store.form);

    let cocaineYes=0;
    let cocaineNo=0;
    
     // const mjMap=form[119].answer
   
     const answer1 =()=>{
       let display=''
       console.log('in answer')
       if(!form){
         display=<p>loading</p>
       }
       if(form.length){
       form.map((item)=>{
         let answer=item.answers[120]
        if(answer.answer==='Yes'){
            cocaineYes++
        }
        else{
            cocaineNo++
       }
       console.log(cocaineYes, cocaineNo)
       display= 
       <>
       <p>Cocaine Yes:{cocaineYes}</p>
       <p>Cocaine No: {cocaineNo}</p>
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

export default CocaineAllTime;