import React, { Suspense, lazy, useState } from 'react'
import styled from 'styled-components'

import FakeNews from './fakenews'
const News = lazy(() => import('./news'))

const List = styled('ul')`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`

const NewsList = ({ ids }) => {
  const [page, setPage] = useState(0)
  return (
    <div>
      <h1>News</h1>
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
