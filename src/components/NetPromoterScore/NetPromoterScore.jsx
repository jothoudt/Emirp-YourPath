import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function NetPromoterScore(){

    //define dispatch and store
    const dispatch= useDispatch();
    const scores= useSelector((store)=>store.promoterscore);
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
        return promoterScores;
    }

    useEffect(()=>
    getPromoterScores()
  ,[]);

    return(
        <>
        </>
    )
}

export default NetPromoterScore;