function Animal(name,age,sound,region){
   this.name=name;
   this.age = age;
   this.sound = sound;
   this.region = region;
   this.say = function say(){
      console.log(sound);
   }
}

function Dog(name,age,sound,region){
   Dog.prototype.constructor.apply(this, arguments);
   this.goAway = function(){
      console.log("Dog went away");
   }
}
Dog.prototype = Object.create(Animal.prototype);

function Cat(name,age,sound,region){
   Cat.prototype.constructor.apply(this, arguments);
   this.goAway = function(){
      console.log("Cat went away");
   }
}
Cat.prototype = Object.create(Animal.prototype);

function Woodpecker(name,age,sound,region){
   Woodpecker.prototype.constructor.apply(this, arguments);
   this.goAway = function(){
      console.log("Woodpecker went away");
   }
}
Woodpecker.prototype = Object.create(Animal.prototype);

function getType(obj){
   if(obj.hasOwnProperty("goAwayDog"))
      return Dog;
   if(obj.hasOwnProperty("goAwayCat"))
      return Cat;
   if(obj.hasOwnProperty("goAwayWoodpecker"))
      return Woodpecker;
}

function getTypeModified(){
   if(this.hasOwnProperty("goAwayDog"))
      return Dog;
   if(this.hasOwnProperty("goAwayCat"))
      return Cat;
   if(this.hasOwnProperty("goAwayWoodpecker"))
      return Woodpecker;
}

var dog = new Dog("Velosiped", 2,"Bork");
var cat = new Cat("Samokat", 3, "Myaaww");
var woody = new Woodpecker("Smeshno", 5, "Stuk stuk");
dog.say();
cat.say();
woody.say();

console.log(getType(dog));
console.log(getTypeModified.apply(cat));