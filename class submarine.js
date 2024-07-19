class Submarine {
    constructor() {
      this.isSubmerged = false;
    }
  
    dive() {
      this.isSubmerged = true;
      console.log("Submarine Submerged");
    }
  
    surface() {
      this.isSubmerged = false;
      console.log("Submarine Surface");
    }
  }
  
  class WeaponUnit extends Submarine {
    constructor(totalTorpedos, torpedosFired) {
      super();
      this.totalTorpedos = totalTorpedos;
      this.torpedosFired = torpedosFired;
    }
  
    fireTorpedos() {
      this.totalTorpedos -= this.torpedosFired;
      console.log(`${this.torpedosFired} Torpedos Fired. ${this.totalTorpedos} Left.`);
    }
  }
  
  const weaponUnit1 = new WeaponUnit(5, 3);
  weaponUnit1.dive(); // Output: Submarine Submerged
  weaponUnit1.fireTorpedos(); // Output: 3 Torpedos Fired. 2 Left.
  weaponUnit1.surface(); // Output: Submarine Surface
  