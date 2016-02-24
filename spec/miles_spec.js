var miles = require('../lib/miles.js');

describe("Car can", function() {

  it('go the distance', function() {

    var car = {
      milesPG: 20,
      tankGal: 3,
      addGas: function(n){
        this.tankGal += n

      }
    };

    var route = {
      miles: 200,
      destination: 'Boulder',
      location: 'Fancy Land'
    };

    expect(miles.hasEnoughGas(car, route)).toEqual(false);

    car.addGas(20);

    expect(miles.hasEnoughGas(car, route)).toEqual(true);


  });

});