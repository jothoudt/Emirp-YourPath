import React from 'react';
import {useSelector} from 'react-redux';

function MethAllTime(){
    
    //get information from the store
    const form = useSelector((store)=>store.form);

    //variables to count
    let methYes=0;
    let methNo=0;

    //display the results of counting
    const answerMeth =()=>{
       //variable to display
        let methDisplay=''
        console.log('in answer')
        //if data doesn't exist display loading
        if(!form){
          methDisplay=<p>loading</p>
        }
        //if data exists map through and count answers
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
        //define display
        methDisplay= 
        <>
        <p>Meth Yes:{ methYes}</p>
        <p>Meth No: {methNo}</p>
        </>
        })
      }
      return methDisplay;
    }
    //return to dom
    return(
        <>
        {answerMeth()}
        </>
    )
}
export default MethAllTime;