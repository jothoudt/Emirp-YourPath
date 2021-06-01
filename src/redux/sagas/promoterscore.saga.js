import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* PromoterScoreSaga(){
    yield takeLatest('FETCH_PROMOTER_SCORES', fetchPromoterScores)
}//end searchSaga

//to fetch network promoter scores from jotform api
function* fetchPromoterScores(action){
    try{
        console.log('in fetch promoter')
        const response=yield axios.get('/api/promoterscores/')
        yield put ({type:'SET_PROMOTER_SCORES', payload:response.data}); 
        }
    catch(error){ console.log('get results error', error);
    }
}//end fetchPromoter scores

export default PromoterScoreSaga;