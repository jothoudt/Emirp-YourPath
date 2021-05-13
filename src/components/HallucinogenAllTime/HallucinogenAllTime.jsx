import React from 'react';
import {useSelector} from 'react-redux'

function HallucinogenAllTime(){

    const form = useSelector((store)=>store.form);

    let hallucinogenYes=0;
    let hallucinogenNo=0;
    
     // const mjMap=form[119].answer
   
     const answer1 =()=>{
       let display=''
       console.log('in answer')
       if(!form){
         display=<p>loading</p>
       }
       if(form.length){
       form.map((item)=>{
         let answer=item.answers[125]
        if(answer.answer==='Yes'){
            hallucinogenYes++
        }
        else{
            hallucinogenNo++
       }
       console.log(hallucinogenYes, hallucinogenNo)
       display= 
       <>
       <p>Hallucinogen Yes:{hallucinogenYes}</p>
       <p>Hallucinogen No: {hallucinogenNo}</p>
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

export default HallucinogenAllTime;