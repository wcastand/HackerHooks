import React, { Suspense, lazy, useState } from 'react'
import { unstable_createResource } from 'react-cache'
import styled from 'styled-components'

import FakeNews from '../c/fakenews'
const News = lazy(() => import('../c/news'))

const List = styled('ul')`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`

const fetchIds = id =>
  fetch(`https://hacker-news.firebaseio.com/v0/newstories.json`).then(res => res.json())

const newsRessource = unstable_createResource(fetchIds)

const NewsList = () => {
  const ids = newsRessource.read()
  const [page, setPage] = useState(0)
  return (
    <div>
      <List>
        <Suspense
          fallback={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
            <FakeNews key={i} />
          ))}
        >
          {ids.slice(page, page + 10).map(id => (
            <News key={`news_${id}`} id={id} />
          ))}
        </Suspense>
      </List>
      <button onClick={() => setPage((page - 10 + ids.length) % ids.length)}>Prev</button>
      <button onClick={() => setPage((page + 10) % ids.length)}>Next</button>
    </div>
  )
}

export default NewsList
