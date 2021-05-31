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


function AllDrugsAllTime(){

  const useStyles = makeStyles({
    table: {
      width: "50%",
      margin: 'auto',
      marginBottom: '50px',
    },
  });
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
        <TableRow>
       <TableCell> <p>The number of users that said YES to using Nicotine in their lifetime</p></TableCell> <TableCell align="right">{ nicotineYes}</TableCell>
       </TableRow>
       <TableRow>
        <TableCell><p>The number of users that said NO to using Nicotine in their lifetime</p></TableCell><TableCell align="right">{nicotineNo}</TableCell> 
        </TableRow>
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
        <TableRow>
       <TableCell> <p>The number of users that said YES to using Marijuana in their lifetime</p></TableCell> <TableCell align="right">{marijuanaYes}</TableCell>
       </TableRow>
       <TableRow>
        <TableCell><p>The number of users that said NO to using Marijuana in their lifetime</p></TableCell><TableCell align="right">{marijuanaNo}</TableCell> 
        </TableRow>
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
        console.log(heroinYes, heroinNo)
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
        <TableRow>
       <TableCell> <p>The number of users that said YES to using Hallucinogen in their lifetime</p></TableCell> <TableCell align="right">{hallucinogenYes}</TableCell>
       </TableRow>
       <TableRow>
        <TableCell><p>The number of users that said NO to using Hallucinogen in their lifetime</p></TableCell><TableCell align="right">{hallucinogenNo}</TableCell> 
        </TableRow>
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
      <TableRow>
     <TableCell> <p>The number of users that said YES to using Inhalant in their lifetime</p></TableCell> <TableCell align="right">{inhalantYes}</TableCell>
     </TableRow>
     <TableRow>
      <TableCell><p>The number of users that said NO to using Inhalant in their lifetime</p></TableCell><TableCell align="right">{inhalantNo}</TableCell> 
      </TableRow>
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