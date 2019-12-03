import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ManagerLayout from "./ManagerLayout";
import * as managerActions from "../redux-actions/manager";
import { Row, Col } from "react-bootstrap";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(managerActions.setActive("Inicio"));
  }, []);

  return (
    <ManagerLayout>
      <Row className="mb-3">
        <Col>
          <h2 className="mb-0 text-dark">
            <strong>Inicio</strong>
          </h2>
        </Col>
      </Row>
    </ManagerLayout>
  );
}

export default Dashboard;
