import { IType } from "../enum/IType";

interface Transactions {
    id: number,
    title: string,
    amount: number,
    type: IType,
    category: string,
    createdAt: string,
}

type TransactionsInput = Omit<Transactions, 'id' | 'createdAt'>

export type { Transactions, TransactionsInput };