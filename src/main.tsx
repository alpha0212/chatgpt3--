import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Global } from '@emotion/react';
import { globalStyle } from './styles/global';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Global  styles={globalStyle}/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
