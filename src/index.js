import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'

import * as serviceWorker from './serviceWorker'

require('isomorphic-fetch')

const App = lazy(() => import('./App'))

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    line-height: 12pt;
    color: #171718;
    font-family: Verdana, Geneva, sans-serif;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={'loading app...'}>
    <GlobalStyle />
    <App />
  </Suspense>,
)

serviceWorker.unregister()
