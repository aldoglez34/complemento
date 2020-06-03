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

  mngr_fetchOneProduct: function (productId) {
    return axios.get("/managerapi/products/getOne/" + productId);
  },

  mngr_newProduct: function (formData) {
    return axios.post("/managerapi/products/new", formData);
  },

  mngr_updateProduct: function (formData) {
    return axios.put("/managerapi/products/update", formData);
  },

  // discounts

  mngr_fetchDiscounts: function () {
    return axios.get("/managerapi/products/discounts/all");
  },

  mngr_newDiscount: function (data) {
    return axios.put("/managerapi/products/discounts/new", data);
  },

  // product activation

  mngr_activateProduct: function (productId) {
    return axios.put("/managerapi/products/activate/" + productId);
  },

  mngr_deactivateProduct: function (productId) {
    return axios.put("/managerapi/products/deactivate/" + productId);
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

  mngr_fetchProductsByProvider: function (providerId) {
    return axios.get("/managerapi/providers/fetchProducts/" + providerId);
  },

  mngr_fetchOneProvider: function (providerId) {
    return axios.get("/managerapi/providers/getOne/" + providerId);
  },

  mngr_updateProvider: function (provider) {
    return axios.put("/managerapi/providers/update", provider);
  },

  mngr_newProvider: function (provider) {
    return axios.post("/managerapi/providers/new", provider);
  },

  // ---------------------------------------------------------------------------
  // CLIENTS & MANAGERS
  // ---------------------------------------------------------------------------

  mngr_fetchClients: function () {
    return axios.get("/managerapi/users/clients/all");
  },

  mngr_fetchSalesByClient: function (clientId) {
    return axios.get("/managerapi/users/clients/sales/" + clientId);
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
