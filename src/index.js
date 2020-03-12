import React from 'react';
import ReactDOM from 'react-dom';
import { GameProvider } from './components/GameProviderContext';

import App from './components/App';
//double check
//double check


const rootElement = document.getElementById('root');
//now when I call GameProvider, his children is App
ReactDOM.render(
<GameProvider>
    <App/>
    </GameProvider>, rootElement);
    