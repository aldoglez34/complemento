import React from "react";
import ManagerLayout from "./ManagerLayout";
import { useSelector } from "react-redux";

const Dashboard = React.memo(() => {
  const manager = useSelector((state) => state.user);

  return manager ? (
    <ManagerLayout leftBarActive="Inicio" title="Inicio" button={null}>
      Inicio
    </ManagerLayout>
  ) : null;
});

export default Dashboard;
