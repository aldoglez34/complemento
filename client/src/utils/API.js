import axios from "axios";

export default {
  loadCategories: function() {
    return axios.get("/api/categories");
  }
};
