function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom") }

function Dog() { }

// inherite properties/methods from Animal
Dog.prototype = Object.create(Animal.prototype);
// we have to reasign constructor otherwise it still going to be have Animal value.
// each time we inharite objects props from another object we have to change
Dog.prototype.constructor = Dog;
// add method after inheritance
Dog.prototype.bark = function() {
    console.log("Woof!")
}

let beagle = new Dog();

console.log(beagle.eat()) // Should print "nom nom nom"
console.log(beagle.bark()) // Should print "Woof!"
