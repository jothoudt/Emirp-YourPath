import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* report1Saga(){
    yield takeLatest('FETCH_REPORT_1', fetchReport)
}//end searchSaga

//to fetch recipes from 3rd party api that match the search
function* fetchReport(action){
    try{
        console.log('in fetch')
        const response=yield axios.get('/api/report/')
        yield put ({type:'SET_REPORT_1', payload:response.data}); 
        }
    catch(error){ console.log('get results error', error);
    }
}//end fetchSearch

export default report1Saga;