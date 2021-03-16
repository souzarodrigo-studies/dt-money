import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {Transactions, TransactionsInput} from "../models/Transaction";
import {api} from "../services/api";

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transactions[];
    createTransaction: (transaction: TransactionsInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transactions[]>([]);


    useEffect(() => {
        getTransactions();
    }, []);
    
    async function createTransaction(transactionInput: TransactionsInput) {
        const response = await api.post('/transactions', transactionInput);

        const { transaction } = response.data;
        
        setTransactions([
            ...transactions,
            transaction
        ]);
        
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

export function useTransactions() {
    return useContext(TransactionsContext);
}
