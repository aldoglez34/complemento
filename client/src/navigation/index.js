import React from "react";
import GuestNavigation from "./GuestNavigation";
import ClientNavigation from "./ClientNavigation";
import ManagerNavigation from "./ManagerNavigation";
import { AuthUserContext } from "../session";

const Navigation = React.memo(() => (
  <AuthUserContext.Consumer>
    {(navigation) =>
      navigation === "Guest" ? (
        <GuestNavigation />
      ) : navigation === "Client" ? (
        <ClientNavigation />
      ) : navigation === "Manager" ? (
        <ManagerNavigation />
      ) : (
        <div className="bg-danger h-100">Cargando...</div>
      )
    }
  </AuthUserContext.Consumer>
));

export default Navigation;
