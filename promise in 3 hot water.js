const isWater = true;
const isBreak = true; // Assuming breakfast is available

const shower = () => {
  return new Promise((resolve, reject) => {
    isWater ? resolve("Took Shower") : reject("Hot Water not Ready");
  });
};

const breakfast = () => {
  return new Promise((resolve, reject) => {
    isBreak ? resolve("Had Breakfast") : reject("No Breakfast");
  });
};

const work = () => {
  return new Promise((resolve, reject) => {
    resolve("Went to Work");
  });
};

const myPromise = async () => {
  try {
    console.log(await shower());
    console.log(await work());
    console.log(await breakfast());
  } catch (error) {
    console.error(error); // Handle errors if promises reject
  }
};

myPromise();
