import styled from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Item = styled.li`
  padding: 0 8px;
`
