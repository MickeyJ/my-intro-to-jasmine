module.exports = {

  hasEnoughGas: function(a, b){
    return (a.milesPG * a.tankGal) > b.miles;
  }
};