import axios from "axios";

export default {
  loadCategories: function () {
    return axios.get("/api/store/category/all");
  },

  sufferingsByCategory: function (categoryId) {
    return axios.get("/api/store/sufferings/" + categoryId);
  },

  productsByCategory: function (categoryId) {
    return axios.get("/api/store/productsbycategory/" + categoryId);
  },

  productsByCatAndSuff: function (data) {
    return axios.get("/api/store/productsbycatandsuff/" + data.catId + "/" + data.suff);
  }
};
