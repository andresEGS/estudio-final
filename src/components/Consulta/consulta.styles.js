import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;

  h1 {
    font-size: 40px;
    opacity: 0.8;
  }

  input {
    margin-bottom: 15px;
    padding: 5px;
    border-radius: 10px;
    font-weight: 600;
    padding: 5px;
  }

  input[type='submit'] {
    margin-left: 15px;
    padding-left: 30px;
    padding-right: 30px;
    background: #29323d;
    color: #fff;
    text-transform: uppercase;
  }
`

export const Header = styled.header`
  width: 100%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const Nav = styled.nav`
  padding-top: 25px;
  width: 80%;
  margin: 0 auto;
`

export const Section = styled.section`
  flex: auto;
  display: flex;
  /* background: green; */
  /* border: 2px solid #000; */
  height: 100%;
  font-size: 25px;

  article {
    flex: 1;
    /* border: 2px solid #000; */
    /* background: blue; */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      /* margin: 0 auto; */
      width: 50%;
    }

    h2 {
      display: inline;
    }

    /* span {} */
  }
`
