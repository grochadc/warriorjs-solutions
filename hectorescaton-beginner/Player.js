
class Player {

  playTurn(warrior) {
    if(warrior.feel('backward').isEmpty()){
      warrior.walk('backward');
    } else if(warrior.feel('backward').getUnit().isBound()){
      warrior.rescue('backward');
    } else {
      warrior.attack('backward');
    }
  }
}
