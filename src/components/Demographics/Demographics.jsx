import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Gender from '../Gender/Gender';
import JusticeInvolved from '../JusticeInvolved/JusticeInvolved';
import Race from '../Race/Race';
import SexualOrientation from '../SexualOrientation/SexualOrientation';
import './Demographics.css';
import {useHistory} from 'react-router-dom';
function Demographics(){

    const dispatch=useDispatch();
    const history=useHistory();
    
    let [component, setComponent]=useState('')

    const getComponent=()=>{
        switch(component){
            case 'Gender':
                return history.push('/gender')
                break;
            case 'Race':
                return history.push('/race')
                break;
            case 'SexualOrientation':
                return history.push('/sexual_orientation')
                break;
            case 'JusticeInvolved':
                return history.push('/justice_involved')
                break;
            default:
                return <></>
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