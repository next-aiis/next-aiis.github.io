import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ConfigProvider
      theme={
        {
          token: {
            colorPrimary: 'rgba(238, 123, 23, 1)',
            colorLink: 'rgba(238, 123, 23, 1)',
            colorLinkActive: 'rgba(238, 123, 23, 1)',
            colorLinkHover: 'rgba(238, 123, 23, 1)',
          },
        }
      }
    >
      <App />
    </ConfigProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
