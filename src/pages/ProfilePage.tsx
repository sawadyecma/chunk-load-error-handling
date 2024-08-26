import React from "react";

export const ProfilePage = () => {
  const random = Math.random();
  if (random > 0.7) {
    throw new Error("Profile page has something wrong");
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Profile page</p>
    </div>
  );
};
