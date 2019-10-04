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
    return axios.get("/api/store/category/all");
  },

  fetchBrands: function() {
    return axios.get("/api/store/brands");
  },

  fetchSufferings: function(catId) {
    return axios.get("/api/store/sufferings/" + catId);
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

  fetchIngredients: function(productId) {
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
