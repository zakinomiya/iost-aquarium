import actionCreatorFactory from 'typescript-fsa'
import { Account } from './types'

type FetchAccountParams = Account[]

const actionCreator = actionCreatorFactory()

export const fetchAccountAction = actionCreator.async<
  void,
  FetchAccountParams,
  Error
>('FETCH_ACCOUNT')