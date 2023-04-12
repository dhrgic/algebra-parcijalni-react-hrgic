import React from "react";
import PropTypes from "prop-types";

const UserInfo = ({ imgSrc, username, location }) => {
  return (
    <div className="UserInfo">
      <div className="UserInfo-Heading">
        <figure className="UserInfo-Figure">
          <img className="UserInfo-Image" src={imgSrc} alt={username} />
        </figure>
      </div>
      <p className="UserInfo-Location"> 📍{location}</p>
    </div>
  );
};

UserInfo.propTypes = {};

export default UserInfo;
