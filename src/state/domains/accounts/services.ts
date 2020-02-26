import axios from 'axios'
import { Account } from './types'

export const fetchAccount = async (): Promise<Account[]> => {
	const res = await axios.get('/api/accounts')
	return res.data
}
											