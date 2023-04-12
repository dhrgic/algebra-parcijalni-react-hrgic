import React from "react";
import Repositories from "../Repositories/Repositories";
import UserInfo from "../UserInfo/UserInfo";

const Results = () => {
  return (
    <div className="Results">
      <UserInfo />
      <Repositories />
    </div>
  );
};

Results.propTypes = {};

export default Results;
