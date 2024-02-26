import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      Not found Page
      <Link to="/">Home</Link>
      <a href="/">Home</a>
    </div>
  );
};

export default NotFoundPage;
