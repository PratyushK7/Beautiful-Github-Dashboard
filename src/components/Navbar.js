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
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>login</button>
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
    border-radius: 5px;
    border-color: transparent;
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    background: var(--clr-primary-5);
    color: var(--clr-white);
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      background: var(--clr-primary-8);
      color: var(--clr-primary-1);
    }
  }
`;

export default Navbar;
