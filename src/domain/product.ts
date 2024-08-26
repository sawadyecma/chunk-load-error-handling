export const products = [...new Array(10)].map((_, index) => ({
  id: index + 1,
  name: `Product-${index + 1}`,
}));
