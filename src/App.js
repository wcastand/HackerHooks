import React, { Suspense, lazy } from 'react'
import { Router } from '@reach/router'
import css from 'styled-components'

import Header from './c/header'

const Ask = lazy(() => import('./pages/ask'))
const Jobs = lazy(() => import('./pages/jobs'))
const NewComments = lazy(() => import('./pages/newcomments'))
const Newest = lazy(() => import('./pages/newest'))
const News = lazy(() => import('./pages/news'))
const NotFound = lazy(() => import('./pages/notfound'))
const Show = lazy(() => import('./pages/show'))
const Submit = lazy(() => import('./pages/submit'))

const Container = css('div')`
  min-height: calc(100vh - 42px);
  margin-top: 42px;
  background-color: rgb(246, 246, 239);
`

const App = props => (
  <Suspense fallback={'loading App...'}>
    <Header />
    <Container>
      <Router>
        <News path="/" />
        <News path="news" />
        <Newest path="newest" />
        <NewComments path="newcomments" />
        <Show path="show" />
        <Ask path="ask" />
        <Jobs path="jobs" />
        <Submit path="submit" />
        <NotFound default />
      </Router>
    </Container>
  </Suspense>
)

export default App
