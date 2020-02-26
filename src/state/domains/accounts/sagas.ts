import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchAccountAction } from './actions'
import { Account } from './types'
import { fetchAccount } from './services'

function* fetchAppsSaga(_: unknown) {
	try {
		const accountList: Account[] = yield call(fetchAccount)
		yield put(
			fetchAccountAction.done({
				result: accountList
			})
		)
	} catch (e) {
		// TODO: error handling
		yield put(fetchAccountAction.failed(e))
	}
}



const sagas = [
	takeEvery(fetchAccountAction.started, fetchAppsSaga),
]

export default sagas
