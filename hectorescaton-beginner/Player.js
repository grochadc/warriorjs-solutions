class Player {
  playTurn(warrior) {
    // Cool code goes here.
    let engaged = warrior.health() < this.lastTurnsHP;
    if(warrior.look()[0].getUnit() && warrior.look()[0].getUnit().isEnemy()){
      warrior.shoot();
      return;
    }

    //NOTHING IN current DIRECTION
    if(warrior.feel().isEmpty()){
      if(!engaged && warrior.health() < 20){
        warrior.rest();
      }
      else if(!engaged && warrior.health() == 20){
        warrior.walk();
      }
      else if(engaged){
        if(warrior.look()[1].getUnit() && warrior.look()[1].getUnit().isEnemy()){
          warrior.shoot();
          return;
        }
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
