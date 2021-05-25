import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const isUser = isAuthenticated && user;
  return (
    <Wrapper>
      {isUser && user.picture && <img src={user.picture} alt={user.name}></img>}

      {isUser && user.name && (
        <h4>
          Welcome! <strong>{user.name}</strong> 😉
        </h4>
      )}

      {isUser ? (
        <button
          className="inline-block px-3 py-2 rounded-lg shadow-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout
        </button>
      ) : (
        <button
          className="inline-block rounded-lg shadow-lg text-white  hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          onClick={loginWithRedirect}
        >
          Login
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background-color: rgb(82, 34, 208, 0.8);
    &:hover {
      background-color: rgb(225, 29, 72);
    }
  }
`;

export default Navbar;
