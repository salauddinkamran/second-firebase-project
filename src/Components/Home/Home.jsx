import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Home = () => {
  const {user} = use(AuthContext)
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-10">
        This is Home Page
      </h1>
      <p className="text-center">{user?.email}</p>
    </div>
  );
};

export default Home;
