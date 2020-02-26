import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import { Account } from '../../state/domains/accounts/types'

export default async (req: NextApiRequest, res: NextApiResponse) => {

	if(req.method === 'GET'){
		const accountFileList: string[] = await new Promise((resolve, reject) => {
			fs.readdir('./.iwallet/local', (err, data) => {
				if(err) reject(err)
				resolve(data)  
			})
		})
        
		if(!accountFileList) return res.status(200).json({ message: 'no accounts in the directory!' })

		const promises: Promise<Account>[] = []

		accountFileList.forEach(accountJSONFile => {
			promises.push(new Promise((resolve, reject) => {
				fs.readFile(`./.iwallet/local/${accountJSONFile}`, (err, data) => {
					if(err) reject(err)

					if(!data) {
						resolve()
						return
					}

					resolve(JSON.parse(data.toString()))  
				})
			}))
		})

		const accounts = await Promise.all(promises)
    
		res.status(200).json(accounts)
	}
}