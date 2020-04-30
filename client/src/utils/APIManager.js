import axios from "axios";

export default {
  // ---------------------------------------------------------------------------
  // HOME
  // ---------------------------------------------------------------------------
  mngr_fetchManagerByUID: function (uid) {
    return axios.get("/managerapi/home/login/" + uid);
  },

  // ---------------------------------------------------------------------------
  // PRODUCTS
  // ---------------------------------------------------------------------------

  mngr_fetchProducts: function () {
    return axios.get("/managerapi/products/all");
  },

  mngr_fetchCategories: function () {
    return axios.get("/managerapi/products/categories/all");
  },

  mngr_updateProduct: function (product) {
    return axios.put("/managerapi/products/update", product);
  },

  mngr_newProduct: function (product) {
    return axios.post("/managerapi/products/new", product);
  },

  // ---------------------------------------------------------------------------
  // CATEGORIES
  // ---------------------------------------------------------------------------

  mngr_categoriesReport: function () {
    return axios.get("/managerapi/categories/report");
  },

  // ---------------------------------------------------------------------------
  // PROVIDERS
  // ---------------------------------------------------------------------------

  mngr_fetchProviders: function () {
    return axios.get("/managerapi/providers/all");
  },

  mngr_updateProvider: function (provider) {
    return axios.put("/managerapi/providers/update", provider);
  },

  mngr_newProvider: function (provider) {
    return axios.post("/managerapi/providers/new", provider);
  },

  // ---------------------------------------------------------------------------
  // USERS
  // ---------------------------------------------------------------------------

  mngr_fetchClients: function () {
    return axios.get("/managerapi/users/clients/all");
  },

  mngr_fetchManagers: function () {
    return axios.get("/managerapi/users/managers/all");
  },

  // ---------------------------------------------------------------------------
  // MESSAGES
  // ---------------------------------------------------------------------------

  mngr_fetchMessages: function () {
    return axios.get("/managerapi/messages/all");
  },

  mngr_markSeen: function (msgId) {
    return axios.put("/managerapi/messages/markSeen/" + msgId);
  },

  // ---------------------------------------------------------------------------
  // SALES
  // ---------------------------------------------------------------------------

  mngr_fetchSales: function () {
    return axios.get("/managerapi/sales/all");
  },
};
