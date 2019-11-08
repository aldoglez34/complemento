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

  fetchProducts: function(cat) {
    return axios.get("/api/store/products/" + cat);
  },

  // ---------------------------------------------------------------------------
  // PRODUCT DETAILS
  // ---------------------------------------------------------------------------

  fetchProductDetails: function(prod) {
    return axios.get("/api/product/details/" + prod);
  },

  // ---------------------------------------------------------------------------
  // CLIENTS
  // ---------------------------------------------------------------------------

  fetchClientInfo: function(uid) {
    return axios.get("/api/client/" + uid);
  },

  addFavorite: function(data) {
    return axios.put("/api/client/favorite/new", data);
  },

  fetchFavorites: function(clientId) {
    return axios.get("/api/client/favorites/" + clientId);
  },

  //

  fetchEmails: function() {
    return axios.get("/api/client/email/all");
  },

  saveNewClient: function(newClient) {
    return axios.post("/api/client/new", newClient);
  },

  updateClient: function(updatedClient) {
    return axios.put("/api/client/update", updatedClient);
  },

  // ---------------------------------------------------------------------------
  // MANAGER
  // ---------------------------------------------------------------------------

  saveCategory: function(values) {
    return axios.post("/api/manager/category/new", values);
  }
};
