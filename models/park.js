const Park = function(name, price) {

this.name = name
this.price = price
this.dinosaurs = dinosaurs

};

Park.prototype.countDinos = function () {
  return this.dinosaurs.length;
};

Park.prototype.addDinos = function (dinosaur) {
  this.dinosaurs.push(dinosaur)
};

Park.prototype.removeDinos = function (dinosaur) {
const position = this.dinosaurs.indexOf(dinosaur)
this.dinosaurs.splice(position, 1)
};

Park.prototype.mostPopularDino = function () {
 const sortedDinos = this.dinosaurs.sort(function(a, b)
 {return b.guestsAttractedPerDay - a.guestsAttractedPerDay;})

 return sortedDinos[0];
};

Park.prototype.findDinoSpecies = function () {
  const findSpecies = this.dinosaurs.find(function(a)
  {return a.species});
  return findSpecies;
};

Park.prototype.calculateVisitors = function () {
  total = 0;
  for (dino of this.dinosaurs)
  total += dino.guestsAttractedPerDay
  return total;
};

Park.prototype.yearlyVisitors = function () {
  return this.calculateVisitors() * 365
};

Park.prototype.ticketRevenue = function () {
  return this.yearlyVisitors() * this.price
};



module.exports = Park;
