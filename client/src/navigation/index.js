import React from "react";
import ClientNavigation from "./ClientNavigation";
import AuthClientNavigation from "./ClientNavigation";
import ManagerNavigation from "./ManagerNavigation";

const Navigation = ({ authUser }) => {
  console.log("@Navigation - index - authUser", authUser);
  return <ClientNavigation />;
};

// export { ClientNavigation, AuthClientNavigation, ManagerNavigation };

export default Navigation;
