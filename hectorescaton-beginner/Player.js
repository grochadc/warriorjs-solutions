class Player {
  playTurn(warrior) {
    // Cool code goes here.
    let engaged = warrior.health() < this.lastTurnsHP;

    //NOTHING IN current DIRECTION
    if(warrior.feel().isEmpty()){
      if(!engaged && warrior.health() < 20){
        warrior.rest();
      }
      else if(!engaged && warrior.health() == 20){
        warrior.walk();
      }
      else if(engaged){
        let newDir = warrior.health() > 15 ? 'forward' : 'backward';
        warrior.walk(newDir);
      }
    }
    else { //something in front
      if(warrior.feel().getUnit() && warrior.feel().getUnit().isEnemy()){
        warrior.attack();
      } else if(warrior.feel().getUnit() && warrior.feel().getUnit().isBound()){
          warrior.rescue();
        } else {
          warrior.think('Changing direction');
          warrior.pivot();
        }
      }
      this.lastTurnsHP = warrior.health();
   }
}
