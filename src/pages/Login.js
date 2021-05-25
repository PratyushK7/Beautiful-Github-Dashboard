import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login.svg";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div className="container">
        <section className="section-center">
          <img src={loginImg} alt="Github User"></img>
          <button className="btn" onClick={loginWithRedirect}>
            Login / SignUP
          </button>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  .container {
    text-align: center;
  }
  img {
    width: 60rem;
    height: 50rem;
    margin-left: 25%;
  }
  h1 {
    margin-bottom: 1.5rem;
    color: #2c7aba;
  }
  button {
    position: relative;
    margin-bottom: 200rem;
    margin-left: 25%;
    margin-bottom: 20rem;
  }
`;
export default Login;
