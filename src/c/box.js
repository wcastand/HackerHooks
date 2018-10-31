import css from 'styled-components'

export default css('div')`
  display: flex;
  flex-direction: ${({ fd }) => (fd ? fd : 'row')};
  align-items: ${({ ai }) => (ai ? ai : 'flex-start')};
  justify-content: ${({ jc }) => (jc ? jc : 'flex-start')};
  flex-wrap: ${({ fw }) => (fw ? fw : 'wrap')};
  margin: ${({ margin }) => (margin ? margin : 'auto')};
  padding: ${({ padding }) => (padding ? padding : 'auto')};
`
