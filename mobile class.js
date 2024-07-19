class Mobile {
  constructor(brand, ram, batteryStatus, song, isCallingProgress) {
    (this.brand = brand),
      (this.ram = ram),
      (this.batteryStatus = batteryStatus),
      (this.song = song),
      (this.isCallingProgress = isCallingProgress);
  }
  playMusic() {
    console.log(`Playing ${this.song} Song`);
  }
  stopMusic() {
    console.log("Music Stopped");
  }
  fullCharge() {
    this.batteryStatus < 100
      ? ((this.batteryStatus = 100), console.log("Mobile Fully Charged"))
      : console.log("Mobile Already Fully Charged");
  }
  makeCall() {
    this.isCallingProgress = true;
    console.log("Calling....");
  }
  endCall() {
    this.isCallingProgress === false
      ? console.log("No Ongoing Call to End")
      : ((this.isCallingProgress = true), console.log("Call Ended"));
  }
}
const myMobile = new Mobile("apple", "4GB", 68, "Safari", true);
myMobile.endCall()
myMobile.makeCall()
console.log(myMobile.brand)
