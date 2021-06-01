import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* apiSaga(){
    yield takeLatest('FETCH_FORM', fetchAPI)
}//end searchSaga

//to fetch submission results from jotform api
function* fetchAPI(action){
    try{
        console.log('in fetch')
        const response=yield axios.get('/api/form/')
        yield put ({type:'SET_API_INFO', payload:response.data}); 
        }
    catch(error){ console.log('get results error', error);
    }
}//end fetch

export default apiSaga;