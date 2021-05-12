import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* careSaga(){
    yield takeLatest('FETCH_ASSESSMENT', fetchCare)
}//end searchSaga

//to fetch recipes from 3rd party api that match the search
function* fetchCare(action){
    try{
        console.log('in fetch')
        const response=yield axios.get('/api/care/')
        yield put ({type:'SET_CARE_INFO', payload:response.data}); 
        }
    catch(error){ console.log('get results error', error);
    }
}//end fetchSearch

export default careSaga;