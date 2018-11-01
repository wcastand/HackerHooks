import React from 'react'
import css from 'styled-components'

import Box from '../c/box'

const Container = css(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

const Text = css('span')`
  font-weight: bold;
`

export default () => (
  <Container jc="center" ai="center">
    <Text>Newest</Text>
  </Container>
)
