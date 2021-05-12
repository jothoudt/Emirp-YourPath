import React from 'react';
import {useSelector} from 'react-redux';

function MethAllTime(){

    const form = useSelector((store)=>store.form);
    let methYes=0;
    let methNo=0;
    const answerMeth =()=>{
       
        let methDisplay=''
        console.log('in answer')
        if(!form){
          methDisplay=<p>loading</p>
        }
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[121]
         if(answer.answer==='Yes'){
             methYes++
         }
         else{
             methNo++
         }
        //  if(!answer.answer){
        //      methNo++
        // }
        console.log(methYes, methNo)
        methDisplay= 
        <>
        <p>Meth Yes:{ methYes}</p>
        <p>Meth No: {methNo}</p>
        </>
        })
      }
      return methDisplay;
    }

    return(
        <>
        {answerMeth()}
        </>
    )
}
export default MethAllTime;