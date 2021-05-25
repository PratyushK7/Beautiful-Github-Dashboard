import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ErrorImage from "../images/Error.svg";

const Error = () => {
  React.useEffect(() => {
    document.title = "Error Page";
  }, []);

  return (
    <Wrapper>
      <div>
        <img src={ErrorImage}></img>
        <h3>Page cannot be found!</h3>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
    margin-bottom: 2rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
  img {
    width: 40rem;
    height: 40rem;
  }
`;
export default Error;
