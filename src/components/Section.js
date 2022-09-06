import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section({title,description,leftButton,rightButton,backgroundImg}) {
    return (
        <Wrap bgImg={backgroundImg}>
            <Fade bottom> 
            <Item> 
            <h1>{title}</h1>
            <p>{description}</p>
            </Item>
            </Fade>
            <Button>
             <Fade bottom> 
            <ButtonGroup>
                <LeftButton>
                 {leftButton}
                </LeftButton>
                {rightButton&& 
                 <RightButton>
                {rightButton}
                </RightButton>
                }
                
            </ButtonGroup>
            </Fade>
            <Arrow src="/images/down-arrow.svg"/>
            </Button>
              
        </Wrap>
    )
}

export default Section
const Wrap= styled.div`
width: 100vw;
height: 100vh;
 /* background-size:contain; */
 background-position:center;
text-align:center; 
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
 align-items: center;
 background-image:${props=>`url("/images/${props.bgImg}")`};
 background-position: center;
 background-size: cover;
 
`
const Item=styled.div`
 padding-top:15vh;
 text-align:center;
`
const ButtonGroup=styled.div`
 /* margin-left:43%; */
 /* margin-top:60vh; */
 margin-bottom: 30px;
 display:flex;
 @media (max-width: 800px) {
    flex-direction:column;
    
 }

 
`
const LeftButton=styled.div`
background-color:black;
 height:30px;
 width:200px;
 display:flex;
 border-radius:20px;
 justify-content: center;
 align-items:center;
 opacity: 0.80;
 text-transform:uppercase;
  font-size: 13px;
  color:white;
  cursor:pointer;
  margin:5px;
`

const RightButton=styled(LeftButton)`
background-color:white;
color:black;
`
const Arrow=styled.img`
 margin-top:20px;
height:40px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;

`
const Button=styled.div`
`