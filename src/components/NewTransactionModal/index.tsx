import ReactModal from "react-modal";
import React, {useState} from "react";

import {ActiveColor, Container, RadioBox, TransactionTypeContainer } from './styles';


import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import CloseImg from '../../assets/close.svg';

interface NewTransactionModalProps {
    onRequestClose: () => void;
    isOpen: boolean;
}

enum IType {
    deposit = 'deposit',
    withdrawn = 'withdrawn',
}

// http://reactcommunity.org/react-modal/accessibility/
ReactModal.setAppElement('#root');

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState<IType>(IType.deposit);
    
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
            
            <Container>
                <h2>Cadastrar transacao</h2>
                
                <input 
                    placeholder="Titulo"
                />
                
                <input
                    placeholder="Valor"
                    type="number"
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
                />
                
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </ReactModal>
    );
}