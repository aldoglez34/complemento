import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ManagerLayout from "./ManagerLayout";
import * as managerActions from "../../redux-actions/manager";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(managerActions.setActive("Inicio"));
  }, []);

  return (
    <ManagerLayout>
      <h3 className="text-dark">Inicio</h3>
      <hr className="mt-1" />
    </ManagerLayout>
  );
}

export default Dashboard;
