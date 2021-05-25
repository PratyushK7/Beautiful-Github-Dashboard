import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import loginImg from "../images/login.svg";
import handsDown from "../images/hands-down.svg";
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Wrapper>
      <div>
        <img src={loginImg} alt="github user" />
        <h3 className="text-gray-700 mt-6 font-bold text-2x1">
          Welcome! to Github Dashboard. <br />
          <span>
            Your whole profile summarised in form of Beautiful Charts 🥳
          </span>
        </h3>
        <h3 className="text-gray-700 font-bold">
          <div className="animate-bounce inline-block">👇</div>
          Click here
        </h3>
        <button
          className="inline-block px-5 py-2 rounded-lg shadow-lg text-white  hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          onClick={loginWithRedirect}
        >
          Login / Signup
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }

  span {
    color: #ec615b;
  }

  button {
    background-color: rgb(82, 34, 208, 0.8);
  }
`;
export default Login;
