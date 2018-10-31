import React, { Suspense, lazy } from 'react'
import { unstable_createResource } from 'react-cache'

import Header from './c/header'

const NewsList = lazy(() => import('./c/newslist'))

const fetchIds = id =>
  fetch(`https://hacker-news.firebaseio.com/v0/newstories.json`).then(res => res.json())

const newsRessource = unstable_createResource(fetchIds)

const App = props => {
  const ids = newsRessource.read()
  return (
    <Suspense fallback={'loading App...'}>
      <Header />
      <NewsList ids={ids} />
    </Suspense>
  )
}

export default App
