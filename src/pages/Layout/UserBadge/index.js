import "./UserBadge.scss";

import React from "react";
import FallbackImage from "../../../assets/img/fallback.jpg";

export default function UserBadge(props) {
  const user = {
    name: "Alex",
    surname: "López",
    userName: "alopez",
    isAdmin: true,
    imageId: null
  };

  return (
    <div className="user-badge">
      <div className="user-badge-info">
        <span>
          {user.name} {user.surname}
        </span>
        <span>@{user.userName}</span>
      </div>
      <div className="user-badge-image">
        <img src={FallbackImage} alt="user" />
      </div>
    </div>
  );
}
