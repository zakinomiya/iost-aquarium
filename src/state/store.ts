import { all } from 'redux-saga/effects'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducers, sagas } from './domains'


const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers(reducers)

const configureStore = () => {
	const store = createStore(
		rootReducer,
		composeWithDevTools(
			applyMiddleware(sagaMiddleware)
		)
	)

	sagaMiddleware.run(function*() {
		yield all([...sagas])
	})

	return store
}

export type State = ReturnType<typeof rootReducer>

export default configureStore
