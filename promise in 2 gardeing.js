const isGrass = true;
const isWater = true;

const cuttingGrass = () => {
    return new Promise((resolve, reject) => {
        isGrass ? resolve("Grass Trimmed") : reject("Grass Not Trimmed");
    });
};

const cleaning = () => {
    return new Promise((resolve, reject) => {
        resolve("Garden Cleaned");
    });
};

const wateringPlants = () => {
    return new Promise((resolve, reject) => {
        isWater ? resolve("Watered Plants") : reject("Water Hose Not Found");
    });
};

const myPromise = async () => {
    try {
        const firstTask = await cuttingGrass();
        console.log(firstTask);
        
        const secondTask = await cleaning();
        console.log(secondTask);
        
        const thirdTask = await wateringPlants();
        console.log(thirdTask);
    } catch (error) {
        console.log(error);
    }
};

// Call myPromise function to start the tasks
myPromise();
