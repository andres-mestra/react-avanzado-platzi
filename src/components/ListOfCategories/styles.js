import styled, { css } from 'styled-components'

export const List = styled.ul`
  display: flex;
  padding: 0 20px;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.fixed &&
    css`
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0 0.3);
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      right: 0;
      left: 0;
      top: -20px;
      transform: scale(0.5);
      z-index: 1;
    `}
`

export const Item = styled.li`
  padding: 0 8px;
`
