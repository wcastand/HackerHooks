import styled from 'styled-components'

export default styled('li')`
  flex: 1;
  height: 26px;
  width: ${() => Math.random() * (500 - 150) + 150}px;
  margin: 2px 0;
  padding: 5px;
  background-color: #f1f1f1;
`
