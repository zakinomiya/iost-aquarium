import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios'
import * as _ from 'lodash'

const AccountsList  = () => {
	const [accountList, setAccountList] = useState<string[]>([])

	useEffect(() => {
		const fetchAccount = async() => {
			const res: AxiosResponse<{accountList: string[]}> | void = await axios.get('http://localhost:3000/api/accounts')
				.catch(err => {
					console.log(err)
				})

			if(res && !_.isEmpty(res.data)){
				setAccountList(res.data.accountList)
			}
		}
		fetchAccount()
	}, [])

	return (
		<div>
			{ accountList.length > 0  && accountList.map(acc => <p key={acc}>{acc}</p>)}
		</div>
	)
}

export default AccountsList