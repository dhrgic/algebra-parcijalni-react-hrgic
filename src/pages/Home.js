import React, { useState } from "react";
import Input from "../components/Input/Input";
import UserInfo from "../components/UserInfo/UserInfo";
import Repositories from "../components/Repositories/Repositories";
import { getUser, getRepositories } from "../api/fetchRequests";
import { ErrorMessage, Results } from "../lib/styles/globalStyles";

const Home = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [repositoryArray, setRepositoryArray] = useState([]);
  const [userExists, setUserExists] = useState(true);

  const resetAll = () => {
    setUserExists(true);
    setUserInfo(null);
    setRepositoryArray([]);
  };

  const handleSubmit = async (user) => {
    try {
      const userApi = await getUser(user);
      const reposApi = await getRepositories(user);
      setUserInfo(userApi);
      setRepositoryArray(reposApi);
    } catch (error) {
      setUserExists(false);
      setUserInfo(null);
      setRepositoryArray([]);
    }
  };

  return (
    <>
      <Input handleSubmit={handleSubmit} handleReset={resetAll}></Input>
      {userExists ? (
        <Results>
          {userInfo === null ? (
            ""
          ) : (
            <UserInfo
              imgSrc={userInfo.avatar_url}
              username={userInfo.name}
              alt={userInfo.name}
              location={userInfo.location}
              bio={userInfo.bio}
            ></UserInfo>
          )}
          {repositoryArray.length === 0
            ? ""
            : repositoryArray.map((repository) => (
                <Repositories
                  key={repository.id}
                  repositoryName={repository.name}
                ></Repositories>
              ))}
        </Results>
      ) : (
        <ErrorMessage>
          There is no such user, press RESET and try again
        </ErrorMessage>
      )}
    </>
  );
};

export default Home;
