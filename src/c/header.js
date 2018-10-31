import React from 'react'
import css from 'styled-components'

import Nav from './nav'
import Box from './box'

const Header = css('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 42px;
  padding: 2px;
  background-color: rgb(255, 102, 0);
`

const Title = css('h1')`
  font-size: 15px;
  font-weight: bold;
  color: #171718;
  padding: 0;
  margin: 0;
`

const LogoContainer = css('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 4px;
  height: 100%;
`

const Logo = css('img')`
  width: 20px;
  height: 20px;
  border: 1px solid white;
`

const Item = css('li')`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`

const Separator = css('span')`
  padding: 0 3.2pt;
  ::after {
    content: '|';
  }
`

export default () => (
  <Header>
    <LogoContainer>
      <Logo src="https://news.ycombinator.com/y18.gif" />
    </LogoContainer>
    <Box fd="column" jc="space-between" margin="2px 5px">
      <Title>Hacker News</Title>
      <Nav>
        <Item>new</Item> <Separator /> <Item>comments</Item> <Separator /> <Item>show</Item>{' '}
        <Separator /> <Item>ask</Item> <Separator />
        <Item>jobs</Item> <Separator /> <Item>submit</Item>
      </Nav>
    </Box>
  </Header>
)
