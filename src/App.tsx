// Importações vinda de instalações
import React from 'react';

// Importações locais do projeto
import { GlobalStyle } from './styles/global';
import { Header } from "./components/Header";
import {Dashboard} from "./components/Dashboard";


export function App() {
    return (
        <>
            <Header />
            <Dashboard />
            
            <GlobalStyle />
        </>
    );
}
