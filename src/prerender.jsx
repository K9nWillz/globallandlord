import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

export function prerender() {
  return {
    html: renderToString(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    ),
  }
}
