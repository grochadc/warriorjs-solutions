class Player {
  playTurn(warrior) {
    // Cool code goes here.
    let engaged = warrior.health() < this.lastTurnsHP;

    if(warrior.feel().isEmpty()){
      if(!engaged && warrior.health() < 20){
        warrior.rest();
      } else { //nothing in front
        warrior.walk();
      }
    }
    else { //something in front
     warrior.attack();
   }
   this.lastTurnsHP = warrior.health();
  }
}
