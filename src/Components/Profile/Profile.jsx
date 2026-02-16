import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Profile = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-10">
        Thsi is profile page this page is private
      </h1>
      <p className="mt-10 text-center text-lg font-semibold">{user.email}</p>
    </div>
  );
};

export default Profile;
