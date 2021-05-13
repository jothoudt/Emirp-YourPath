import React, {useEffect} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import Hi from '../Hi/Hi';
import axios from 'axios';
import MarijuanaAllTime from '../MarijuanaAllTime/MarijuanaAllTime';
import MethAllTime from '../MethAllTime/MethAllTime';
import InhalantsAllTime from '../InhalantsAllTime/InhalantsAllTime';
import HeroinAllTime from '../HeroinAllTime/HeroinAllTime';
import CocaineAllTime from '../CocaineAllTime/CocaineAllTime';
import HallucinogenAllTime from '../HallucinogenAllTime/HallucinogenAllTime';
import OpiodsAllTime from '../OpiodsAllTime/OpiodsAllTime';
import BenzodiazepinesAllTime from '../BenzodiazepinesAllTime/BenzodiazepinesAllTime';
import NicotineAllTime from '../NicotineAllTime/NicotineAllTime';
import OtherSubstancesAllTime from '../OtherSubstancesAllTime/OtherSubstancesAllTime';
import OTCAllTime from '../OTCAllTime/OTCAllTime';
import SexualOrientation from '../SexualOrientation/SexualOrientation';

import AlcoholAllTime from '../AlcoholAllTime/AlcoholAllTime';

import Gender from '../Gender/Gender';
import FetalAlcoholSyndrome from '../FetalAlcoholSyndrome/FetalAlcoholSyndrome';



function UserPage() {

  const dispatch=useDispatch();
  const onLoad=()=>{
    dispatch({type:'FETCH_FORM'});
    dispatch({type:'FETCH_ASSESSMENT'});
    // dispatch({type:'FETCH_REPORT_1'});
  }

  const form = useSelector((store)=>store.form);
  // const report =useSelector((store)=>store.report1)

  // const displayFavorite=()=>{
  //   let reportDisplay=''
  //   let ComponentTagName=''
  //   if(!report){
  //     reportDisplay = <><h1>Loading</h1></>
  //   }
  //   else{
  //     reportDisplay= report.map((report, id)=>{
  //       console.log(report.component_name)
  //       ComponentTagName=report.component_name
  //       return(
  //         <>
  //       < report.component_name key={id} />
  //       </>
  //       )
  //     } )
  //   }
  //   return reportDisplay
  // }

//  let mjy=0;
//  let mjn=0;
//  let mjAnswers={
//    mjy,
//    mjn
//  }
  // const mjMap=form[119].answer

//   const answer1 =()=>{
//     let display=''
//     console.log('in answer')
//     if(!form){
//       display=<p>loading</p>
//     }
//     if(form.length){
//     form.map((item)=>{
//       let answer=item.answers[119]
//      if(answer.answer){
//        mjy++
//      }
//      if(!answer.answer){
//       mjn++
//     }
//     console.log(mjy, mjn)
//     // mjAnswers.mjy= mjy
//     // mjAnswers.mjn= mjn
//     console.log(mjAnswers)
//     display= 
//     <>
//     <p>Marijuana Yes:{mjy}</p>
//     <p>Marijuana No: {mjn}</p>
//     </>
//     })
//   }
//   return display;
// }

// const answer2=()=>{


// }
  
  
  useEffect(()=>
    onLoad()
  ,[]);


  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* {answer1()} */}
      {/* {displayFavorite()} */}
      {/* {report.map(index=>{
        let Name=index.component_name
        return(
          <>
        <Name />
        </>
        )
      })
    } */}
    <MarijuanaAllTime />
    <MethAllTime />
    <HallucinogenAllTime />
    <HeroinAllTime />
    <InhalantsAllTime />
    <CocaineAllTime />
    <OpiodsAllTime />
    <BenzodiazepinesAllTime />
    <NicotineAllTime />
    <AlcoholAllTime />

    <OtherSubstancesAllTime />
    <OTCAllTime />

    <SexualOrientation />

    <SexualOrientation />
    <Gender />
    <FetalAlcoholSyndrome />
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
