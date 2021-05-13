import React from 'react';
import {useSelector} from 'react-redux';

function NicotineAllTime(){

    //select information from the store
    const form = useSelector((store)=>store.form);
    //variables to count
    let nicotineYes=0;
    let nicotineNo=0;
    //function to display
    const answerNicotine =()=>{
       
        let nicotineDisplay=''
        console.log('in answer')
        //if data doesn't exist
        if(!form){
          nicotineDisplay=<p>loading</p>
        }
        //map through and count yes/no answers
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

        //define display
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