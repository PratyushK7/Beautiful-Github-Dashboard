import React, { useState, useEffect } from "react";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [requests, setRequests] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });

  const [githubUser, setGithubUser] = useState();
  const [repos, setRepos] = useState([]);
  const [followers, setFollowers] = useState([]);

  //search Github User
  const searchGithubUser = async (user) => {
    setLoading(true);
    toggleError();

    const response = await axios(`https://api.github.com/users/${user}`).catch(
      (err) => console.log(err)
    );

    if (response) {
      setGithubUser(response.data);
      const { repos_url, followers_url } = response.data;

      //repos
      const fetchRepos = axios(`${repos_url}?per_page=100`);

      //followers
      const fetchFollowers = axios(`${followers_url}?per_page=100`);

      await Promise.allSettled([fetchRepos, fetchFollowers])
        .then((results) => {
          const [repos, followers] = results;
          const status = "fulfilled";

          if (repos.status === status) setRepos(repos.value.data);
          if (followers.status === status) setFollowers(followers.value.data);
        })
        .catch((err) => console.log(err));
    } else {
      toggleError(true, "There is no user with this username 😏 ");
    }
    checkRequests();
    setLoading(false);
  };

  //check requests
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(
        ({
          data: {
            rate: { remaining },
          },
        }) => {
          setRequests(remaining);
          if (remaining === 0) {
            toggleError(true, "Sorry, Hourly requests limit exceeded 😔");
          }
        }
      )
      .catch((err) => console.log(err));
  };

  //toggle Error
  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };

  //fetch remaining requests
  useEffect(() => {
    if (!githubUser) searchGithubUser("PratyushK7");
    checkRequests();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
