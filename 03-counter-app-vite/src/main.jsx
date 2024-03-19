import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './FirstApp'
import HelloWorldApp from './HelloWorldApp';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <App/>
        <HelloWorldApp/>
    </React.StrictMode>
)