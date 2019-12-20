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

  fetchItemsForSearchBar: function() {
    return axios.get("/api/home/itemsforsearchbar");
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
  // PRODUCT DETAILS
  // ---------------------------------------------------------------------------

  fetchProductDetails: function(productId) {
    return axios.get("/api/product/details/" + productId);
  },

  // ---------------------------------------------------------------------------
  // CLIENTS
  // ---------------------------------------------------------------------------

  fetchClientByUID: function(uid) {
    return axios.get("/api/client/" + uid);
  },

  addFavorite: function(data) {
    return axios.put("/api/client/favorite/new", data);
  },

  fetchFavorites: function(clientId) {
    return axios.get("/api/client/favorites/" + clientId);
  },

  // OTHER

  // fetchEmails: function() {
  //   return axios.get("/api/client/email/all");
  // },

  newClient: function(client) {
    return axios.post("/api/client/new", client);
  },

  updateClient: function(client) {
    return axios.put("/api/client/update", client);
  },

  // ---------------------------------------------------------------------------
  // MANAGER
  // ---------------------------------------------------------------------------

  fetchManagerByUID: function(uid) {
    return axios.get("/api/manager/" + uid);
  },

  // categories

  fetchCategoriesManager: function() {
    return axios.get("/api/manager/categories/all");
  },

  updateCategory: function(category) {
    return axios.put("/api/manager/categories/update", category);
  },

  newCategory: function(data) {
    return axios.post("/api/manager/categories/new", data);
  },

  // products

  fetchManagerProducts: function() {
    return axios.get("/api/manager/products/all");
  },

  updateProduct: function(product) {
    return axios.put("/api/manager/products/update", product);
  },

  newProductManager: function(product) {
    return axios.post("/api/manager/products/new", product);
  },

  // discounts

  fetchDiscountsManager: function() {
    return axios.get("/api/manager/discounts/all");
  },

  fetchNotDiscountsManager: function() {
    return axios.get("/api/manager/notdiscounts/all");
  },

  newDiscount: function(discount) {
    return axios.put("/api/manager/discounts/new", discount);
  },

  deleteDiscount: function(discount) {
    return axios.put("/api/manager/discounts/delete", discount);
  },

  updateDiscount: function(discount) {
    return axios.put("/api/manager/discounts/update", discount);
  },

  // providers

  fetchProvidersManager: function() {
    return axios.get("/api/manager/providers/all");
  },

  updateProvider: function(provider) {
    return axios.put("/api/manager/providers/update", provider);
  },

  newProvider: function(provider) {
    return axios.post("/api/manager/providers/new", provider);
  },

  // users

  fetchClientsManager: function() {
    return axios.get("/api/manager/clients/all");
  },

  fetchManagers: function() {
    return axios.get("/api/manager/managers/all");
  }
};
