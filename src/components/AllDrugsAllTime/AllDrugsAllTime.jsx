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
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

//returns a card with a bar chart and a table of information from all of the drugs monitorred in the assessment
function AllDrugsAllTime(){
  //used to style the table
  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
  //define classes to style the table
  const classes=useStyles();
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
          if(item.answers[117]){
            let answer=item.answers[117]
          //if answer is using Nicotine is yes add one to yes
            if(answer.answer==='Yes'){
             nicotineYes++
            }
         //if answer is no or no answer, add one to no
            else{
              nicotineNo++
            }
          }
          else{
            nicotineNo++
          }
        //define display. It will return two rows of the table. One for users that said yes to using Nicotine in their life. One for users that said No.
        nicotineDisplay= 
        <>
        <TableRow>
       <TableCell> <p>The number of users that said YES to using Nicotine in their lifetime</p></TableCell> <TableCell align="right">{ nicotineYes}</TableCell>
       </TableRow>
       <TableRow>
        <TableCell><p>The number of users that said NO to using Nicotine in their lifetime</p></TableCell><TableCell align="right">{nicotineNo}</TableCell> 
        </TableRow>
        </>
        })
      }
      //return display
      return nicotineDisplay;

    }
    //function to get alcohol numbers
    const getAlcoholAT=()=>{
        let alcoholDisplay=''
        console.log('in answer')
        //if the form data doesn't exist
        if(!form){
          alcoholDisplay=<p>loading</p>
        }
        //if form data exists map through form data and count yes/no answers
        if(form.length){
        form.map((item)=>{
          if(item.answers[118]){
          let answer=item.answers[118]
          //if answer to using alcohol is yes add one to yes
            if(answer.answer==='Yes'){
             alcoholYes++
           }
           //if answer to using alcohol is no add one to no.
           else{
             alcoholNo++
           }
          }
        else{
          alcoholNo++
        }
        //console log results
        console.log(alcoholYes, alcoholNo)

        //define display. It will return two rows of the table. One for answers of yes and one for answers of no to using alcohol sometime in their life.
        alcoholDisplay= 
        <>
        <TableRow>
       <TableCell> <p>The number of users that said YES to using Alcohol in their lifetime</p></TableCell> <TableCell align="right">{ alcoholYes}</TableCell>
       </TableRow>
       <TableRow>
        <TableCell><p>The number of users that said NO to using Alcohol in their lifetime</p></TableCell><TableCell align="right">{alcoholNo}</TableCell> 
        </TableRow>
        </>
        })
      }
      //return display
      return alcoholDisplay;
    }
    //function to get marijuana numbers
    const getMarijuanaAT=()=>{
        let display=''
       console.log('in answer')
       //if form data doesnt exist, display loading
       if(!form){
         display=<p>loading</p>
       }
       //if form data exists map through the yes and no counts for marijuana.
       if(form.length){
       form.map((item)=>{
        if(item.answers[119]){
          let answer=item.answers[119]
         //if answer to using marijuana is yes add one to yes
          if(answer.answer==='Yes'){
            marijuanaYes++
          }
        //else if answer is no or unanswered add one to no
          else{
            marijuanaNo++
         }
        }
        else{
          marijuanaNo++
        }
       console.log(marijuanaYes, marijuanaNo)
       //display will return two rows of the table. One for users that said yes and one for users that said no to using Marijuana in their lifetime.
       display= 
       <>
        <TableRow>
       <TableCell> <p>The number of users that said YES to using Marijuana in their lifetime</p></TableCell> <TableCell align="right">{marijuanaYes}</TableCell>
       </TableRow>
       <TableRow>
        <TableCell><p>The number of users that said NO to using Marijuana in their lifetime</p></TableCell><TableCell align="right">{marijuanaNo}</TableCell> 
        </TableRow>
        </>
       })
     }
     //returns display
     return display;
    }
    //function to get Cocaine numbers
    const getCocaineAT=()=>{
        let display=''
       console.log('in answer')
       //if form data doesn't exist display loading
       if(!form){
         display=<p>loading</p>
       }
       //if form data exists map through yes and no counts to use of Cocaine
       if(form.length){
       form.map((item)=>{
         if(item.answers[120]){
           let answer=item.answers[120]
         //if anwer is yes to using Cocaine add one
           if(answer.answer==='Yes'){
             cocaineYes++
           }
        //if the answer is no or unanswered add one to no.
           else{
            cocaineNo++
          }
        }
        else{
          cocaineNo++
        }
       console.log(cocaineYes, cocaineNo)
       //display that returns two rows of the table. One for users that selected yes and one for users that selected no to using Cocaine in their lifetime.
       display= 
       <>
        <TableRow>
       <TableCell> <p>The number of users that said YES to using Cocaine in their lifetime</p></TableCell> <TableCell align="right">{cocaineYes}</TableCell>
       </TableRow>
       <TableRow>
        <TableCell><p>The number of users that said NO to using Cocaine in their lifetime</p></TableCell><TableCell align="right">{cocaineNo}</TableCell> 
        </TableRow>
        </>
       })
     }
     return display;
    }
    //function to get Meth numbers
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
          if(item.answers[121]){
            let answer=item.answers[121]
          //if answers to using Meth is yes add one to Meth
             if(answer.answer==='Yes'){
               methYes++
             }
         //if answer is no or unanswered add one to no.
             else{
               methNo++
             }
          }
          else{
            methNo++
          }
        console.log(methYes, methNo)
        //define display. It will add two rows to the table. One row for users that answered yes and one row for the users that answered no to using mMeth in their lifetime.
        methDisplay= 
        <>
        <TableRow>
       <TableCell> <p>The number of users that said YES to using Meth in their lifetime</p></TableCell> <TableCell align="right">{ methYes}</TableCell>
       </TableRow>
       <TableRow>
        <TableCell><p>The number of users that said NO to using Meth in their lifetime</p></TableCell><TableCell align="right">{methNo}</TableCell> 
        </TableRow>
        </>
        })
      }
      return methDisplay;
    }
    //function to get heroin numbers
    const getHeroinAT=()=>{
        let heroinDisplay=''
        console.log('in answer')
        //if no form data display loading
        if(!form){
          heroinDisplay=<p>loading</p>
        }
        //if for data exists map through answers
        if(form.length){
        form.map((item)=>{
         if(item.answers[122]){
          let answer=item.answers[122]
          //if answer is yes to using heroin add one to yes
           if(answer.answer==='Yes'){
             heroinYes++
           }
         //if answer is no or no answer add one to no
           else{
             heroinNo++
           }
         }
         else{
           heroinNo++
         }
        console.log(heroinYes, heroinNo)
        //heroin display returns two rows of the table. One for users that answered yes and one for users that answered no to using heroin in their lifetime.
        heroinDisplay= 
        <>
        <TableRow>
       <TableCell> <p>The number of users that said YES to using Heroin in their lifetime</p></TableCell> <TableCell align="right">{heroinYes}</TableCell>
       </TableRow>
       <TableRow>
        <TableCell><p>The number of users that said NO to using Heroin in their lifetime</p></TableCell><TableCell align="right">{heroinNo}</TableCell> 
        </TableRow>
        </>
        })
      }
      return heroinDisplay;
    }
    //function to return the numbers for opioids
    const getOtherOpiodsAT=()=>{
        let display=''
       console.log('in answer')
       //if there is no form data display loading
       if(!form){
         display=<p>loading</p>
       }
       //if form data exists map through the answers
       if(form.length){
       form.map((item)=>{
        if(item.answers[123]){
         let answer=item.answers[123]
         //if answer is yes to using opioids in the user's lifetime add one to yes
          if(answer.answer==='Yes'){
            opiodsYes++
          }
        //if answer is no or unanswered to using opioids add one to no
          else{
            opiodsNo++
          }
        }
        else{
          opiodsNo++
        }
       console.log(opiodsYes, opiodsNo)
       //display returns two rows. One for users that said yes and one for users that said no to using opioids in their lifetime.
       display= 
       <>
       <TableRow>
      <TableCell> <p>The number of users that said YES to using Opioids in their lifetime</p></TableCell> <TableCell align="right">{opiodsYes}</TableCell>
      </TableRow>
      <TableRow>
       <TableCell><p>The number of users that said NO to using Opioids in their lifetime</p></TableCell><TableCell align="right">{opiodsNo}</TableCell> 
       </TableRow>
       </>
       })
     }
     return display;
    }
    //function to get the numbers for Benzodiazepines
    const getBenzoAT=()=>{
        let display=''
        console.log('in answer')
        //if form doesn't exist, display loading
        if(!form){
          display=<p>loading</p>
        }
        //if form data does exist map through the answers
        if(form.length){
          form.map((item)=>{
          if(item.answers[124]){
            let answer=item.answers[124]
            //if the answer to using Benzos is yes. Add one to BenzYes
            if(answer.answer === 'Yes'){
              benzYes++
            }
          //if answer is no or no answer, Add one to BenzNo.
            else {
              benzNo++
           }
         }
         else{
           benzNo++
         }
        console.log(benzYes, benzNo)
        //display returns two rows of the table. One for users that said yes and one for users that said no to using Benzos in their lifetime.
        display= 
        <>
        <TableRow>
       <TableCell> <p>The number of users that said YES to using Benzodiazepines in their lifetime</p></TableCell> <TableCell align="right">{benzYes}</TableCell>
       </TableRow>
       <TableRow>
        <TableCell><p>The number of users that said NO to using Benzodiazepines in their lifetime</p></TableCell><TableCell align="right">{benzNo}</TableCell> 
        </TableRow>
        </>

        })
      }
      return display;
    }
    //function to return the hallucinogen numbers
    const getHallucinogenAT=()=>{
        let display=''
       console.log('in answer')
       //if form data doesn't exist display loading
       if(!form){
         display=<p>loading</p>
       }
       //if form data does exist map through the answers
       if(form.length){
       form.map((item)=>{
         if(item.answers[125]){
         let answer=item.answers[125]
         //if the answer is yes to using Hallucinogen in their lifetime, add one to yes
           if(answer.answer==='Yes'){
             hallucinogenYes++
           }
        //if answer is no or no answwer add one to no
           else{
             hallucinogenNo++
          }
        }
        else{
          hallucinogenNo++
        }
       console.log(hallucinogenYes, hallucinogenNo)
       //display returns two rows of the table. One for users that answered yes and one for users that answered no to using hallucinogens in their lifetime.
       display= 
       <>
        <TableRow>
       <TableCell> <p>The number of users that said YES to using Hallucinogen in their lifetime</p></TableCell> <TableCell align="right">{hallucinogenYes}</TableCell>
       </TableRow>
       <TableRow>
        <TableCell><p>The number of users that said NO to using Hallucinogen in their lifetime</p></TableCell><TableCell align="right">{hallucinogenNo}</TableCell> 
        </TableRow>
        </>

       })
     }
     //return display
     return display;
    }
    //function to get inhalant numbers
    const getInhalantAT=()=>{
        let display=''
      console.log('in answer')
      //if form data doesn't exist, display loading
      if(!form){
        display=<p>loading</p>
      }
      //if form data does exist, map through the answers
      if(form.length){
        form.map((item)=>{
        if(item.answers[126]){
          let answer=item.answers[126]
          //if answer is yes to using Inhalants, add one to inhalantYes
          if(answer.answer === 'Yes'){
            inhalantYes++
          }
        //if answwer is no to using Inhalants, add one to inhalantNo
          else {
            inhalantNo++
         }
        }
        else{
          inhalantNo++
        }
      console.log(inhalantYes, inhalantNo)
      //display returns two rows. One for users that selected Yes and one for users that selected no to using inhalants in their lifetime.
      display= 
      <>
      <TableRow>
     <TableCell> <p>The number of users that said YES to using Inhalant in their lifetime</p></TableCell> <TableCell align="right">{inhalantYes}</TableCell>
     </TableRow>
     <TableRow>
      <TableCell><p>The number of users that said NO to using Inhalant in their lifetime</p></TableCell><TableCell align="right">{inhalantNo}</TableCell> 
      </TableRow>
      </>
      })
    }
    //return display
    return display;
    }
    //returns the over the counter numbeers
    const getOTCAT=()=>{
        let display=''
       console.log('in answer')
       //if form data doesn't exist, display loading
       if(!form){
         display=<p>loading</p>
       }
       //if form data exists, map through the answers
       if(form.length){
       form.map((item)=>{
        if(item.answers[127]){
          let answer=item.answers[127]
         //if answer to using over the counteer substances is yes, add one to OTCYes
          if(answer.answer==='Yes'){
            OTCYes++
          }
        //if answer to using over the counter substances is no or no answer, add one to OTCNo
          else{
            OTCNo++
          }
        }
        else{
          OTCNo++
        }
       console.log(OTCYes, OTCNo)
       //display returns two rows. One for users that selected Yes and one for users that selected No to using Over the counter substances in their lifetime.
       display= 
       <>
      <TableRow>
     <TableCell> <p>The number of users that said YES to using Over-the-Counter in their lifetime</p></TableCell> <TableCell align="right">{OTCYes}</TableCell>
     </TableRow>
     <TableRow>
      <TableCell><p>The number of users that said NO to using Over-the-Counter in their lifetime</p></TableCell><TableCell align="right">{OTCNo}</TableCell> 
      </TableRow>
      </>

       })
     }
     return display;
    }
    //get other substances numbers
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
          if(item.answers[128]){
            let answer=item.answers[128]
            if(answer.answer==='Yes'){
              otherYes++
            }
            else{
              otherNo++
            }
          }
          else{
            otherNo++
          }
        //console log results
        console.log(otherYes, otherNo)

        //define display returns two rows. One row for users that answer yes and one row for users that answer no to using other substances in their lifetime.
        otherDisplay= 
        <>
        <TableRow>
       <TableCell> <p>The number of users that said YES to using Other Substances in their lifetime</p></TableCell> <TableCell align="right">{ otherYes}</TableCell>
       </TableRow>
       <TableRow>
        <TableCell><p>The number of users that said NO to using Other Substances in their lifetime</p></TableCell><TableCell align="right">{otherNo}</TableCell> 
        </TableRow>
        </>
        })
      }
      //return display
      return otherDisplay;
    }
    //returns a card with a bar chart and a table with the numbers of all the drugs monitored in the assessment form.
    return(
      <Box mx='auto' width="75%" >
      <Card>
        <CardContent>
          <AllDrugsBar />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><h3>This bar chart shows all-time drug usage rates, by category, of YourPath assessment takers. Each category of drug shows the percentage of responders who indicated they had ingested the respective substance at some point in their life.</h3></TableCell><TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
          {getAlcoholAT()}
          {getBenzoAT()}
          {getCocaineAT()}
          {getHallucinogenAT()}
          {getHeroinAT()}
          {getInhalantAT()}
          {getMarijuanaAT()}
          {getMethAT()}
          {getNicotineAT()}
          {getOtherOpiodsAT()}\
          {getOtherSubsAT()} 
          {getOTCAT()} 
            </TableBody>
          </Table>
        </CardContent>
    </Card>
    </Box>
    )
        
}

export default AllDrugsAllTime;