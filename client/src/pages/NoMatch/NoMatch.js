import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import Jumbotron from "../../components/Jumbotron";

const NoMatch = () => (
  <Wrapper>
        <Jumbotron>
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Red Circle with Diagonal Line">
                🚫
            </span>
          </h1>
        </Jumbotron>  
  </Wrapper>
);

export default NoMatch;
