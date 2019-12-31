import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as cartActions from "../redux/actions/cart";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Layout from "../components/Layout";
import ProductsSection from "./components/ProductsSection";
import HelpButton from "../components/misc/HelpButton";
import ScrollButton from "../components/misc/ScrollButton";
import "./store.scss";
import API from "../utils/API";
import FilterSection from "./components/FilterSection";
import SortDropdown from "./components/SortDropdown";
import SmallSortDropdown from "./components/SmallSortDropdown";
import ProductsPerPageDropdown from "./components/ProductsPerPageDropdown";
import SmallProductsPerPageDropdown from "./components/SmallProductsPerPageDropdown";
import MyPagination from "./components/MyPagination";

function Store(props) {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const [products, setProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const [pageCount, setPageCount] = useState();
  const [activePage, setActivePage] = useState(1);

  const [offset, setOffset] = useState();
  const [limit, setLimit] = useState();

  const [filter, setFilter] = useState();
  const [sortBy, setSortBy] = useState("Nombre ascendente");

  const dispatch = useDispatch();

  const setOffsetAndLimit = () => {
    let offset;
    let limit;
    if (activePage === 1) {
      offset = 0;
      limit = offset + productsPerPage;
    } else {
      offset = (activePage - 1) * 20;
      limit = offset + productsPerPage;
    }
    setOffset(offset);
    setLimit(limit);
  };

  useEffect(() => {
    // show store dropdown
    dispatch(cartActions.showDropdown());
    // fetch filters
    API.fetchCategories()
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
    API.fetchBrands()
      .then(res => setBrands(res.data))
      .catch(err => console.log(err));
    // fetch products
    API.fetchProducts()
      .then(res => {
        // no filters
        if (
          !props.routeProps.match.params.brand ||
          !props.routeProps.match.params.category
        ) {
          setProducts(res.data);
          setPageCount(Math.ceil(res.data.length / productsPerPage));
          setOffsetAndLimit();
        }
        // category filter
        if (props.routeProps.match.params.category) {
          setFilter(props.routeProps.match.params.category);
          let filteredProducts = res.data.filter(
            p => p.category.name === props.routeProps.match.params.category
          );
          setProducts(filteredProducts);
          setPageCount(Math.ceil(filteredProducts.length / productsPerPage));
          setOffsetAndLimit();
        }
        // brand filter
        if (props.routeProps.match.params.brand) {
          setFilter(props.routeProps.match.params.brand);
          let filteredProducts = res.data.filter(
            p => p.brand === props.routeProps.match.params.brand
          );
          setProducts(filteredProducts);
          setPageCount(Math.ceil(filteredProducts.length / productsPerPage));
          setOffsetAndLimit();
        }
      })
      .catch(err => console.log(err));
  }, []);

  const handleChangeProductsPerPage = pages => {
    setProductsPerPage(pages);
  };

  const applySorting = opt => {
    setSortBy(opt);
    let temp = products;
    switch (opt) {
      case "Nombre ascendente":
        temp.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
        setProducts(temp);
        break;
      case "Nombre descendente":
        temp.sort((a, b) => (a.name < b.name ? 1 : b.name < a.name ? -1 : 0));
        setProducts(temp);
        break;
      case "Más vendido":
        temp.sort((a, b) =>
          a.unitsSold < b.unitsSold ? 1 : b.unitsSold < a.unitsSold ? -1 : 0
        );
        setProducts(temp);
        break;
      case "Más caro primero":
        temp.sort((a, b) =>
          a.salePrice < b.salePrice ? 1 : b.salePrice < a.salePrice ? -1 : 0
        );
        setProducts(temp);
        break;
      case "Más barato primero":
        temp.sort((a, b) =>
          a.salePrice > b.salePrice ? 1 : b.salePrice > a.salePrice ? -1 : 0
        );
        setProducts(temp);
        break;
      default:
        setProducts(temp);
    }
  };

  const handleChangePage = page => {
    setActivePage(page);
    setOffsetAndLimit();
  };

  return (
    <Layout>
      {products.length && categories.length && brands.length && pageCount ? (
        <>
          <Container fluid className="mt-3">
            <Row className="p-3">
              {/* left-column, filters */}
              <Col md={3}>
                <h2>Filtros</h2>
                <hr className="myDivider" />
                <FilterSection
                  categories={categories}
                  brands={brands}
                  filterSelected={filter}
                />
              </Col>
              {/* right-column, title, sorting and products */}
              <Col md={9}>
                {/* title */}
                <Row className="px-md-3 mb-2 mt-3 mt-md-0">
                  <Col className="text-md-center">
                    <h2 className="mt-1">
                      {!filter ? "Todos los productos" : filter}
                    </h2>
                    <hr
                      className="myDivider mb-1 ml-md-auto"
                      style={{ backgroundColor: "#edcb58" }}
                    />
                  </Col>
                </Row>
                {/* sorting */}
                <Row className="px-3 mb-2">
                  {/* for md to xlg display */}
                  <Row className="d-none d-md-block">
                    <div className="d-flex flex-row">
                      <div className="d-flex flex-row align-items-center">
                        <span className="mr-2">Orden</span>
                        <SortDropdown
                          active={sortBy}
                          applySorting={applySorting}
                        />
                      </div>
                      <div className="d-flex flex-row align-items-center ml-2">
                        <span className="mr-2">Ver</span>
                        <ProductsPerPageDropdown
                          qty={productsPerPage}
                          handleChangeProductsPerPage={
                            handleChangeProductsPerPage
                          }
                        />
                      </div>
                    </div>
                  </Row>
                  {/* for smaller devices */}
                  <div className="d-md-none">
                    <div className="d-flex flex-row">
                      <SmallSortDropdown
                        active={sortBy}
                        applySorting={applySorting}
                      />
                      <div className="ml-2">
                        <SmallProductsPerPageDropdown
                          qty={productsPerPage}
                          handleChangeProductsPerPage={
                            handleChangeProductsPerPage
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-auto">{products.length} productos</div>
                </Row>
                {/* products */}
                <Row className="mb-3">
                  <Col className="px-0">
                    <ProductsSection products={products.slice(offset, limit)} />
                  </Col>
                </Row>
                {/* pagination */}
                <Row className="mb-3 justify-content-center">
                  <MyPagination
                    pageCount={pageCount}
                    activePage={activePage}
                    handleChangePage={handleChangePage}
                  />
                </Row>
              </Col>
            </Row>
          </Container>
          <HelpButton />
          <ScrollButton scrollStepInPx={50} delayInMs={16.66} />
        </>
      ) : (
        <div className="h-100 d-flex align-items-center justify-content-center">
          <Spinner animation="grow" role="status" variant="warning" />
        </div>
      )}
    </Layout>
  );
}

export default Store;
