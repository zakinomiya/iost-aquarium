import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { fetchAccountAction } from './actions'
import { Account } from './types'

export type AccountState = {
  isLoaded: boolean
  accountList: Account[]
}


const initialState = {
	isLoaded: false,
	accountList: [] as Account[],
}

const fetchAccountStarted = (state: AccountState, _: unknown): AccountState => {
	return {
		...state,
		isLoaded: false,
		accountList: []
	}
}

const fetchAccountDone = (
	state: AccountState,
	action: ReturnType<typeof fetchAccountAction.done>
): AccountState => {
	return {
		...state,
		isLoaded: true,
		accountList: action.payload.result
	}
}


const reducer = reducerWithInitialState(initialState)
	.caseWithAction(fetchAccountAction.started, fetchAccountStarted)
	.caseWithAction(fetchAccountAction.done, fetchAccountDone)

export default reducer
