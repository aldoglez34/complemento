import axios from "axios";

export default {

  loadCategories: function () {
    return axios.get("/api/store/category/all");
  },

  loadProducts: function () {
    return axios.get("/api/store/products/:category");
  }

};
