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
const SidebarItemWrap = styled.div`
  position: relative;
  margin-left: -32px;
  margin-right: -32px;
`
const DeleteListButton = styled.button`
  position: absolute;
  top: 50%;
  right: 32px;
  transform: translateY(-50%);
  background-color: transparent;
  color: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  cursor: pointer;
  transition: 0.25s;
  ${SidebarItemWrap}:hover & {
    color: ${props => props.theme.borderColor};
  }
  ${SidebarItemWrap}:hover &:hover {
    color: ${props => props.theme.color.danger};
  }
`

const Sidebar = ({ darkMode, onModeChange, todoLists, onListChange, onAddTodoList, onDeleteTodoList, activeTodoListId }) => {
  return (
    <SidebarWrap>
      <SidebarTitle>To do lists</SidebarTitle>
      <SidebarItems>
        {todoLists.map(list => (
          <SidebarItemWrap key={list.id}>
            <SidebarItem active={list.id === activeTodoListId} onClick={() => onListChange(list.id)}>
              {list.name}
            </SidebarItem>
            <DeleteListButton onClick={() => onDeleteTodoList(list.id)}>×</DeleteListButton>
          </SidebarItemWrap>
        ))}
      </SidebarItems>
      <AddButton onClick={onAddTodoList}>+</AddButton>
      <SidebarItemWrap>
        <SidebarItem onClick={onModeChange}>
          <ToggleLabel>Dark Mode</ToggleLabel>
          <ToggleSwitch onChange={onModeChange} checked={darkMode} />
        </SidebarItem>
      </SidebarItemWrap>
    </SidebarWrap>
  )
}

export default Sidebar
