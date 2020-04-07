import React from "react";
import { HomePageContainer, Heading2 } from "./global";
import { Heading1 } from "../../common";
import BlockList from "./components/blockList";
export const HomePageSection = props => {
  return (
    <HomePageContainer>
      <Heading1>Welcome to Block App</Heading1>
      <section>
        <Heading2>See your list of blocks and transaction here</Heading2>
        
        <BlockList {...props}/>
      </section>
    </HomePageContainer>
  );
};
