import React from 'react'
import { unstable_createResource } from 'react-cache'
import styled from 'styled-components'

const fetchNews = id =>
  fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())

const newsRessource = unstable_createResource(fetchNews)

const News = styled('li')`
  margin: 2px 0;
  padding: 5px;
`

export default ({ id }) => {
  const news = newsRessource.read(id)
  return <News>{news.title}</News>
}
