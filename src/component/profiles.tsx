import React from "react";
import { Link } from "react-router-dom";

const profiles = () => {
  const profiles = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {profiles.map((profile) => (
        <Link key={profile} to={`/profiles/${profile}`}>
          Profile {profile}
        </Link>
      ))}
    </div>
  );
};

export default profiles;
