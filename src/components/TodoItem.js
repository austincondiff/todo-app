import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Checkbox from './Checkbox'

const ItemWrap = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  overflow: hidden;
`
const ItemCheckbox = styled(Checkbox)`
  margin-right: 12px;
`
const ItemInput = styled.input.attrs({ type: 'text' })`
  border: none;
  flex: 1;
  font-size: 18px;
  outline: none;
  padding: 16px 0;
  background-color: transparent;
  color: ${props => props.theme.textColor};
`
const ItemButton = styled(Button)`
  align-self: stretch;
  border-radius: 0;
  transform: translateX(100%);
  transition: 0.25s;
  ${ItemWrap}:hover & {
    transform: translateX(0%);
  }
`

const TodoItem = ({ text, done, onTextChange, onStatusChange, onDelete, addNewItem }) => (
  <ItemWrap>
    <ItemCheckbox onChange={checked => onStatusChange(checked)} checked={done} />
    <ItemInput
      onKeyPress={e => e.key === 'Enter' && addNewItem()}
      type="text"
      onChange={e => onTextChange(e.target.value)}
      value={text}
      autoFocus
    />
    <ItemButton size="sm" primary type="danger" onClick={onDelete}>
      Delete
    </ItemButton>
  </ItemWrap>
)

export default TodoItem
