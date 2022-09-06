import React from 'react';
import styled from "styled-components";
import Section from './Section';
function Home() {
    return (
        <Container>
             <Section
              title="Model S"
              description="Order Online for touchless Delivery"
              leftButton="Custom Order"
              rightButton="Existing Inventory"
              backgroundImg="model-s.jpg"/>
            <Section
            title="Model X"
            description="Order Online for touchless Delivery"
            leftButton="Custom Order"
            rightButton="Existing Inventory"
            backgroundImg="model-x.jpg"
            />
            <Section
            title="Model Y"
            description="Order Online for touchless Delivery"
            leftButton="Custom Order"
            rightButton="Existing Inventory"
            backgroundImg="model-y.jpg"
            />
            <Section
            title="Model 3"
            description="Order Online for touchless Delivery"
            leftButton="Custom Order"
            rightButton="Existing Inventory"
            backgroundImg="model-3.jpg"
            />
            <Section
            title="Solar Pannels"
            description="Lowest Cost Solar Panels in America"
            leftButton="Order Now"
            rightButton="Learn More"
            backgroundImg="solar-panel.jpg"
            />
            <Section
            title="Solar Roof"
            description="Lowest Cost Solar Panels in America"
            leftButton="Order Now"
            rightButton="Learn More"
            backgroundImg="solar-roof.jpg"
            />
            <Section
            title="Acessories"
            description="Lowest Cost Solar Panels in America"
            backgroundImg="accessories.jpg"
            leftButton="Shop Now"
            rightButton=""
             
            />
             
        </Container>
    )
}
export default Home;

const Container=styled.div`

      height:100%;
      width:100%;

`