import React, {useState}  from 'react'
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import { useState } from "react";
function Header() {
  const[closeicon,setCloseicon]=useState(false);
  return (
    <Container>
     <a>
      <img src="/images/logo.svg" alt=""/>
     </a>
     <Menu>
     <a href="#">Model S</a> 
     <a href="#">Model 3</a> 
     <a href="#">Model X</a> 
     <a href="#">Model Y</a> 
     </Menu>
     <RightMenu>
    <a href="#">Shop</a>
    <a href="#">Tesla Account</a>
    <CustomMenu onClick={()=>setCloseicon(true)}/>
     </RightMenu>
     <BurgerNav show={closeicon}>
      <CloseWrapper> 
      <CustomClose onClick={()=>setCloseicon(false)}/>
      </CloseWrapper>
      <li><a href="#"> Existing Inventory</a></li>
      <li><a href="#"> Used Inventory</a></li>
      <li><a href="#"> Trade-in</a></li>
      <li><a href="#"> Cybertruck</a></li>
      <li><a href="#"> Roadaster</a></li>
      <li><a href="#"> Existing Inventory</a></li>
      <li><a href="#"> Existing Inventory</a></li>
      <li><a href="#"> Existing Inventory</a></li>
     </BurgerNav>
    </Container>
  )
}

export default Header;
const Container=styled.div`
min-height:50px;
align-items:center;
justify-content: center;
justify-content:space-between;
display:flex;
position:fixed;
padding: 0 20px;
left:0;
right:0;
top:0;
z-index: 22;

`
const Menu=styled.div`
  display: flex;
  /* font-size:20px; */
  text-transform:uppercase;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex:1;
    a{
    padding:0 10px;
    flex-wrap:nowrap;

  }
  @media (max-width:768px) {
    display: none;
  }
`
const RightMenu=styled.div`
display: flex;
align-items: center;
 a{
    margin-right:10px;
    flex-wrap:nowrap;
    text-transform:uppercase;
    /* align-items: center;
    justify-content: center; */
    font-weight: 600;

  }
`
const CustomMenu=styled(MenuIcon)`
 cursor: pointer;
 `

 const BurgerNav=styled.div`
 position: fixed;
 background-color:white;
 top:0;
 bottom: 0;
 right:0;
 list-style:none;
 width:250px;
  padding: 20px;
  display: flex;
  flex-direction:column;
   text-align: start;
   transform: ${props=>props.show ? 'translateX(0)':'translateX(100%)'};
   transition: transform 0.2s;
   li{
    padding: 15px 0px;
    border-bottom:1px solid rgba(0,0,0,.2);
    opacity:300;
    
   }
   a{
    font-weight: 600;
   }
  

   

 `
 const CustomClose=styled(CloseIcon)`
  
 
 `
 const CloseWrapper=styled.div`
 display: flex;
 justify-content: flex-end;
 /* right:0; */
 `