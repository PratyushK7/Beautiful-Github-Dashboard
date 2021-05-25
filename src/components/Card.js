import React from "react";
import { GithubContext } from "../context/context";
import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    twitter_username,
    bio,
    location,
  } = githubUser;

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name}></img>
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || "not_provided 🤷‍♀️"}</p>
        </div>
        <div class="flex justify-around">
          <span class="relative inline-flex rounded-md shadow-sm">
            <a
              href={html_url}
              type="button"
              class="inline-flex items-center px-4 py-2 border border-purple-400 text-base leading-6 font-medium rounded-md text-purple-900 bg-white hover:text-purple-700 focus:border-purple-300 transition ease-in-out duration-150"
            >
              Follow
            </a>
            <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
          </span>
        </div>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
        <p>
          <MdLocationOn></MdLocationOn> {location ? `${location}🌍` : "Earth🌍"}
        </p>
        {company && (
          <p>
            <MdBusiness></MdBusiness> {company}
          </p>
        )}
        {blog && (
          <p>
            <a href={`https://${blog}`}>
              <MdLink></MdLink> {blog}
            </a>
          </p>
        )}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  background: var(--clr-white);
  padding: 1.5rem 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  position: relative;
  &::before {
    content: "user";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background: var(--clr-white);
    color: var(--clr-grey-5);
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    text-transform: capitalize;
    padding: 0.5rem 1rem 0 1rem;
    letter-spacing: var(--spacing);
    font-size: 1rem;
  }
  header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 1rem;
    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }
    h4 {
      margin-bottom: 0.25rem;
    }
    p {
      margin-bottom: 0;
    }
    a {
      &:hover {
        background: #744ed9;
        color: #ffffff;
      }
    }
  }
  .bio {
    color: var(--clr-grey-3);
  }
  .links {
    p,
    a {
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 0.5rem;
        font-size: 1.3rem;
      }
    }
    a {
      color: var(--clr-primary-5);
      transition: var(--transition);
      svg {
        color: var(--clr-grey-5);
      }
      &:hover {
        color: var(--clr-primary-3);
      }
    }
  }
`;
export default Card;
