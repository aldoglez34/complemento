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
import ProductRow from "./components/ProductRow";
import TopRightBttn from "../components/TopRightBttn";

const Products = React.memo(() => {
  const [products, setProducts] = useState();
  const [filtered, setFiltered] = useState();
  const [filter, setFilter] = useState();

  const [categories, setCategories] = useState();

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
          : alert("Ocurrió un  al cargar los productos.");
      });
    APIManager.mngr_fetchCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => {
        console.log(err.response);
        err.response.data.msg
          ? alert(err.response.data.msg)
          : alert("Ocurrió un error al cargar las categorías.");
      });
  }, []);

  const filterProducts = (criteria) => {
    switch (criteria) {
      case "discounts":
        document.getElementById("searchProducts").reset();
        setFilter(criteria === filter ? null : criteria);
        setFiltered(
          criteria === filter
            ? products
            : products.filter((product) => product.price.discount.hasDiscount)
        );
        break;
      case "noStock":
        document.getElementById("searchProducts").reset();
        setFilter(criteria === filter ? null : criteria);
        setFiltered(
          criteria === filter
            ? products
            : products.filter((product) => product.stock === 0)
        );
        break;
      case "priority":
        document.getElementById("searchProducts").reset();
        setFilter(criteria === filter ? null : criteria);
        setFiltered(
          criteria === filter
            ? products
            : products.filter((product) => product.priority)
        );
        break;
      case "inactives":
        document.getElementById("searchProducts").reset();
        setFilter(criteria === filter ? null : criteria);
        setFiltered(
          criteria === filter
            ? products
            : products.filter((product) => !product.active)
        );
        break;
      default:
        document.getElementById("searchProducts").reset();
        setFiltered(products);
    }
  };

  const filters = () => {
    return (
      <Row className="px-3 pb-2 mt-2">
        {/* filters */}
        <Button
          disabled={products ? false : true}
          active={filter === "inactives" ? true : false}
          className="filterBttnManager shadow-sm"
          onClick={() => filterProducts("inactives")}
        >
          <i className="fas fa-minus-circle mr-1" />
          Inactivos
        </Button>
        <Button
          disabled={products ? false : true}
          active={filter === "discounts" ? true : false}
          className="filterBttnManager ml-2 shadow-sm"
          onClick={() => filterProducts("discounts")}
        >
          <i className="fas fa-tags mr-1" />
          Descuentos
        </Button>
        <Button
          disabled={products ? false : true}
          active={filter === "noStock" ? true : false}
          className="filterBttnManager ml-2 shadow-sm"
          onClick={() => filterProducts("noStock")}
        >
          <i className="fas fa-exclamation-triangle mr-1" />
          Sin existencia
        </Button>
        <Button
          disabled={products ? false : true}
          active={filter === "priority" ? true : false}
          className="filterBttnManager ml-2 shadow-sm"
          onClick={() => filterProducts("priority")}
        >
          <i className="fas fa-star mr-1" />
          Destacados
        </Button>
        {/* search bar */}
        <Form className="ml-auto" id="searchProducts" inline>
          <FormControl
            disabled={products ? false : true}
            type="text"
            placeholder="Buscar producto"
            onChange={handleEditInputChange}
          />
        </Form>
      </Row>
    );
  };

  const handleEditInputChange = (e) => {
    // for upper or lower case
    let value = e.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let regex = new RegExp(`^${value}`, "i");

    // suggestions
    let suggestions = [];

    // make search (by filtering suggestions)
    if (value.length > 0) {
      setFilter(null);
      suggestions = products.filter((p) => regex.test(p.cleanName));
      setFiltered(suggestions);
    } else if (value.length === 0) {
      setFiltered(products);
    }
  };

  return (
    <ManagerLayout
      leftBarActive="Productos"
      title="Productos"
      filters={filters()}
      topBttn={
        <>
          <TopRightBttn
            text={
              <>
                <i className="fas fa-plus-square mr-2" />
                <span>Descuento</span>
              </>
            }
            link="/manager/products/discounts/new"
          />
          <div className="ml-2" />
          <TopRightBttn
            text={
              <>
                <i className="fas fa-plus-square mr-2" />
                <span>Producto</span>
              </>
            }
            link="/manager/products/new"
          />
        </>
      }
    >
      {filtered && categories ? (
        filtered.length ? (
          <Table striped size="sm" responsive variant="white">
            <thead>
              <tr>
                <th className="text-center border-0 pb-3">Activo</th>
                <th className="text-center border-0 pb-3">Nombre</th>
                <th className="text-center border-0 pb-3">Categoría</th>
                <th className="text-center border-0 pb-3">Proveedor</th>
                <th className="text-center border-0 pb-3">PrecioVenta</th>
                <th className="text-center border-0 pb-3">Vendidos</th>
                <th className="text-center border-0 pb-3">Existencia</th>
                <th className="text-center border-0 pb-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => {
                return (
                  <ProductRow key={p._id} product={p} categories={categories} />
                );
              })}
            </tbody>
          </Table>
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
