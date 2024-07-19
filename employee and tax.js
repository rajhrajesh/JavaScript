function Employee(name, role, salary) {
  this.name = name;
  this.role = role;
  this.salary = salary;
}

Employee.prototype.getTaxAmount = function () {
  let taxPercent = 0; // Initialize taxPercent locally

  if (this.salary >= 1000000) {
    taxPercent = 10;
  } else if (this.salary >= 500000) {
    taxPercent = 5;
  }
  // No need for an else, as taxPercent is already initialized to 0

  return (this.salary * taxPercent) / 100;
};

const employee1 = new Employee("Rajesh", "Software Developer", 500000);
console.log(employee1.getTaxAmount()); // Output: 0 (since salary < 500000)
