import React from 'react';
import {useSelector} from 'react-redux'

function FetalAlcoholSyndrome(){

    const form = useSelector((store)=>store.form);

    let fasYes=0;
    let fasNo=0;
    
     // const mjMap=form[119].answer
   
     const answer1 =()=>{
       let display=''
       console.log('in answer')
       if(!form){
         display=<p>loading</p>
       }
       if(form.length){
       form.map((item)=>{
         let answer=item.answers[108]
        if(answer.answer==='Yes'){
            fasYes++
        }
        else{
            fasNo++
       }
       console.log(fasYes, fasNo)
       display= 
       <>
       <p>Fetal Alcohol Syndrome Yes: {fasYes}</p>
       <p>Fetal Alcohol Syndrome No: {fasNo}</p>
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

export default FetalAlcoholSyndrome;