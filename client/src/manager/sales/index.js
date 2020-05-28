import React, { useState, useEffect } from "react";
import ManagerLayout from "../ManagerLayout";
import APIManager from "../../utils/APIManager";
import { Row, Button, Table, Spinner } from "react-bootstrap";
import SalesRow from "./SalesRow";
import moment from "moment";

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
      case "lastMonth":
        setFilter(criteria === filter ? null : criteria);
        setFiltered(
          criteria === filter
            ? sales
            : sales.filter((s) => {
                // get the date when the message was sent
                let saleDate = moment(
                  moment(s.saleDate).format(moment.HTML5_FMT.DATE)
                );
                // get the difference in days
                let daysDiff = today.diff(saleDate, "days");
                // if daysDiff is equal or less than 30 (less than a month) return true, if not false
                if (daysDiff <= 30) {
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
          active={filter === "lastWeek" ? true : false}
          className="filterBttnManager shadow-sm"
          title="Última semana"
          onClick={() => filterSales("lastWeek")}
        >
          <i className="far fa-calendar-alt mr-1" />
          Última semana
        </Button>
        <Button
          disabled={sales ? false : true}
          active={filter === "lastMonth" ? true : false}
          className="filterBttnManager ml-2 shadow-sm"
          title="Último mes"
          onClick={() => filterSales("lastMonth")}
        >
          <i className="far fa-calendar-alt mr-1" />
          Último mes
        </Button>
      </Row>
    );
  };

  return (
    <ManagerLayout filters={filters()} leftBarActive="Ventas" title="Ventas">
      {filtered ? (
        filtered.length ? (
          <>
            <Table striped hover size="sm" responsive variant="white">
              <thead>
                <tr>
                  <th className="text-center border-0">Fecha</th>
                  <th className="text-center border-0">Productos</th>
                  <th className="text-center border-0">Subtotal</th>
                  <th className="text-center border-0">Envío</th>
                  <th className="text-center border-0">Total</th>
                  <th className="text-center border-0">Comprador</th>
                  <th className="text-center border-0">Estado</th>
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
