const items = [
  {
    expiryDate: "2024-12-31", // expiry date in YYYY-MM-DD format
    monthsBefore: 6, // number of months before expiry
  },
  {
    expiryDate: "2025-03-15", // expiry date in YYYY-MM-DD format
    monthsBefore: 3, // number of months before expiry
  },
  {
    expiryDate: "2020-01-21", // expiry date in YYYY-MM-DD format
    monthsBefore: 8, // number of months before expiry
  },
];

function findExpiry(expiryDate, monthsBefore) {
  const date = new Date(expiryDate);
  date.setMonth(date.getMonth() - monthsBefore);
  console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);
}
const eachArr = items.map((eachArr) =>
  findExpiry(eachArr.expiryDate, eachArr.monthsBefore)
);
