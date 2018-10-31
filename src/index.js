import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

require('isomorphic-fetch')

const App = lazy(() => import('./App'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={'loading app...'}>
    <App />
  </Suspense>,
)

serviceWorker.unregister()
