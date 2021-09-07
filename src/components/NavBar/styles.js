import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  height: 50px;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  position: fixed;
  z-index: 5;
`

export const Link = styled(LinkRouter)`
  align-items: center;
  color: #888;
  display: inline-flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  text-decoration: none;

  &[aria-current] {
    color: #000;

    &:after {
      ${fadeIn({ time: '0.5s' })};
      content: '.';
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 30px;
    }
  }
`
