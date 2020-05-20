import React from "react";
import GuestNavigation from "./GuestNavigation";
import ClientNavigation from "./ClientNavigation";
import ManagerNavigation from "./ManagerNavigation";
import { AuthUserContext } from "../session";

const Navigation = React.memo(() => (
  <AuthUserContext.Consumer>
    {(navigation) => {
      console.log("navigation", navigation);
      return navigation === "Guest" ? (
        <GuestNavigation />
      ) : navigation === "Client" ? (
        <ClientNavigation />
      ) : navigation === "Manager" ? (
        <ManagerNavigation />
      ) : null;
    }}
  </AuthUserContext.Consumer>
));

export default Navigation;
