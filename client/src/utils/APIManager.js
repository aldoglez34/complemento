import axios from "axios";

export default {
  // ---------------------------------------------------------------------------
  // HOME
  // ---------------------------------------------------------------------------
  mngr_fetchManagerByUID: function(uid) {
    return axios.get("/managerapi/home/login/" + uid);
  },

  // ---------------------------------------------------------------------------
  // PRODUCTS
  // ---------------------------------------------------------------------------

  mngr_fetchProducts: function() {
    return axios.get("/managerapi/products/all");
  },

  mngr_fetchCategories: function() {
    return axios.get("/managerapi/products/categories/all");
  },

  mngr_updateProduct: function(product) {
    return axios.put("/managerapi/products/update", product);
  },

  mngr_newProduct: function(product) {
    return axios.post("/managerapi/products/new", product);
  },

  // ---------------------------------------------------------------------------
  // DISCOUNTS
  // ---------------------------------------------------------------------------

  mngr_fetchDiscounts: function() {
    return axios.get("/managerapi/discounts/all");
  },

  mngr_newDiscount: function(discount) {
    return axios.put("/managerapi/discounts/new", discount);
  },

  mngr_deleteDiscount: function(discount) {
    return axios.put("/managerapi/discounts/delete", discount);
  },

  mngr_updateDiscount: function(discount) {
    return axios.put("/managerapi/discounts/update", discount);
  },

  // ---------------------------------------------------------------------------
  // PROVIDERS
  // ---------------------------------------------------------------------------

  mngr_fetchProviders: function() {
    return axios.get("/managerapi/providers/all");
  },

  mngr_updateProvider: function(provider) {
    return axios.put("/managerapi/providers/update", provider);
  },

  mngr_newProvider: function(provider) {
    return axios.post("/managerapi/providers/new", provider);
  },

  // ---------------------------------------------------------------------------
  // USERS
  // ---------------------------------------------------------------------------

  mngr_fetchClients: function() {
    return axios.get("/managerapi/users/clients/all");
  },

  mngr_fetchManagers: function() {
    return axios.get("/managerapi/users/managers/all");
  },

  // ---------------------------------------------------------------------------
  // MESSAGES
  // ---------------------------------------------------------------------------

  mngr_fetchMessages: function() {
    return axios.get("/managerapi/messages/all");
  },

  // ---------------------------------------------------------------------------
  // SALES
  // ---------------------------------------------------------------------------

  mngr_fetchSales: function() {
    return axios.get("/managerapi/sales/all");
  },

  // ---------------------------------------------------------------------------
  // PURCHASES
  // ---------------------------------------------------------------------------

  mngr_fetchPurchases: function() {
    return axios.get("/managerapi/purchases/all");
  }
};
