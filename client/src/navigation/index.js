import React from "react";
import GuestNavigation from "./GuestNavigation";
import ClientNavigation from "./ClientNavigation";
import ManagerNavigation from "./ManagerNavigation";
import { AuthUserContext } from "../session";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {(authUser) =>
      authUser === "Guest" ? (
        <GuestNavigation />
      ) : authUser === "Client" ? (
        <ClientNavigation />
      ) : authUser === "Manager" ? (
        <ManagerNavigation />
      ) : null
    }
  </AuthUserContext.Consumer>
);

export default Navigation;
