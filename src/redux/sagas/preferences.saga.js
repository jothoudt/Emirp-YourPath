import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* preferencesSaga(){
    yield takeEvery('FETCH_PREFERENCES', fetchPreferences);
    yield takeEvery('ADD_PREFERENCES', addPreferences);
    yield takeEvery('DELETE_CHART', deletePreferences)
}//end searchSaga

//to fetch recipes from 3rd party api that match the search
function* fetchPreferences(action){
    try{
        console.log('in fetch preferences', action.payload )
        const response=yield axios.get('/api/preferences/' + action.payload)
        yield put ({type:'SET_PREFERENCES', payload:response.data}); 
        }
    catch(error){ console.log('get results error', error);
    }
}//end fetchSearch

function* addPreferences(action){
    try{
        console.log('in add preferences', action.payload.id);
        const post=yield axios.post('/api/preferences/', action.payload);
        yield put ({type:'FETCH_PREFERENCES', payload:action.payload.id});
    }
    catch{
        console.log('add preferences error' )
    }
}

function* deletePreferences(action){
    try{
        console.log('in delete', action.payload.user_id)
       const response=yield axios.delete('/api/preferences/', {data: action.payload}) 
       yield put ({type:'FETCH_PREFERENCES', payload:action.payload.user_id});
    }
    catch(error){
        console.log('delete chart error', error)
    }
}

export default preferencesSaga;