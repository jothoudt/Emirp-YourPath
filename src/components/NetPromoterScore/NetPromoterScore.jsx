import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Score from "react-score-indicator";

import "./styles.css";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardHeader } from '@material-ui/core';

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
        average= (total / promoterScores.length).toFixed(1);
        console.log(average)
        // let displayaverage= <><p>Average Score: {average}</p></>
        return average;
    }
    const scoresOnLoad =()=>{
    dispatch({type:'FETCH_PROMOTER_SCORES'});
    }


    useEffect(()=>
    scoresOnLoad()
  ,[]);

    return(
        <div className="Gauge">
        <Box mx="auto" width="25%" boxShadow={12} height="500px">
          {/* <CardHeader title='Net Promoter Score' />
          <Card>
           <CardMedia> */}
           <div className=''>
           <h1>Net Promoter Score</h1>
          <Score 
            value= {getPromoterScores()}
            maxValue={10}
            borderWidth={30}
            gap={5}
            maxAngle={260}
            rotation={90}
            colors={[
              "#d12000",
              "#f1bc00",
              "#3da940"
            ]}
          />
          </div>
          <div>
            <p>Net Promoter Score measures a participants likelihood of recommending YourPath to a peer. The rating is on a scale of 1 to 10.</p>
          </div>
          {/* </CardMedia>
          </Card> */}
        </Box>
        </div>

    )
}

export default NetPromoterScore;