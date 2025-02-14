export const formatCurrency = (value: number) => {
  const formatted = new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(value);

  return formatted;
};
