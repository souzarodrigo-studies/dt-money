import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

// work only dev mode
import './server/mirageServer';


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
