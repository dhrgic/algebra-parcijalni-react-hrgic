import React from "react";
import PropTypes from "prop-types";
import "./Repositories.scss";

const Repositories = ({ repositoryName }) => {
  return (
    <div className="Repository">
      <p className="Repository-Content">{repositoryName}</p>
    </div>
  );
};

Repositories.propTypes = {
  repositoryName: PropTypes.string,
};

export default Repositories;
