import React, { useEffect } from "react";
import ManagerLayout from "../../ManagerLayout";
import Chart from "chart.js";
import { Row, Col } from "react-bootstrap";
import moment from "moment";

const SalesChart = React.memo((props) => {
  const type = props.routeProps.match.params.chart;
  const title =
    type === "currentWeek"
      ? "Ventas de la Última Semana"
      : type === "currentMonth"
      ? "Ventas del mes"
      : "Ventas del semestre";

  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    // ctx.canvas.width = 800;
    ctx.canvas.height = 420;
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Lunes",
          "Martes",
          "Miércoles",
          "Jueves",
          "Viernes",
          "Sábado",
          "Domingo",
        ],
        datasets: [
          {
            data: [12, 19, 3, 5, 2, 3, 40],
            backgroundColor: "rgba(255, 206, 86, 0.2)",
            borderColor: "rgba(255, 206, 86, 1)",
            label: "$",
            pointBackgroundColor: "#f41206",
            pointBorderColor: "#f75950",
            pointRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.yLabel;
            },
          },
        },
      },
    });
  });

  return (
    <ManagerLayout
      backBttn="/manager/sales"
      leftBarActive="Ventas"
      title={title}
    >
      <h3 className="text-danger mb-4">
        <i className="far fa-calendar-alt mr-2" />
        <small style={{ textTransform: "uppercase" }}>
          {moment(Date.now()).format("dddd")}
        </small>
      </h3>
      <Row>
        <Col>
          <canvas id="myChart"></canvas>
        </Col>
      </Row>
      {/* <canvas id="myChart"></canvas> */}
    </ManagerLayout>
  );
});

export default SalesChart;
