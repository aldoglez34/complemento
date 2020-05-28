export const formatNumber = (num) => {
  return num !== undefined
    ? "$" +
        num
          .toFixed(2)
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    : null;
};
