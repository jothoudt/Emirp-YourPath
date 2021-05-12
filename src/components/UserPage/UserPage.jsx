import React, {useEffect} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';

function UserPage() {

  const dispatch=useDispatch();
  const onLoad=()=>{
    dispatch({type:'FETCH_FORM'});
    dispatch({type:'FETCH_ASSESSMENT'});
    // dispatch({type:'FETCH_REPORT_1'});
  }

  const form = useSelector((store)=>store.form);

 let mjy=0;
 let mjn=0;
 let mjAnswers={
   mjy,
   mjn
 }
  // const mjMap=form[119].answer

  const answer1 =()=>{
    let display=''
    console.log('in answer')
    if(!form){
      display=<p>loading</p>
    }
    if(form.length){
    form.map((item)=>{
      let answer=item.answers[119]
     if(answer.answer){
       mjy++
     }
     if(!answer.answer){
      mjn++
    }
    console.log(mjy, mjn)
    // mjAnswers.mjy= mjy
    // mjAnswers.mjn= mjn
    console.log(mjAnswers)
    display= 
    <>
    <p>Marijuana Yes:{mjy}</p>
    <p>Marijuana No: {mjn}</p>
    </>
    })
  }
  return display;
}

const answer2=()=>{


}
  
  
  useEffect(()=>
    onLoad()
  ,[]);


  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {answer1()}
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
