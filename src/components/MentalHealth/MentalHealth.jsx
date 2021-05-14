import React from 'react';
import {useSelector} from 'react-redux'

function MentalHealth(){

    const form = useSelector((store)=>store.form);

    let ptsd=0;
    let anxiety=0;
    let depression=0;
    let bipolar=0;
    let schizophrenia=0;
    let adhd=0;
    let eatingDisorder=0;
    let ocd=0;
    let personalityDisorder=0;
    let other=0;
    let declined=0;
    
     // const mjMap=form[119].answer
    const answer1 =()=>{
      let display=''
      console.log('in answer')
      if(!form){
        display=<p>loading</p>
      }
      if(form.length){
        form.map((item)=>{
          console.log( 'item', item );
          let answer=item.answers[106]
          console.log( 'justice involved:', answer.answer );
        if ( answer.answer ) {
          if(answer.answer[0] === 'Post-Traumatic Stress Disorder or PTSD'){
            ptsd++
          }
          else if (answer.answer[0] === 'Anxiety or Panic Attacks') {
            anxiety++
          }
          else if (answer.answer[0] === 'Depression') {
            depression++
          }
          else if (answer.answer[0] === 'Bipolar Disorder') {
            bipolar++
          }
          else if (answer.answer[0] === 'Schizophrenia') {
            schizophrenia++
          }
          else if (answer.answer[0] === 'Attention-deficit hyperactivity disorder (ADHD)') {
            adhd++
          }
          else if (answer.answer[0] === 'Eating disorder, including anorexia or bulimia') {
            eatingDisorder++
          }
          else if (answer.answer[0] === 'Obsessive-Compulsive Disorder') {
            ocd++
          }
          else if (answer.answer[0] === 'Borderline Personality Disorder') {
            personalityDisorder++
          }
          else if (answer.answer[0] === 'Other mental health issue') {
            other++
          }
      }
        else{
          declined++
        }
      //console.log('in gender:', male, female, transgender, nonBinary, declined )
      display= 
      <>
        <p>Post-Traumatic Stress Disorder or PTSD: {ptsd}</p>
        <p>Anxiety or Panic Attacks: {anxiety}</p>
        <p>Depression: {depression}</p>
        <p>Bipolar Disorder {bipolar}</p>
        <p>Schizophrenia: {schizophrenia}</p>
        <p>Attention-deficit hyperactivity disorder or ADHD: {adhd}</p>
        <p>Eating disorder, including anorexia or bulimia: {eatingDisorder}</p>
        <p>Obsessive-Compulsive Disorder: {ocd}</p>
        <p>Borderline Personality Disorder: {personalityDisorder}</p>
        <p>Other mental health issue: {other}</p>        
        <p>Declined: {declined}</p>
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

export default MentalHealth;