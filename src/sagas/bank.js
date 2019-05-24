import { call, put, takeLatest } from 'redux-saga/effects';
import {
  BankActionTypes,
  getBankDetailFromIFSCSuccess,
  getBankDetailFromIFSCFailure,
} from '../actions/bank';

function fetchBankDetailRequest(ifsc) {
  return fetch(`https://ifsc.razorpay.com/${ifsc}`).then(res => {
    if (res.status >= 400) {
      throw new Error(res.statusText);
    }
    return res.json();
  }).then(data => data);
}
function* fetchBankDetail(action) {
  try {
    const detail = yield call(fetchBankDetailRequest, action.ifsc);
    yield put(getBankDetailFromIFSCSuccess(action.ifsc, detail));
  } catch (e) {
    console.log(16, action.ifsc, e.message);
    yield put(getBankDetailFromIFSCFailure(action.ifsc, e.message));
  }
}

export function* bankSaga() {
  yield takeLatest(BankActionTypes.IFSC_FETCH, fetchBankDetail);
}
