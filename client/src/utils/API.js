import axios from "axios";

export default {
  // ---------------------------------------------------------------------------
  // HOME
  // ---------------------------------------------------------------------------

  fetchPrioritized: function() {
    return axios.get("/api/home/prioritized");
  },

  fetchProductsWithDiscount: function() {
    return axios.get("/api/home/discounts");
  },

  fetchBestSellers: function() {
    return axios.get("/api/home/bestsellers");
  },

  // ---------------------------------------------------------------------------
  // NAVBAR
  // ---------------------------------------------------------------------------

  fetchItemsForSearchBar: function() {
    return axios.get("/api/navbar/searchbar/names");
  },

  fetchItemsForStoreDropdown: function() {
    return axios.get("/api/navbar/dropdown/store");
  },

  // ---------------------------------------------------------------------------
  // STORE
  // ---------------------------------------------------------------------------

  fetchCategories: function() {
    return axios.get("/api/store/categories");
  },

  fetchBrands: function() {
    return axios.get("/api/store/brands");
  },

  fetchProducts: function() {
    return axios.get("/api/store/products");
  },

  // ---------------------------------------------------------------------------
  // CART
  // ---------------------------------------------------------------------------

  fetchCartProducts: function(cartString) {
    return axios.get("/api/cart/products/" + cartString);
  },

  checkStock: function(cartString) {
    return axios.get("/api/cart/checkStock/" + cartString);
  },

  saveClientData: function(data) {
    return axios.put("/api/cart/saveClientData", data);
  },

  makeSale: function(data) {
    return axios.post("/api/cart/buy", data);
  },

  updateStock: function(data) {
    return axios.put("/api/cart/update/stock", data);
  },

  fetchOrder: function(saleId) {
    return axios.get("/api/cart/order/" + saleId);
  },

  // ---------------------------------------------------------------------------
  // PRODUCT DETAILS
  // ---------------------------------------------------------------------------

  fetchProductDetails: function(productId) {
    return axios.get("/api/product/details/" + productId);
  },

  fetchSimilarProducts: function(category) {
    return axios.get("/api/product/similar/" + category);
  },

  // ---------------------------------------------------------------------------
  // CLIENTS
  // ---------------------------------------------------------------------------

  newClient: function(client) {
    return axios.post("/api/client/new", client);
  },

  updateClient: function(client) {
    return axios.put("/api/client/update", client);
  },

  fetchClientByUID: function(uid) {
    return axios.get("/api/client/" + uid);
  },

  addFavorite: function(data) {
    return axios.put("/api/client/favorite/new", data);
  },

  fetchFavorites: function(clientId) {
    return axios.get("/api/client/favorites/" + clientId);
  },

  postMessage: function(data) {
    return axios.post("/api/client/message/new", data);
  }
};
