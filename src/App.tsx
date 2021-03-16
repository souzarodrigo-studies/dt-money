// Importações vinda de instalações
import React, { useState } from 'react';

// Importações locais do projeto
import { GlobalStyle } from './styles/global';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionProvider } from './hooks/useTransactions';

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState<boolean>(false);
    
    
    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }
    
    
    return (
        <TransactionProvider>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
            <Dashboard />

            <NewTransactionModal 
                onRequestClose={handleCloseNewTransactionModal} 
                isOpen={isNewTransactionModalOpen} 
            />
            
            <GlobalStyle />
        </TransactionProvider>
    );
}
