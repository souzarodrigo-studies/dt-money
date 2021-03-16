import {createContext, ReactNode, useEffect, useState} from 'react';
import {Transactions, TransactionsInput} from "../Model/Transaction";
import {api} from "../services/api";

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transactions[];
    createTransaction: (transaction: TransactionsInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transactions[]>([]);


    useEffect(() => {
        getTransactions();
    }, []);
    
    async function createTransaction(transactionInput: TransactionsInput) {
        await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        });

        getTransactions();
    }
    
    function getTransactions() {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }
    
    
    return (
        <TransactionsContext.Provider value={{
            transactions,
            createTransaction
        }}>
            { children }
        </TransactionsContext.Provider>
    );
}

