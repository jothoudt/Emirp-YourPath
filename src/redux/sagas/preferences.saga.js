import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* preferencesSaga(){
    yield takeLatest('FETCH_PREFERENCES', fetchPreferences)
}//end searchSaga

//to fetch recipes from 3rd party api that match the search
function* fetchPreferences(action){
    try{
        console.log('in fetch preferences' )
        const response=yield axios.get('/api/preferences/')
        yield put ({type:'SET_PREFERENCES', payload:response.data}); 
        }
    catch(error){ console.log('get results error', error);
    }
}//end fetchSearch

export default preferencesSaga;