const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('T-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Diplodocus', 'veggie', 25);
    dinosaur3 = new Dinosaur('Veloceraptor', 'carnivore', 45);
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3];
    park = new Park('Jurassic Park', 10);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function() {
    const actual = park.price;
    assert.strictEqual(actual, 10)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.countDinos();
    assert.strictEqual(actual, 3);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinos(dinosaur1);
    const actual = park.countDinos();
    assert.strictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinos(dinosaur1);
    const actual = park.countDinos();
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostPopularDino();
    assert.strictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = park.findDinoSpecies('T-rex');
    assert.strictEqual(actual, dinosaur1);
  });

  it('should be able to calculate the number of visitors', function(){
    const actual = park.calculateVisitors();
    assert.strictEqual(actual, 120)
  });

  it('should be able to calculate the number of visitors per year', function(){
    const actual = park.yearlyVisitors();
    assert.strictEqual(actual, 43800)
  });

  it('should be able to calculate total revenue', function(){
    const actual = park.ticketRevenue();
    assert.strictEqual(actual, 438000)
  });

  // it('should be able to remove all dinosaurs of a particular species', function(){
  //   const actual = park.removeSpecies('Veloceraptor');
  //   assert.strictEqual(actual, dinosaur3);
  // });

});
