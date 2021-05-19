import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Gender from '../Gender/Gender';
import JusticeInvolved from '../JusticeInvolved/JusticeInvolved';
import Race from '../Race/Race';
import SexualOrientation from '../SexualOrientation/SexualOrientation';
import './Demographics.css';

function Demographics(){

    const dispatch=useDispatch();
    
    let [component, setComponent]=useState('')

    const getComponent=()=>{
        switch(component){
            case 'Gender':
                return <Gender />
                break;
            case 'Race':
                return <Race />
                break;
            case 'SexualOrientation':
                return <SexualOrientation />
                break;
            case 'JusticeInvolved':
                return <JusticeInvolved />
                break;
            default:
                return <h2>Select a chart.</h2>
        }
    }

    return(
        <div>
          <div className="page-title">
              <h1>Demographics</h1>
          </div>
          <div className="select-demographic">
              <select className="demographic-dropdown" name="Demographic Information" onChange={(event)=>setComponent(event.target.value)}>
                  <option>Select a Chart</option>
                  <option value="Gender">Gender</option>
                  <option value="JusticeInvolved">Justice Involved</option>
                  <option value="Race">Race</option>
                  <option value="SexualOrientation">Sexual Orientation</option>
              </select>
          </div>
          <div>
            {getComponent()}
          </div>
        </div>
    )
}

export default Demographics;