function Circle(radius) {
  this.radius = radius;
  this.PI = 3.14;

  // Method to calculate area
  this.getArea = function () {
    return this.PI * this.radius * this.radius;
  };

  // Method to calculate circumference
  this.getCircumference = function () {
    return 2 * this.PI * this.radius;
  };
}

const result = new Circle(7);
console.log(result.getArea());
console.log(result.getCircumference());
