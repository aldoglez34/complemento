import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import APIManager from "../../../../utils/APIManager";
import PropTypes from "prop-types";
import ProductInformation from "./ProductInformation";
import NoDiscount from "./NoDiscount";
import WithDiscount from "./WithDiscount";
import { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import moment from "moment";
registerLocale("es", es);

const DiscountBttn = React.memo(({ product }) => {
  const [show, setShow] = useState(false);

  const date = new Date();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
  );
  const [percentage, setPercentage] = useState(5);

  const onChangeStartDate = (date) => setStartDate(date);
  const onChangeEndDate = (date) => setEndDate(date);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const applyDiscount = () => {
    APIManager.mngr_newDiscount({
      productId: product._id,
      percentage: percentage,
      newPrice:
        product.price.salePrice - (product.price.salePrice * percentage) / 100,
      formattedStartDate: moment(startDate).format("YYYY/MM/DD"),
      formattedEndDate: moment(endDate).format("YYYY/MM/DD"),
    })
      .then((res) => {
        console.log(res);
        alert(
          res.data.msg ? res.data.msg : "El descuento fue aplicado con éxito."
        );
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al aplicar el descuento.");
      });
  };

  const terminateDiscount = () => {
    APIManager.mngr_terminateDiscount({ productId: product._id })
      .then((res) => {
        console.log(res);
        alert(
          res.data.msg ? res.data.msg : "El descuento fue aplicado con éxito."
        );
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al aplicar el descuento.");
      });
  };

  return (
    <>
      <Button
        onClick={handleShow}
        variant="warning"
        size="sm"
        title="Descuento"
        className="ml-3 shadow-sm"
      >
        <i className="fas fa-tags pt-1" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="pb-4">
          {/* title */}
          <h1 className="text-center mb-4 mt-2">
            <u>{product.name}</u>
          </h1>
          {/* general content */}
          <ProductInformation product={product} />
          {/* discount or no discount */}
          {product.price.discount.hasDiscount ? (
            <NoDiscount
              product={product}
              terminateDiscount={terminateDiscount}
            />
          ) : (
            <WithDiscount
              percentage={percentage}
              setPercentage={setPercentage}
              startDate={startDate}
              onChangeStartDate={onChangeStartDate}
              endDate={endDate}
              onChangeEndDate={onChangeEndDate}
              product={product}
              applyDiscount={applyDiscount}
            />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
});

DiscountBttn.propTypes = {
  product: PropTypes.object.isRequired,
};

export default DiscountBttn;
