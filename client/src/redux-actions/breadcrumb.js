export const setCategory = cat => {
  return {
    type: "breadcrumb/setCategory",
    cat
  };
};

export const setSuffering = suff => {
  return {
    type: "breadcrumb/setSuffering",
    suff
  };
};

export const setProduct = product => {
  return {
    type: "breadcrumb/setProduct",
    product
  };
};
