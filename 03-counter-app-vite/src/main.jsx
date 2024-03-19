import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import FirstApp from './FirstApp'
import HelloWorldApp from './HelloWorldApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp title="Hola, esta es la description" bestNumber={137}/>
        <HelloWorldApp/>
    </React.StrictMode>
)