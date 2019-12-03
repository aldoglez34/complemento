import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ManagerLayout from "./ManagerLayout";
import * as managerActions from "../redux-actions/manager";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(managerActions.setActive("Inicio"));
  }, []);

  return (
    <ManagerLayout title="Inicio" button={null}>
      Inicio
    </ManagerLayout>
  );
}

export default Dashboard;
