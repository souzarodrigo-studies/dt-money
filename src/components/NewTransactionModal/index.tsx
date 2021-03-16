import ReactModal from "react-modal";
import React, {FormEvent, useContext, useState} from "react";

import {ActiveColor, Container, RadioBox, TransactionTypeContainer} from './styles';


import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import CloseImg from '../../assets/close.svg';
import {IType} from "../../enum/IType";
import { useTransactions } from "../../hooks/useTransactions";

interface NewTransactionModalProps {
    onRequestClose: () => void;
    isOpen: boolean;
}

// http://reactcommunity.org/react-modal/accessibility/
ReactModal.setAppElement('#root');

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useTransactions();
    
    const [type, setType] = useState<IType>(IType.deposit);
    const [title, setTitle] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    
    
    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();
        
        await createTransaction({
            title,
            amount,
            category,
            type
        });
        
        setCategory('');
        setTitle('');
        setType(IType.deposit);
        setAmount(0);
        onRequestClose();
    }
    
    return (
        <ReactModal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={CloseImg} alt="Close" />
            </button>
            
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transacao</h2>
                
                <input 
                    placeholder="Titulo"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                
                <input
                    placeholder="Valor"
                    type="number"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />
                
                <TransactionTypeContainer>
                    
                    <RadioBox 
                        type="button"
                        onClick={() => { setType(IType.deposit) }}
                        isActive={type === IType.deposit}
                        activeColor={ActiveColor.green}
                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType(IType.withdrawn) }}
                        isActive={type === IType.withdrawn}
                        activeColor={ActiveColor.red}
                    >
                        <img src={outcomeImg} alt="Saida"/>
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </ReactModal>
    );
}