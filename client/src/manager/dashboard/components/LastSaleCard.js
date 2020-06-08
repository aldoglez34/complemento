import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import moment from "moment";
import { formatNumber } from "../../../utils/formatNumber";

const LastSaleCard = React.memo(({ sale }) => {
  moment.locale("es");

  return (
    <Card>
      <Card.Header>
        <strong>Última Venta</strong>
      </Card.Header>
      {Object.keys(sale).length ? (
        <>
          <Card.Body>
            <Card.Title>
              <h3 className="text-danger">{formatNumber(sale.grandTotal)}</h3>
            </Card.Title>
            <Card.Text className="d-flex flex-column">
              <strong>Comprador</strong>
              <span>{`${sale.buyer.name} ${sale.buyer.firstSurname} ${sale.buyer.secondSurname}`}</span>
              <span>{sale.buyer.email}</span>
              <span>{sale.buyer.phone}</span>
              <span className="mb-0">{sale.buyer.address.state}</span>
              <strong className="mt-3">{`Productos (${sale.products.length})`}</strong>
              {sale.products.map((p) => (
                <span key={p._id}>{`${p.name} (${formatNumber(
                  p.salePrice
                )}) x ${p.qty} = ${formatNumber(p.totalByProduct)}`}</span>
              ))}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              {moment(sale.saleDate).format("LLLL")}
            </small>
          </Card.Footer>
        </>
      ) : (
        <Card.Body>
          <Card.Text>
            <em>No hay ventas</em>
          </Card.Text>
        </Card.Body>
      )}
    </Card>
  );
});

LastSaleCard.propTypes = {
  sale: PropTypes.object.isRequired,
};

export default LastSaleCard;
