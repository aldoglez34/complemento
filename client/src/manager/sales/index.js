import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import APIManager from "../../utils/APIManager";
import { Row, Button, Table, Spinner } from "react-bootstrap";
import SalesRow from "./SalesRow";
import moment from "moment";
import TopRightBttn from "../components/TopRightBttn";

const Sales = React.memo(() => {
  const [sales, setSales] = useState();
  const [filtered, setFiltered] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    APIManager.mngr_fetchSales()
      .then((res) => {
        setSales(res.data);
        setFiltered(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar las ventas.");
      });
  }, []);

  const filterSales = (criteria) => {
    // get today's date
    let today = moment(moment(Date.now()).format(moment.HTML5_FMT.DATE));
    // switch
    switch (criteria) {
      case "Procesado":
      case "Enviado":
      case "Entregado":
      case "Cancelado":
        setFilter(criteria === filter ? null : criteria);
        setFiltered(
          criteria === filter
            ? sales
            : sales.filter((s) => s.status === criteria)
        );
        break;
      case "lastWeek":
        setFilter(criteria === filter ? null : criteria);
        setFiltered(
          criteria === filter
            ? sales
            : sales.filter((s) => {
                // get the sale date
                let saleDate = moment(
                  moment(s.saleDate).format(moment.HTML5_FMT.DATE)
                );
                // get the difference in days
                let daysDiff = today.diff(saleDate, "days");
                // if daysDiff is equal or less than 7 (less than a week) return true, if not false
                if (daysDiff <= 7) {
                  return true;
                } else {
                  return false;
                }
              })
        );
        break;
      default:
        setFiltered(sales);
    }
  };

  const filters = () => {
    return (
      <Row className="px-3 pb-2 mt-2">
        <Button
          disabled={sales ? false : true}
          active={filter === "Procesado" ? true : false}
          className="filterBttnManager shadow-sm"
          title="Procesado"
          onClick={() => filterSales("Procesado")}
        >
          <i className="fas fa-cash-register mr-1" />
          Procesado
        </Button>
        <Button
          disabled={sales ? false : true}
          active={filter === "Enviado" ? true : false}
          className="filterBttnManager shadow-sm ml-2"
          title="Enviado"
          onClick={() => filterSales("Enviado")}
        >
          <i className="fas fa-truck mr-1" />
          Enviado
        </Button>
        <Button
          disabled={sales ? false : true}
          active={filter === "Entregado" ? true : false}
          className="filterBttnManager shadow-sm ml-2"
          title="Entregado"
          onClick={() => filterSales("Entregado")}
        >
          <i className="fas fa-truck-loading mr-1" />
          Entregado
        </Button>
        <Button
          disabled={sales ? false : true}
          active={filter === "Cancelado" ? true : false}
          className="filterBttnManager shadow-sm ml-2"
          title="Cancelado"
          onClick={() => filterSales("Cancelado")}
        >
          <i className="fas fa-ban mr-1" />
          Cancelado
        </Button>
        <Button
          disabled={sales ? false : true}
          active={filter === "lastWeek" ? true : false}
          className="filterBttnManager shadow-sm ml-2"
          title="Última semana"
          onClick={() => filterSales("lastWeek")}
        >
          <i className="far fa-calendar-alt mr-1" />
          Última semana
        </Button>
      </Row>
    );
  };

  return (
    <ManagerLayout
      filters={filters()}
      leftBarActive="Ventas"
      topBttn={
        <>
          <TopRightBttn
            text={
              <>
                <i className="fas fa-chart-bar mr-2" />
                <span>Ventas semana</span>
              </>
            }
            link="/manager/sales/chart/currentWeek"
          />
          <div className="ml-2" />
          <TopRightBttn
            text={
              <>
                <i className="fas fa-chart-area mr-2" />
                <span>Ventas mes</span>
              </>
            }
            link="/manager/sales/chart/currentMonth"
          />
          <div className="ml-2" />
          <TopRightBttn
            text={
              <>
                <i className="fas fa-chart-line mr-2" />
                <span>Ventas semestre</span>
              </>
            }
            link="/manager/sales/chart/currentSemester"
          />
          <div className="ml-2" />
          <TopRightBttn
            text={
              <>
                <i className="fas fa-map-marked-alt mr-2" />
                <span>Ventas por estado</span>
              </>
            }
            link="/manager/sales/chart/currentSemester"
          />
        </>
      }
      title="Ventas"
    >
      {filtered ? (
        filtered.length ? (
          <>
            <Table striped size="sm" responsive variant="white">
              <thead>
                <tr>
                  <th className="text-center border-0">Estado</th>
                  <th className="text-center border-0">Fecha</th>
                  <th className="text-center border-0">Productos</th>
                  <th className="text-center border-0">Subtotal</th>
                  <th className="text-center border-0">Envío</th>
                  <th className="text-center border-0">Total</th>
                  <th className="text-center border-0">Comprador</th>
                  <th className="text-center border-0">Locación</th>
                  <th className="text-center border-0"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => {
                  return <SalesRow key={s._id} sale={s} />;
                })}
              </tbody>
            </Table>
          </>
        ) : (
          <em>No hay nada aquí</em>
        )
      ) : (
        <div className="text-center my-4">
          <Spinner animation="grow" role="status" variant="warning" />
        </div>
      )}
    </ManagerLayout>
  );
});

export default Sales;
