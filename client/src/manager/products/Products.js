import React, { useState, useEffect } from "react";
import {
  Table,
  Spinner,
  Row,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";
import ManagerLayout from "../ManagerLayout";
import APIManager from "../../utils/APIManager";
import ProductRow from "./ProductRow";
import ProductsCreate from "./ProductsCreate";

const Products = React.memo(() => {
  const [products, setProducts] = useState();
  const [filtered, setFiltered] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    APIManager.mngr_fetchProducts()
      .then((res) => {
        setProducts(res.data);
        setFiltered(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error.");
      });
  }, []);

  const filterProducts = (criteria) => {
    switch (criteria) {
      case "discounts":
        setFilter(criteria === filter ? null : criteria);
        setFiltered(
          criteria === filter
            ? products
            : products.filter((product) => product.price.discount.hasDiscount)
        );
        break;
      case "noStock":
        setFilter(criteria === filter ? null : criteria);
        setFiltered(
          criteria === filter
            ? products
            : products.filter((product) => product.stock === 0)
        );
        break;
      case "priority":
        setFilter(criteria === filter ? null : criteria);
        setFiltered(
          criteria === filter
            ? products
            : products.filter((product) => product.priority)
        );
        break;
      default:
        setFiltered(products);
    }
  };

  const filters = () => {
    return (
      <Row className="px-3 pb-2 mt-2">
        <Button
          disabled={products ? false : true}
          active={filter === "discounts" ? true : false}
          className="filterBttnManager"
          title="Descuentos"
          onClick={() => filterProducts("discounts")}
        >
          <i className="fas fa-tags mr-1" />
          Descuentos
        </Button>
        <Button
          disabled={products ? false : true}
          active={filter === "noStock" ? true : false}
          className="filterBttnManager ml-2"
          title="Sin existencia"
          onClick={() => filterProducts("noStock")}
        >
          <i className="fas fa-exclamation-triangle mr-1" />
          Sin existencia
        </Button>
        <Button
          disabled={products ? false : true}
          active={filter === "priority" ? true : false}
          className="filterBttnManager ml-2"
          title="Destacados"
          onClick={() => filterProducts("priority")}
        >
          <i className="fas fa-star mr-1" />
          Destacados
        </Button>
        <Form className="ml-auto" inline>
          <FormControl type="text" placeholder="Buscar" />
        </Form>
      </Row>
    );
  };

  return (
    <ManagerLayout
      leftBarActive="Productos"
      title="Productos"
      filters={filters()}
      newBttn={<ProductsCreate />}
    >
      {filtered ? (
        filtered.length ? (
          <>
            <Table
              striped
              hover
              size="sm"
              responsive
              variant="white"
              className="mt-2"
            >
              <thead>
                <tr>
                  <th className="text-center border-0">Nombre</th>
                  <th className="text-center border-0">Categoría</th>
                  <th className="text-center border-0">Proveedor</th>
                  <th className="text-center border-0">PrecioVenta</th>
                  <th className="text-center border-0">Vendidos</th>
                  <th className="text-center border-0">Existencia</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => {
                  return <ProductRow key={p._id} product={p} />;
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

export default Products;
