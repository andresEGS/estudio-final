import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  /* background: green; */
  /* height: 100vh; */
  /* height: 100%; */
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
`

export const Header = styled.header`
  /* background: blue; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex: 1; */
  margin-top: 10px;

  img {
    /* background: blue; */
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
  }
`

export const Wrapper = styled.div`
  /* background: red; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */

  object-fit: cover;
  flex: 8;

  h1 {
    font-size: 40px;
    padding-bottom: 30px;
  }

  p {
    padding-bottom: 30px;
  }
`

export const Texts = styled.div`
  /* background: yellow; */
  flex: 6.5;
  display: flex;
  position: relative;
  min-height: 450px;

  #principal {
    margin-top: 80px;
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: start;
    /* align-items: flex-end; */
  }

  div {
    margin-right: 50px;
    padding-left: 50px;
    padding-bottom: 50px;
    width: 50%;
  }

  img {
    /* flex: 1; */
    /* width: 30%; */
    width: 500px;
    object-fit: cover;
    margin-right: 300px;
    position: absolute;
    right: -100px;
    top: -10px;
  }

  button {
    /* margin-left: 15px;
    padding-left: 30px;
    padding-right: 30px;
    background: #29323d;
    color: #fff;
    text-transform: uppercase; */

    padding: 10px;
    padding-left: 30px;
    padding-right: 30px;
    background: #29323d;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;

    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`

// export const NavLinkRouter = styled(NavLink)`
//   padding: 5px;
//   padding-left: 30px;
//   padding-right: 30px;
//   background: #29323d;
//   color: #fff;
//   text-transform: uppercase;
//   font-weight: 600;
// `

export const Subscribe = styled.div`
  /* background: grey; */
  background: rgb(237, 240, 244);
  flex: 3.5;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 15px;
  /* height: 250px; */

  h1 {
    margin-top: 60px;
  }

  input {
    margin-bottom: 15px;
    /* padding: 10px; */
    border-radius: 5px;
    font-weight: 600;
    padding: 5px;
    border: none;
    /* background: unset; */
    /* background: none; */
    /* background: #edf0f4; */
    /* background: #29323d; */

    color: rgb(255, 255, 255);
    font-family: 'Open Sans', serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: center;
    text-decoration: none;
    /* text-transform: uppercase;  */
    vertical-align: middle;
    /* width: 113px; */
    height: 40px;
    padding: 0px 10px;
    min-width: 1px;
    min-height: 1px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    display: table-cell;
    word-break: break-word;
  }

  input[type='email'] {
    /* border: 1xp solid #000; */
    /* opacity: 1; */
    /* background-color: rgb(159, 175, 193); */
    /* border: 1px solid rgb(159, 175, 193); */
    color: rgb(159, 175, 193);
    font-family: 'Open Sans', serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0px;
    text-align: left;
    text-decoration: none;
    vertical-align: middle;
    width: 253px;
    height: 42px;
    padding: 0px 5px;
    min-width: 1px;
    min-height: 1px;
    white-space: pre;
    overflow-wrap: break-word;
    display: table-cell;
    word-break: break-word;

    /* font-size: 13px;
    text-align: left;
    font-style: normal;
    color: rgb(159, 175, 193); */

    padding-left: 15px;
  }

  input[type='submit'] {
    margin-left: 10px;
    padding-left: 30px;
    padding-right: 30px;
    background: #29323d;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
  }

  form {
    margin-bottom: 60px;
  }
`

export const Footer = styled.footer`
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  /* flex: 1; */
  /* color: black; */
`
