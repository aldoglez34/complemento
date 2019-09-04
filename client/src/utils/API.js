import axios from "axios";

export default {

  // ---------------------------------------------------------------------------
  // HOME
  // ---------------------------------------------------------------------------

  getDiscounts: function () {
    return axios.get("/api/home/discounts");
  },

  getBestSellers: function () {
    return axios.get("/api/home/bestsellers");
  },

  // ---------------------------------------------------------------------------
  // STORE
  // ---------------------------------------------------------------------------

  loadCategories: function () {
    return axios.get("/api/store/category/all");
  },

  sufferingsByCategory: function (categoryId) {
    return axios.get("/api/store/sufferings/" + categoryId);
  },

  getProducts: function (data) {
    return axios.get("/api/store/products/" + data.catId + "/" + data.suff);
  },

  // ---------------------------------------------------------------------------
  // PRODUCT DETAILS
  // ---------------------------------------------------------------------------

  getProductDetails: function (productId) {
    return axios.get("/api/product/details/" + productId);
  },

  getIngredients: function (productId) {
    return axios.get("/api/product/details/ingredients/" + productId);
  }

};
