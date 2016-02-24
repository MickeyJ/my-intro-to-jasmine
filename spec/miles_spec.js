var miles = require('../lib/miles.js');

describe("Miles", function() {

  it('is true', function() {

    var car = {
      milesPG: 20,
      tankGal: 3
    };

    var route = {
      miles: 200,
      destination: 'Boulder',
      location: 'Fancy Land'
    };

    expect(miles.hasEnoughGas(car, route)).toEqual(false)
  });

});