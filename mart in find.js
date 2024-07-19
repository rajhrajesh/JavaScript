const item = "Eggs";
const categoryItem = "Groceries";
let shoppingList = [
  {
    category: "Groceries",
    items: ["Milk", "Eggs", "Bread"],
  },
  {
    category: "Stationery",
    items: ["Notebooks", "Pens", "Markers"],
  },
  {
    category: "Electronics",
    items: ["Laptop", "Smartphone", "Headphones"],
  },
];
const serachItem = () => {
  return new Promise((resolve, reject) => {
    const shoppingObject = shoppingList.find(
      (each) => each.category === categoryItem
    );
    if (shoppingObject !== undefined) {
      const isItemFound = shoppingObject.items.includes(item);
      if (isItemFound) {
        resolve("Item Found");
      } else {
        reject("Item Not Found");
      }
    } else {
      reject("Category NOt Found");
    }
  });
};
const myPromise = async () => {
  try {
    let result = await serachItem();
    console.log(result);
  } catch (reject) {
    console.log(reject);
  }
};
myPromise();
