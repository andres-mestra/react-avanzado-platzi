import React from 'react'
import ReactDOM from 'react-dom'
import { AuthProvider } from './context/AuthContext'
import { Apollo } from './apollo'
import { App } from './App'

ReactDOM.render(
  <AuthProvider>
    <Apollo>
      <App />
    </Apollo>
  </AuthProvider>,
  document.getElementById('root')
)
