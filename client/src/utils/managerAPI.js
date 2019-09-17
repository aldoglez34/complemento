import axios from "axios";

export default {
  // ---------------------------------------------------------------------------
  // NEW PRODUCT
  // ---------------------------------------------------------------------------

  loadCategories: function() {
    return axios.get("/api/manager/category/all");
  },

  saveCategory: function(values) {
    return axios.post("/api/manager/category/new", values);
  }
};
