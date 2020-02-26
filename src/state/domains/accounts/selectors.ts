import { Account } from './types'
import { State } from '../../store'
import { createSelector } from 'reselect'

export const pickIsLoaded = (state: State): boolean => state.accountsReducer.isLoaded
export const pickAccountList = (state: State): Account[] => state.accountsReducer.accountList

export const isLoadedSelector = createSelector(
	pickIsLoaded,
	isLoaded => isLoaded
)

// select account 
// when first loaded, return the account at index 0
export const accountSelector = (accountName: string) => 
	createSelector(
		pickAccountList,
		accountList => accountList.find(account => account.name === accountName) || accountList[0]
	) 

