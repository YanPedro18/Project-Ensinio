// eslint-disable-next-line no-unused-vars
import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './index.css'
//importando i18n
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const rootElement = document.getElementById('root');
//fazendo o i18n carregar o meu app com a props do i18n
createRoot(rootElement).render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);

