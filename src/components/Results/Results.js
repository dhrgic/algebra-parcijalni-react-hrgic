import React, { useState } from "react";
import Repositories from "../Repositories/Repositories";
import UserInfo from "../UserInfo/UserInfo";
import PropTypes from "prop-types";
import { apiOriginUrl } from "../../api/api";

const Results = ({ username }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [repositoryList, setRepositoryList] = useState([]);

  return (
    <div className="Results">
      <UserInfo />
      <Repositories />
    </div>
  );
};

Results.propTypes = {
  username: PropTypes.string,
};

export default Results;
