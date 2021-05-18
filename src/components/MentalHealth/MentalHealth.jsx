import React from 'react';
import {useSelector} from 'react-redux';
//pass thru bar chart
import MentalHealthBar from '../MentalHealthBar/MentalHealthBar';
//styling for card
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';

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
          let answer=item.answers[150]
          console.log( 'mental health:', answer.answer );
        if ( answer.answer ) {
          let answerArray = answer.answer
          console.log( 'answer length:', answerArray.length );
          answerArray.map( ( itemAnswer )=>{
            if(itemAnswer === 'Post-Traumatic Stress Disorder or PTSD'){
              ptsd++
            }
            else if (itemAnswer === 'Anxiety or Panic Attacks') {
              anxiety++
            }
            else if (itemAnswer === 'Depression') {
              depression++
            }
            else if (itemAnswer === 'Bipolar Disorder') {
              bipolar++
            }
            else if (itemAnswer === 'Schizophrenia') {
              schizophrenia++
            }
            else if (itemAnswer === 'Attention-deficit hyperactivity disorder (ADHD)') {
              adhd++
            }
            else if (itemAnswer === 'Eating disorder, including anorexia or bulimia') {
              eatingDisorder++
            }
            else if (itemAnswer === 'Obsessive-Compulsive Disorder') {
              ocd++
            }
            else if (itemAnswer === 'Borderline Personality Disorder') {
              personalityDisorder++
            }
            else if (itemAnswer === 'Other mental health issue') {
              other++
            }
        })
      }
        else{
          declined++
        }
      //console.log('in gender:', male, female, transgender, nonBinary, declined )
      display= 
      <Card>
        <MentalHealthBar />
        <CardHeader 
          title={answer.text}
        />
        <CardContent>
          <Divider />          
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
          </CardContent>
      </Card>
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