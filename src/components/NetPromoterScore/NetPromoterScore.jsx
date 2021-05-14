import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function NetPromoterScore(){

    //define dispatch and store
    const dispatch= useDispatch();
    const scores= useSelector((store)=>store.promoterscore);
    let average=0;
    let total=0;
    let displayaverage=''
    // -------------------array to target for visual------------------------------
    let promoterScores= []
    //---------------------------------------------------------------------------
    const getPromoterScores=()=>{
        dispatch({type:'FETCH_PROMOTER_SCORES'});
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

    useEffect(()=>
    getPromoterScores()
  ,[]);

    return(
        <>
          {getPromoterScores()}
        </>
    )
}

export default NetPromoterScore;