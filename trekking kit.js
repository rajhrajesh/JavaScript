let trekkingKit = {
    backpack: {
        included: true,
        brand: 'Osprey',
        capacityLiters: 50
    },
    hikingBoots: {
        included: true,
        brand: 'Salomon',
        size: 'US 10'
    },
    waterBottle: {
        included: true,
        capacityLiters: 2,
        material: 'Stainless Steel'
    },
    mapAndCompass: {
        included: true,
        type: 'Topographic map',
        compassType: 'Magnetic'
    },
    firstAidKit: {
        included: true,
        items: ['Bandages', 'Antiseptic wipes', 'Pain relievers']
    },
    sunscreen: {
        included: true,
        SPF: 50,
        type: 'Water-resistant'
    },
    flashlight: {
        included: true,
        type: 'LED headlamp',
        brightness: '600 lumens'
    },
    extraClothing: {
        included: true,
        items: ['Rain jacket', 'Extra socks']
    }
};

let item = "extraClothing"
let isItem = Object.getOwnPropertyNames(trekkingKit)
let result = isItem.some(each => each === item) 
console.log(result) 