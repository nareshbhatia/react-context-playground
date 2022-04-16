import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ViewStateContextProvider } from './contexts';
import './styles/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ViewStateContextProvider>
      <App />
    </ViewStateContextProvider>
  </React.StrictMode>
);
