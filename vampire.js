class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(offspring) {
    this.offspring.push(offspring);
    offspring.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVampires = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampires++;
    }
    return numberOfVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if ((this.numberOfVampiresFromOriginal - vampire.numberOfVampiresFromOriginal) < 0) {
      return true;
    }
    return false;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
}

module.exports = Vampire;

const original = new Vampire('Original', 1789);
const ansel = new Vampire('Ansel', 1811);
const bart = new Vampire('Bart', 1820);
const elgort = new Vampire('Elgort', 1849);
const sarah = new Vampire('Sarah', 1860);
const andrew = new Vampire('Andrew', 1900);

original.addOffspring(ansel);
original.addOffspring(bart);
ansel.addOffspring(elgort);
ansel.addOffspring(sarah);
elgort.addOffspring(andrew);

console.log('creator of elgort: ', elgort.creator);

console.log('elgort number of offspring: ', elgort.numberOfOffspring);
console.log('original number of offsrping: ', original.numberOfOffspring);

console.log('number of vampires from orginal (andrew): ', andrew.numberOfVampiresFromOriginal);
console.log('number of vampires from orginal (elgort): ', elgort.numberOfVampiresFromOriginal);
console.log('number of vampires from orginal (bart): ', bart.numberOfVampiresFromOriginal);

console.log('original is more senior than ansel: ', original.isMoreSeniorThan(ansel));  //true
console.log('elgort is more senior than andrew: ', elgort.isMoreSeniorThan(andrew));  //true
console.log('andrew is more senior than ansel: ', andrew.isMoreSeniorThan(ansel));  //false
console.log('ansel is more senior than andrew: ', ansel.isMoreSeniorThan(andrew));  //true
