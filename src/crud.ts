import fs from 'fs'
import { Account } from './types'

export const CRUD = {
    accounts: JSON.parse(
        fs.readFileSync("src/account.json", 'utf-8')
    ),
    createAccount(path: string, data: Account) {

        this.accounts.push(data)
        fs.writeFileSync(path, JSON.stringify(
            this.accounts, null, 2
        ))
    },
    updateAccount() { },
    deleteAccount() { },
}