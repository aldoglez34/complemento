import React from "react";
import ClientNavigation from "./ClientNavigation";
import AuthClientNavigation from "./ClientNavigation";
import ManagerNavigation from "./ManagerNavigation";

const Navigation = ({ authUser }) => {
  return <ClientNavigation />;
};

// export { ClientNavigation, AuthClientNavigation, ManagerNavigation };

export default Navigation;
