import React from 'react'
import ReactDOM from 'react-dom'
import { Apollo } from './apollo'
import { App } from './App'

ReactDOM.render(
  <Apollo>
    <App />
  </Apollo>,
  document.getElementById('root')
)
