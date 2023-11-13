import { Request, Response } from "express";
import { Account } from "../types";
import { CRUD } from "../crud";

export const createAccount = (req: Request, res: Response) => {
   
    let status = 200;
    let message = "Ação concluida com sucesso"
   
    try {

        const { name, cpf, birthDate } = req.body
        
        if (!name || !cpf || !birthDate) {
            status = 422;
            message =
                "Você precida informar por query : name, cpf, birthDate"

            throw new Error();

        }

        const newAccount: Account = {
            name,
            cpf,
            birthDate,
            balance: 0,
            transactions: []
        }

        CRUD.createAccount('src/account.json', newAccount)


        res.send(message).status(status).end()

    } catch (error) {

        res.send(message).status(status).end()

    }
}