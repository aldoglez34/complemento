import axios from "axios";

export default {
  // ---------------------------------------------------------------------------
  // HOME
  // ---------------------------------------------------------------------------
  fetchManagerByUID: function(uid) {
    return axios.get("/managerapi/manager/" + uid);
  },

  // ---------------------------------------------------------------------------
  // PRODUCTS
  // ---------------------------------------------------------------------------

  fetchManagerProducts: function() {
    return axios.get("/managerapi/manager/products/all");
  },

  updateProduct: function(product) {
    return axios.put("/managerapi/manager/products/update", product);
  },

  newProductManager: function(product) {
    return axios.post("/managerapi/manager/products/new", product);
  },

  // ---------------------------------------------------------------------------
  // DISCOUNTS
  // ---------------------------------------------------------------------------

  fetchDiscountsManager: function() {
    return axios.get("/managerapi/manager/discounts/all");
  },

  fetchNotDiscountsManager: function() {
    return axios.get("/managerapi/manager/notdiscounts/all");
  },

  newDiscount: function(discount) {
    return axios.put("/managerapi/manager/discounts/new", discount);
  },

  deleteDiscount: function(discount) {
    return axios.put("/managerapi/manager/discounts/delete", discount);
  },

  updateDiscount: function(discount) {
    return axios.put("/managerapi/manager/discounts/update", discount);
  },

  // ---------------------------------------------------------------------------
  // CATEGORIES
  // ---------------------------------------------------------------------------

  fetchCategoriesManager: function() {
    return axios.get("/managerapi/manager/categories/all");
  },

  updateCategory: function(category) {
    return axios.put("/managerapi/manager/categories/update", category);
  },

  newCategory: function(data) {
    return axios.post("/managerapi/manager/categories/new", data);
  },

  // ---------------------------------------------------------------------------
  // PROVIDERS
  // ---------------------------------------------------------------------------

  fetchProvidersManager: function() {
    return axios.get("/managerapi/manager/providers/all");
  },

  updateProvider: function(provider) {
    return axios.put("/managerapi/manager/providers/update", provider);
  },

  newProvider: function(provider) {
    return axios.post("/managerapi/manager/providers/new", provider);
  },

  // ---------------------------------------------------------------------------
  // USERS
  // ---------------------------------------------------------------------------

  fetchClientsManager: function() {
    return axios.get("/managerapi/manager/clients/all");
  },

  fetchManagers: function() {
    return axios.get("/managerapi/manager/managers/all");
  },

  // ---------------------------------------------------------------------------
  // MESSAGES
  // ---------------------------------------------------------------------------

  fetchMessages: function() {
    return axios.get("/managerapi/manager/messages/all");
  },

  // ---------------------------------------------------------------------------
  // SALES
  // ---------------------------------------------------------------------------

  fetchSales: function() {
    return axios.get("/managerapi/manager/sales/all");
  },

  // ---------------------------------------------------------------------------
  // PURCHASES
  // ---------------------------------------------------------------------------

  fetchPurchases: function() {
    return axios.get("/managerapi/manager/purchases/all");
  }
};
