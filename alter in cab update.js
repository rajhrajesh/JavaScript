function createCabBooking(area, city){
    return {
        area, city,
        updatePickupPoint: function (newAres,newCity) {
            this.area = newAres,
            this.city = newCity
        }
    }
}


const cabBooking1 = createCabBooking("Kallakurichi","Anna Nagar")
cabBooking1.updatePickupPoint("Salem","RajhDoot") 
cabBooking1.updatePickupPoint("Thandalai","North Steet")
console.log(`${cabBooking1.area} ${cabBooking1.city}`)