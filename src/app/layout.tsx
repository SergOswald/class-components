"use client";

import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';

export const ThemeContext = React.createContext();

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}