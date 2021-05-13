import React from 'react';
import {useSelector} from 'react-redux';

function NicotineAllTime(){

    const form = useSelector((store)=>store.form);
    let nicotineYes=0;
    let nicotineNo=0;
    const answerNicotine =()=>{
       
        let nicotineDisplay=''
        console.log('in answer')
        if(!form){
          nicotineDisplay=<p>loading</p>
        }
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[117]
         if(answer.answer==='Yes'){
             nicotineYes++
         }
         else{
             nicotineNo++
         }
        //  if(!answer.answer){
        //      methNo++
        // }
        console.log(nicotineYes, nicotineNo)
        nicotineDisplay= 
        <>
        <p>Nicotine Yes:{ nicotineYes}</p>
        <p>Nicotine No: {nicotineNo}</p>
        </>
        })
      }
      return nicotineDisplay;
    }

    return(
        <>
        {answerNicotine()}
        </>
    )
}
export default NicotineAllTime;