const father = {
  name: "John",
  location: "New York",
};

const mother = {
  dish: "Lasagna",
};

const child = {
  pet: "Dog",
};

const family = {
    ...father,
    ...mother,
    ...child
}
console.log(`Mr and Mrs ${family.name} went to a picnic in ${family.location} with a boy and a pet ${family.pet}. Mrs ${family.name} made a speacial dish "${family.dish}".`)