import React from "react";
import { Button, Badge } from "react-bootstrap";
import PropTypes from "prop-types";
import APIManager from "../../../utils/APIManager";
import { formatNumber } from "../../../utils/formatNumber";

const ProductRow = React.memo(({ product }) => {
  const handleChange = (isActive, productId) => {
    if (isActive) {
      APIManager.mngr_deactivateProduct(productId)
        .then((res) => {
          alert("El producto ha sido desactivado.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.response);
          err.response.data.msg
            ? alert(err.response.data.msg)
            : alert("Ocurrió un error al desactivar el producto.");
        });
    } else {
      APIManager.mngr_activateProduct(productId)
        .then((res) => {
          alert("El producto ha sido activado.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.response);
          err.response.data.msg
            ? alert(err.response.data.msg)
            : alert("Ocurrió un error al activar el producto.");
        });
    }
  };

  return (
    <>
      <tr>
        {/* active */}
        <td className="text-center">
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              onChange={() => handleChange(product.active, product._id)}
              className="custom-control-input checkboxStyle"
              id={product._id}
              defaultChecked={product.active ? true : false}
            />
            <label
              className="custom-control-label"
              htmlFor={product._id}
              style={{ cursor: "pointer" }}
            />
          </div>
        </td>
        {/* name */}
        <td>
          {product.name}
          {product.price.discount.hasDiscount ? (
            <Badge pill className="ml-1" variant="warning">
              {product.price.discount.percentage + "%"}
            </Badge>
          ) : null}
        </td>
        {/* category */}
        <td>{product.category}</td>
        {/* provider */}
        <td>{product.provider.name}</td>
        {/* sale price */}
        <td className="text-right">
          {formatNumber(
            product.price.discount.hasDiscount
              ? product.price.discount.newPrice
              : product.price.salePrice
          )}
        </td>
        {/* units sold */}
        <td className="text-right">{product.unitsSold}</td>
        {/* stock */}
        <td className="text-right">{product.stock}</td>
        {/* edit and delete buttons */}
        <td className="text-center">
          <Button
            variant="info"
            size="sm"
            title="Editar"
            className="ml-3"
            href={"/manager/products/edit/" + product._id}
          >
            <i className="fas fa-pen pt-1" />
          </Button>
          <Button
            variant="danger"
            size="sm"
            title="Eliminar"
            className="ml-2"
            onClick={() => alert("No disponible por el momento.")}
          >
            <i className="fas fa-trash-alt pt-1" />
          </Button>
        </td>
      </tr>
    </>
  );
});

ProductRow.propTypes = {
  product: PropTypes.object.isRequired,
  categories: PropTypes.array,
};

export default ProductRow;
