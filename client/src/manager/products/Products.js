import React, { useState, useEffect } from "react";
import { Table, Spinner, Row } from "react-bootstrap";
import ManagerLayout from "../ManagerLayout";
import API from "../../utils/API";
import ProductRow from "./ProductRow";
import MyPagination from "../../store/components/MyPagination";

function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    API.fetchManagerProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleChangePage = page => {
    console.log(page);
    // this.setState({ activePage: page }, () => this.setOffsetAndLimit());
  };

  return (
    <ManagerLayout
      leftBarActive="Productos"
      title="Productos"
      button={{ text: "Producto", to: "/manager/products/create" }}
    >
      {products ? (
        products.length ? (
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
                  <th className="text-center border-0">Destacado</th>
                  <th className="text-center border-0">Compra</th>
                  <th className="text-center border-0">Venta</th>
                  <th className="text-center border-0">Utilidad</th>
                  <th className="text-center border-0">Vendidos</th>
                  <th className="text-center border-0">Existencia</th>
                </tr>
              </thead>
              <tbody>
                {products.map(p => {
                  return <ProductRow key={p._id} product={p} />;
                })}
              </tbody>
            </Table>
            <Row className="justify-content-center">
              <MyPagination
                pageCount={10}
                activePage={1}
                handleChangePage={handleChangePage}
              />
            </Row>
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
}

export default Products;
