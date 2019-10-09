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

  fetchProductDetails: function(productId) {
    return axios.get("/api/product/details/" + productId);
  },

  fetchSufferings: function(productId) {
    return axios.get("/api/product/sufferings/" + productId);
  },

  fetchIngredients: function(productId) {
    return axios.get("/api/product/details/ingredients/" + productId);
  },

  // ---------------------------------------------------------------------------
  // CLIENTS
  // ---------------------------------------------------------------------------

  getClientInfo: function(uid) {
    return axios.get("/api/client/" + uid);
  },

  fetchEmails: function() {
    return axios.get("/api/client/email/all");
  },

  // ---------------------------------------------------------------------------
  // MANAGER
  // ---------------------------------------------------------------------------

  saveCategory: function(values) {
    return axios.post("/api/manager/category/new", values);
  }
};
