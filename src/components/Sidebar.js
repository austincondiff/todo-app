import React from 'react'
import styled from 'styled-components'

import ToggleSwitch from './ToggleSwitch'
import Button from './Button'

const SidebarWrap = styled.div`
  width: 280px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: ${props => props.theme.alternateBackgroundColor};
  padding: 32px;
  display: flex;
  flex-direction: column;
`
const SidebarTitle = styled.h1`
  margin: 0;
  margin-bottom: 16px;
  color: ${props => props.theme.textColor};
`
const SidebarItems = styled.div`
  flex: 1;
`
const SidebarItem = styled.div`
  background-color: ${props => (props.active ? props.theme.actionBackgroundColor : 'transparent')};
  margin-left: -32px;
  margin-right: -32px;
  padding: 12px 32px;
  display: flex;
  align-items: center;
  cursor: pointer;
`
const AddButton = styled(Button)`
  position: absolute;
  top: 32px;
  right: 32px;
  padding: 0px 9px 5px 9px;
  font-size: 32px;
  line-height: 1;
`
const ToggleLabel = styled.span`
  flex: 1;
  cursor: pointer;
`

const Sidebar = ({ darkMode, onModeChange, todoLists, onListChange, onAddTodoList, activeTodoListId }) => {
  return (
    <SidebarWrap>
      <SidebarTitle>To do lists</SidebarTitle>
      <SidebarItems>
        {todoLists.map(list => (
          <SidebarItem active={list.id === activeTodoListId} onClick={() => onListChange(list.id)}>
            {list.name}
          </SidebarItem>
        ))}
      </SidebarItems>
      <AddButton onClick={onAddTodoList}>+</AddButton>
      <SidebarItem>
        <ToggleLabel onClick={onModeChange}>Dark Mode</ToggleLabel>
        <ToggleSwitch onChange={onModeChange} checked={darkMode} />
      </SidebarItem>
    </SidebarWrap>
  )
}

export default Sidebar
