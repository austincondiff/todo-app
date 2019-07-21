import styled from 'styled-components'

const Button = styled.button`
  font-size: ${props => (props.size === 'sm' ? 14 : 16)}px;
  background-color: ${props =>
    props.primary
      ? props.type === 'danger'
        ? 'red'
        : props.type === 'success'
        ? 'green'
        : props.theme.color.primary
      : props.theme.actionBackgroundColor};
  color: ${props =>
    props.primary ? 'white' : props.type === 'danger' ? 'red' : props.type === 'success' ? 'green' : props.theme.color.primary};
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 100px;
  border: none;
  padding: 0.5em 1.25em;
  letter-spacing: 0.25px;
  outline: none;
`

export default Button
