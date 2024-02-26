import React from "react";
import { useParams } from "react-router-dom";

const ProfilesPage = () => {
  const params = useParams<{ profileId: string }>();
  console.log(params);
  return <div>Profile Page: {params.profileId}</div>;
};

export default ProfilesPage;
