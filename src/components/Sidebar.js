import React from 'react'
import styled from 'styled-components'

const SidebarWrap = styled.div`
  width: 280px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.alternateBackgroundColor};
  padding: 32px;
`
const SidebarTitle = styled.h1`
  margin: 0;
  color: ${props => props.theme.textColor};
`

const Sidebar = ({ darkMode, onModeChange }) => {
  return (
    <SidebarWrap>
      <SidebarTitle>To do lists</SidebarTitle>
      <button onClick={onModeChange}>{darkMode ? 'Dark' : 'Light'} Mode</button>
    </SidebarWrap>
  )
}

export default Sidebar
