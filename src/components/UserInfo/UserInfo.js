import React from "react";
import PropTypes from "prop-types";
import "./UserInfo.scss";

const UserInfo = ({ imgSrc, username, location, bio }) => {
  return (
    <div className="UserInfo">
      <div className="UserInfo-Heading">
        <figure className="UserInfo-Figure">
          <img className="UserInfo-Image" src={imgSrc} alt={username} />
        </figure>
      </div>
      <div className="UserInfo-Info">
        <p className="UserInfo-Name">{username}</p>
        <p className="UserInfo-Location"> 📍{location}</p>
        <p className="UserInfo-Bio"> {bio}</p>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  imgSrc: PropTypes.string,
  username: PropTypes.string,
  location: PropTypes.string,
  bio: PropTypes.string,
};

export default UserInfo;
