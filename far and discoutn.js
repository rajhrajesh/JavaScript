function Ride(fare, distance) {
  (this.fare = fare),
    (this.distance = distance),
    (this.getFarPerKilometer = () => {
        return this.distance / this.fare
    });
}

const ride1 = new Ride(6, 120);
console.log(ride1.getFarPerKilometer())
