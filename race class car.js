class Race {
  constructor(playerName) {
    this.playerName = playerName;
  }

  started() {
    return "Race has started";
  }
  ended() {
    return `${this.playerName} is the winner`;
  }
}

class Car extends Race {
  constructor(playerName, nitro, speed) {
    super(playerName);
    this.nitro = nitro;
    this.speed = speed;
  }
  applybreak(){
    this.speed = 0
  }

nitrospeed(){
    if(this.nitro > 0){
        this.nitro -= 50
        this.speed += 50
    }
}
accelerate(){
    this.nitro += 10 
    this.speed += 20
}
}

const car1 = new Car("Rajh Rajesh", 50, 25)
car1.accelerate()
console.log(`Speed ${car1.speed} , ${car1.nitro}`)
car1.nitrospeed()
console.log(`Speed ${car1.speed}, ${car1.nitro}`)
console.log(car1.started())







