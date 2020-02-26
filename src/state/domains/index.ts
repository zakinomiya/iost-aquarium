import accounts from './accounts'

export const reducers = {
	accountsReducer: accounts.reducers,
}

export const sagas = [
	...accounts.sagas,
]
