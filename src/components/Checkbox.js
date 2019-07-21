import React from 'React'
import styled from 'styled-components'

const CheckboxInput = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 1.5px ${props => (props.checked ? props.theme.color.primary : props.theme.borderColor)};
  position: relative;
  cursor: pointer;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 4px;
    right: 4px;
    bottom: 4px;
    left: 4px;
    border-radius: 50%;
    background-color: ${props => (props.checked ? props.theme.color.primary : 'transparent')};
  }
`

const Checkbox = ({ checked, onChange, className }) => (
  <CheckboxInput className={className} checked={checked} onClick={() => onChange(!checked)} />
)

export default Checkbox
