import React, { useEffect } from "react";
import ManagerLayout from "../../ManagerLayout";
import Chart from "chart.js";

const SalesChart = React.memo((props) => {
  const type = props.routeProps.match.params.chart;
  const title =
    type === "currentWeek"
      ? "Ventas de la Semana"
      : type === "currentMonth"
      ? "Ventas del mes"
      : "Ventas del semestre";

  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
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
            label: "# of Votes",
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
        Hoy es Jueves
      </h3>
      <div style={{ position: "relative", height: "40vh", width: "70vw" }}>
        <canvas id="myChart"></canvas>
      </div>
    </ManagerLayout>
  );
});

export default SalesChart;
