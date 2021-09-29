import styled from 'styled-components'

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  display: block;
  font-weight: 700;
  text-align: center;
  height: 32px;
  width: 100%;
  &[disabled] {
    opacity: 0.3;
  }
`
