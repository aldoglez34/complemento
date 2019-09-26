import axios from "axios";

export default {
  // ---------------------------------------------------------------------------
  // HOME
  // ---------------------------------------------------------------------------

  fetchProductsWithDiscount: function() {
    return axios.get("/api/home/discounts");
  },

  fetchBestSellers: function() {
    return axios.get("/api/home/bestsellers");
  },

  // ---------------------------------------------------------------------------
  // STORE
  // ---------------------------------------------------------------------------

  loadCategories: function() {
    return axios.get("/api/store/category/all");
  },

  sufferingsByCategory: function(categoryId) {
    return axios.get("/api/store/sufferings/" + categoryId);
  },

  getStoreProducts: function(data) {
    return axios.get("/api/store/products/" + data.catId + "/" + data.suff);
  },

  // ---------------------------------------------------------------------------
  // PRODUCT DETAILS
  // ---------------------------------------------------------------------------

  getProductDetails: function(productId) {
    return axios.get("/api/product/details/" + productId);
  },

  getIngredients: function(productId) {
    return axios.get("/api/product/details/ingredients/" + productId);
  },

  // ---------------------------------------------------------------------------
  // CLIENT DETAILS
  // ---------------------------------------------------------------------------

  getClientInfo: function(uid) {
    return axios.get("/api/client/" + uid);
  },

  // ---------------------------------------------------------------------------
  // MANAGER
  // ---------------------------------------------------------------------------

  saveCategory: function(values) {
    return axios.post("/api/manager/category/new", values);
  }
};
