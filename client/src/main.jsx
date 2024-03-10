import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountProvider from './context/AccountProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AccountProvider>
    <App />
    <ToastContainer
      autoClose={2000}
      theme="light"
      closeOnClick
      newestOnTop={false}
    />
  </AccountProvider>,
)
