import React from 'React'
import styled from 'styled-components'

const ToggleSwitchInput = styled.div`
  width: 52px;
  height: 32px;
  border-radius: 100px;
  box-shadow: inset 0 0 0 1.5px ${props => (props.checked ? 'transparent' : props.theme.borderColor)};
  position: relative;
  background-color: ${props => (props.checked ? props.theme.color.success : 'rgba(255,255,255,0.15)')};
  transition: 0.25s;
  cursor: pointer;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: ${props => (props.checked ? 22 : 2)}px;
    top: 2px;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    background-color: #ffffff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    transition: 0.25s;
  }
`

const ToggleSwitch = ({ checked, onChange, className }) => (
  <ToggleSwitchInput className={className} checked={checked} onClick={() => onChange(!checked)} />
)

export default ToggleSwitch
