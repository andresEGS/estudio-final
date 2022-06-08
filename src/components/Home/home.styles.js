import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
`

export const Wrapper = styled.div`
  width: 99%;
  height: 95vh;
  margin: 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 40%;

  }
`

export const Section = styled.section`
  width: 400px;
  margin-top: -200px;

  h1 {
    width: 90px;
    padding-bottom: 30px;
    font-size: 40px;
    opacity: 0.8;
  }

  p {
    opacity: 0.5;
    padding-bottom: 30px;
  }

  /* button {
    padding: 5px;
    padding-left: 30px;
    padding-right: 30px;
    background: #29323d;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
  } */
`
export const NavLinkRouter = styled(NavLink)`
  padding: 5px;
  padding-left: 30px;
  padding-right: 30px;
  background: #29323d;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
`