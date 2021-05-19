import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Hi from '../HiComponent/HiComponent';
import MarijuanaAllTime from '../MarijuanaAllTime/MarijuanaAllTime';

function TreatmentOptions(){

    //define dispatch and store
    const dispatch= useDispatch();
    const form= useSelector((store)=>store.form);

    //---------variables to utilize for each question/function set-----------
        //global variables
    let total=0;
    let average=0;
    //----statistic specific variables
    let medAverage=0;
    let displayMedicationAverage='';
    let residentialAverage=0;
    let displayResidentialAverage='';
    let outpatientAverage=0;
    let displayOutpatientAverage='';
    let individualtTherapyAverage=0;
    let displayIndividualTherapy='';
    let housingSupportAverage=0;
    let displayHousingSupport='';
    let individualPeerRecoveryAverage=0;
    let displayIndividualPeerRecovery='';
    let mutualAidMeetingsAverage=0;
    let displayMutualAidMeetings='';
    let mentorAverage=0;
    let displayMentor='';
    let jobHelpAverage=0;
    let displayJobHelp='';
    let medCareAverage=0;
    let displayMedCare='';
    let educationSupportAverage=0;
    let displayEducationSupport=0;

    // -------------------arrays to target for visual------------------------------
    let medicationNumbers= [];
    let residentialNumbers=[];
    let outpatientNumbers=[];
    let individualTherapyNumbers=[];
    let housingSupportNumbers=[];
    let individualPeerRecoveryNumbers=[];
    let mutualAidMeetingsNumbers=[];
    let mentorNumbers=[];
    let jobHelpNumbers=[];
    let medCareNumbers=[];
    let educationSupportNumbers=[];
    let twelveStepResourceNumbers=[];
    let nonTwelveStepResourceNumbers=[];
    let legalSupportNumbers=[];
    let transportationSupportNumbers=[];
    let benefitHelpNumbers=[];
    let harmReductionNumbers=[];
    //---------------------------------------------------------------------------
   
        //---------reuseable functions-------
        const getScores=(array, number)=>{
            if(!form){
                display=<p>loading</p>
              }
              if(form.length){
              form.map((item)=>{
                let answer=item.answers[number]
               if(answer.answer){
                array.push(item.answers[number].answer)
               }
              })
            }
            console.log(array)
           return getAverageScore(array);
        }
        //adds up the total of the  medication scores and divides them by the array length to get the average score
                const getAverageScore=(array)=>{
                    total=0;
                console.log(array)
                array.map((item)=>{
                    total += Number(item);
                    })
                    console.log(total)
                    average= total / array.length;
                    console.log(average)
                    // let display= <><p>{average}</p></>
                    return average;
                }
    //------------------------------------------------------------
                //-----Medication for alcohol or opiods scores--------
            const getMedScores=()=>{
                medAverage=getScores(medicationNumbers, 154 )
                displayMedicationAverage=<div><p>Medication for alcohol or Opioid: {medAverage}</p></div>
                return displayMedicationAverage;
            }
            //--------------------------------------------
            //------Residential Treatment scores--------------
            const getResidentialScores=()=>{
                residentialAverage=getScores(residentialNumbers, 156 )
                displayResidentialAverage=<div><p>Residential Treatment Scores: {residentialAverage}</p></div>
                return displayResidentialAverage;
            }
            const getOutpatientScores=()=>{
                outpatientAverage=getScores(outpatientNumbers, 157)
                displayOutpatientAverage=<div><p>Residential Treatment Scores: {outpatientAverage}</p></div>
                return displayOutpatientAverage;
            }
    return(
        <>
          {getMedScores()}
          {getResidentialScores()}
          {getOutpatientScores()}
        </>
    )
}

export default TreatmentOptions;