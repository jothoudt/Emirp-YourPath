import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MarijuanaAllTime from '../MarijuanaAllTime/MarijuanaAllTime';

function NetPromoterScore(){

    //define dispatch and store
    const dispatch= useDispatch();
    const scores= useSelector((store)=>store.promoterscore);
    const prefs= useSelector((store)=>store.preferences);
    let average=0;
    let total=0;
    let displayaverage=''
    // -------------------array to target for visual------------------------------
    let promoterScores= []
    //---------------------------------------------------------------------------
    //brings in all info from survery and returns an array of the scores from the survey
    const getPromoterScores=()=>{
        if(!scores){
            display=<p>loading</p>
          }
          if(scores.length){
          scores.map((score)=>{
            let answer=score.answers[4]
           if(answer.answer){
               promoterScores.push(score.answers[4].answer)
           }
          })
        }
        console.log(promoterScores)
       return getAverageScore(promoterScores);
    }
    //adds up the total of the scores and divides them by the array length to get the average score
    const getAverageScore=()=>{
      console.log(promoterScores)
        promoterScores.map((score)=>{
            total += Number(score);
        })
        console.log(total)
        average= total / promoterScores.length;
        console.log(average)
        let displayaverage= <><p>Average Score: {average}</p></>
        return displayaverage;
    }
    const scoresOnLoad =()=>{
    dispatch({type:'FETCH_PROMOTER_SCORES'});
    dispatch({type:'FETCH_PREFERENCES'});
    }

    const getComponentDisplay=()=>{
      let prefDisplay=''
      if(!prefs){
        prefDisplay=<><h2>Loading</h2></>
      }
      else{
       prefDisplay= prefs.map((pref, index)=>{
        let ComponentTag=pref.component_name
        return(
          <div key={index}>
            < ComponentTag />
            </div>
        ) 
      })
      }
      return prefDisplay
    }

    useEffect(()=>
    scoresOnLoad()
  ,[]);

    return(
        <>
          {getPromoterScores()}
          {getComponentDisplay()}
        </>
    )
}

export default NetPromoterScore;