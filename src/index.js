import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';

// Your code that uses Amplify
Amplify.configure({
    Auth: {
        // ID de tu Identity Pool de Cognito
        identityPoolId: "us-east-1:1fc9775e-fc1b-43d6-adfc-5cebcae585b1",
        region: "us-east-1",
    },
    Storage: {
        AWSS3: {
            // Nombre de tu bucket de S3
            bucket: "clasesgrabadasunitec2025",
            region: "us-east-1",
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
