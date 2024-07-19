const dayCharges = [
  {
    dailyCharge: 100, // daily charge in some currency
    days: 30, // number of days
  },
  {
    dailyCharge: 150, // daily charge in some currency
    days: 45, // number of days
  },
  {
    dailyCharge: 200, // daily charge in some currency
    days: 60, // number of days
  },
];

function totalbill(dailyCharge, days) {
  let totalBill = 0;
  let discount = 0;
  if (days <= 2) {
    discount = 0;
  } else if (days > 2 && days <= 5) {
    discount = 5;
  }
  discount = 15;
  let bill = dailyCharge * days;
  let discountRate = bill - (bill * discount) / 100;
  console.log(Math.ceil(discountRate));
}

const findArray = dayCharges.map((eachArr) =>
  totalbill(eachArr.dailyCharge, eachArr.days)
);
