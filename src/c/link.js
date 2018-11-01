import React from 'react'
import css from 'styled-components'
import { Link } from '@reach/router'

const Item = css('li')`
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
`

export const CLink = css(Link)`
text-decoration: none;
color: #232323;
`

const isActive = ({ isCurrent }) => ({ style: { color: isCurrent ? '#F1F1F1' : '#232323' } })

export default ({ to, name }) => (
  <Item>
    <CLink to={to} getProps={isActive}>
      {name}
    </CLink>
  </Item>
)
