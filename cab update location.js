function createDelivery(pickupLocation) {
  return {
    pickupLocation: pickupLocation,
    area: null,
    city: null,
    updateLocation(newArea, newCity) {
      this.area = newArea;
      this.city = newCity;
    },
    getLocation() {
      return `Pickup Location: ${this.pickupLocation}, Area: ${this.area}, City: ${this.city}`;
    },
  };
}

const delivery = createDelivery("Warehouse 1");
delivery.updateLocation("Downtown", "Metropolis");
delivery.updateLocation("Kallakurichi", "Anna Nagar");
console.log(delivery.getLocation());


