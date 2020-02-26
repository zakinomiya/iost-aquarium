import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { accountSelector } from '../state/domains/accounts/selectors'


export default function Dashboard(): JSX.Element {
	const account = useSelector(accountSelector(''))

	return (
		<div >
			{JSON.stringify(account)}
		</div>
	)
}