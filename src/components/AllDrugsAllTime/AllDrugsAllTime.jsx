import React from 'react';
import {useSelector} from 'react-redux';
import AllDrugsBar from '../AllDrugsBar/AllDrugsBar';
import { 
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography
} from '@material-ui/core';


function AllDrugsAllTime(){
    //select info from store
    const form = useSelector((store)=>store.form);

    //variables for counting
    let nicotineYes=0;
    let nicotineNo=0;
    let alcoholYes=0;
    let alcoholNo=0;
    let marijuanaYes=0;
    let marijuanaNo=0;
    let cocaineYes=0;
    let cocaineNo=0;
    let methYes=0;
    let methNo=0;
    let heroinYes=0;
    let heroinNo=0;
    let opiodsYes=0;
    let opiodsNo=0;
    let benzYes=0;
    let benzNo=0;
    let hallucinogenYes=0;
    let hallucinogenNo=0;
    let inhalantYes=0;
    let inhalantNo=0;
    let OTCYes=0;
    let OTCNo=0;
    let otherYes=0;
    let otherNo=0;


    //function to get nicotine numbers
    const getNicotineAT=()=>{
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

    const getAlcoholAT=()=>{
        let alcoholDisplay=''
        console.log('in answer')
        //if the form data doesn't exist
        if(!form){
          alcoholDisplay=<p>loading</p>
        }
        //map through form data and count yes/no answers
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[118]
         if(answer.answer==='Yes'){
             alcoholYes++
         }
         else{
             alcoholNo++
         }
        //console log results
        console.log(alcoholYes, alcoholNo)

        //define display
        alcoholDisplay= 
        <>
        <p>Alcohol Used Yes:{ alcoholYes}</p>
        <p>Alcohol Used No: {alcoholNo}</p>
        </>
        })
      }
      //return display
      return alcoholDisplay;
    }

    const getMarijuanaAT=()=>{
        let display=''
       console.log('in answer')
       if(!form){
         display=<p>loading</p>
       }
       if(form.length){
       form.map((item)=>{
         let answer=item.answers[119]
        if(answer.answer==='Yes'){
            marijuanaYes++
        }
        else{
            marijuanaNo++
       }
       console.log(marijuanaYes, marijuanaNo)
       display= 
       <>
       <p>Marijuana Yes:{marijuanaYes}</p>
       <p>Marijuana No: {marijuanaNo}</p>
       </>
       })
     }
     return display;
    }
    const getCocaineAT=()=>{
        let display=''
       console.log('in answer')
       if(!form){
         display=<p>loading</p>
       }
       if(form.length){
       form.map((item)=>{
         let answer=item.answers[120]
        if(answer.answer==='Yes'){
            cocaineYes++
        }
        else{
            cocaineNo++
       }
       console.log(cocaineYes, cocaineNo)
       display= 
       <>
       <p>Cocaine Yes:{cocaineYes}</p>
       <p>Cocaine No: {cocaineNo}</p>
       </>
       })
     }
     return display;
    }
    const getMethAT=()=>{
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
    const getHeroinAT=()=>{
        let heroinDisplay=''
        console.log('in answer')
        if(!form){
          heroinDisplay=<p>loading</p>
        }
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[122]
         if(answer.answer==='Yes'){
             heroinYes++
         }
         else{
             heroinNo++
         }
        //  if(!answer.answer){
        //      methNo++
        // }
        console.log(heroinYes, heroinNo)
        heroinDisplay= 
        <>
        <p>Heroin Yes:{heroinYes}</p>
        <p>Heroin No: {heroinNo}</p>
        </>
        })
      }
      return heroinDisplay;
    }
    const getOtherOpiodsAT=()=>{
        let display=''
       console.log('in answer')
       if(!form){
         display=<p>loading</p>
       }
       if(form.length){
       form.map((item)=>{
         let answer=item.answers[123]
        if(answer.answer==='Yes'){
            opiodsYes++
        }
        else{
            opiodsNo++
       }
       console.log(opiodsYes, opiodsNo)
       display= 
       <>
       <p>Opiods Yes:{opiodsYes}</p>
       <p>Opiods No: {opiodsNo}</p>
       </>
       })
     }
     return display;
    }
    const getBenzoAT=()=>{
        let display=''
        console.log('in answer')
        if(!form){
          display=<p>loading</p>
        }
        if(form.length){
          form.map((item)=>{
            let answer=item.answers[124]
          if(answer.answer === 'Yes'){
              benzYes++
          }
          else {
              benzNo++
        }
        console.log(benzYes, benzNo)
        display= 
        <>
        <p>Benzodiazepines Yes:{benzYes}</p>
        <p>Benzodiazepines No: {benzNo}</p>
        </>
        })
      }
      return display;
    }
    const getHallucinogenAT=()=>{
        let display=''
       console.log('in answer')
       if(!form){
         display=<p>loading</p>
       }
       if(form.length){
       form.map((item)=>{
         let answer=item.answers[125]
        if(answer.answer==='Yes'){
            hallucinogenYes++
        }
        else{
            hallucinogenNo++
       }
       console.log(hallucinogenYes, hallucinogenNo)
       display= 
       <>
       <p>Hallucinogen Yes:{hallucinogenYes}</p>
       <p>Hallucinogen No: {hallucinogenNo}</p>
       </>
       })
     }
     return display;
    }
    const getInhalantAT=()=>{
        let display=''
      console.log('in answer')
      if(!form){
        display=<p>loading</p>
      }
      if(form.length){
        form.map((item)=>{
          let answer=item.answers[126]
        if(answer.answer === 'Yes'){
            inhalantYes++
        }
        else {
            inhalantNo++
      }
      console.log(inhalantYes, inhalantNo)
      display= 
      <>
      <p>Inhalant Yes:{inhalantYes}</p>
      <p>Inhalant No: {inhalantNo}</p>
      </>
      })
    }
    return display;
    }
    const getOTCAT=()=>{
        let display=''
       console.log('in answer')
       if(!form){
         display=<p>loading</p>
       }
       if(form.length){
       form.map((item)=>{
         let answer=item.answers[127]
        if(answer.answer==='Yes'){
            OTCYes++
        }
        else{
            OTCNo++
       }
       console.log(OTCYes, OTCNo)
       display= 
       <>
       <p>Over-the-Counter Yes:{OTCYes}</p>
       <p>Over-the-Counter No: {OTCNo}</p>
       </>
       })
     }
     return display;
    }
    const getOtherSubsAT=()=>{
        //variable to be returned
        let otherDisplay=''
        console.log('in answer')
        //if the form data doesn't exist
        if(!form){
          otherDisplay=<p>loading</p>
        }
        //map through form data and count yes/no answers
        if(form.length){
        form.map((item)=>{
          let answer=item.answers[128]
         if(answer.answer==='Yes'){
             otherYes++
         }
         else{
             otherNo++
         }
        //console log results
        console.log(otherYes, otherNo)

        //define display
        otherDisplay= 
        <>
        <p>Other Substances Used Yes:{ otherYes}</p>
        <p>Other Substances Used No: {otherNo}</p>
        </>
        })
      }
      //return display
      return otherDisplay;
    }

    return(
      <Card>
        <CardContent>
          <AllDrugsBar />
          {getNicotineAT()}
          {getAlcoholAT()}
          {getMarijuanaAT()}
          {getCocaineAT()}
          {getMethAT()}
          {getHeroinAT()}
          {getOtherOpiodsAT()}
          {getBenzoAT()}
          {getHallucinogenAT()}
          {getInhalantAT()}
          {getOTCAT()}
          {getOtherSubsAT()}    
        </CardContent>
        <Divider />
        <p>This bar chart shows all-time drug usage rates, by category, of YourPath assessment takers. Each category of drug shows the percentage of responders who indicated they had ingested the respective substance at some point in their life. </p>
    </Card>
    )
        
}

export default AllDrugsAllTime;