import React from 'react'
import css from 'styled-components'

import Box from './box'
import Link, { CLink } from './link'

const Header = css('div')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 42px;
  padding: 2px;
  background-color: rgb(255, 102, 0);
  z-index: 99;
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
const Nav = css('ul')`
  display: flex;
  list-style: none;
  padding: 0px;
  margin: 0px;
  font-size: 12px;
`

const Separator = css('span')`
padding: 0 3.2pt;
::after {
  content: ' | ';
}
`

export default () => (
  <Header>
    <CLink to="/">
      <LogoContainer>
        <Logo src="https://news.ycombinator.com/y18.gif" />
      </LogoContainer>
    </CLink>
    <Box fd="column" jc="space-between" margin="2px 5px">
      <CLink to="news">
        <Title>Hacker News</Title>
      </CLink>
      <Nav>
        <Link name="new" to="newest" />
        <Separator />
        <Link name="comments" to="newcomments" />
        <Separator />
        <Link name="show" to="show" />
        <Separator />
        <Link name="ask" to="ask" />
        <Separator />
        <Link name="jobs" to="jobs" />
        <Separator />
        <Link name="submit" to="submit" />
      </Nav>
    </Box>
  </Header>
)
