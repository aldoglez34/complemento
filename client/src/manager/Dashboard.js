import React from "react";
import ManagerLayout from "./ManagerLayout";

function Dashboard() {
  return (
    <ManagerLayout leftBarActive="Inicio" title="Inicio" button={null}>
      Inicio
    </ManagerLayout>
  );
}

export default Dashboard;
