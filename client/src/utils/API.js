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

  updateClient: function(updatedClient) {
    return axios.put("/api/client/update", updatedClient);
  },

  // ---------------------------------------------------------------------------
  // MANAGER
  // ---------------------------------------------------------------------------

  fetchManagerByUID: function(uid) {
    return axios.get("/api/manager/" + uid);
  },

  fetchProductsManager: function() {
    return axios.get("/api/manager/products/all");
  },

  saveCategory: function(values) {
    return axios.post("/api/manager/category/new", values);
  }
};
