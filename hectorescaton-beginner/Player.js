class Player {
  playTurn(warrior) {
    // Cool code goes here.
    let engaged = warrior.health() < this.lastTurnsHP;
    this.direction = this.direction ? this.direction : 'backward';

    //NOTHING IN current DIRECTION
    if(warrior.feel(this.direction).isEmpty()){
      if(!engaged && warrior.health() < 20){
        warrior.rest();
      }
      else if(!engaged && warrior.health() == 20){
        warrior.walk(this.direction);
      }
      else if(engaged){
        let newDir = warrior.health() > 15 ? 'forward' : 'backward';
        warrior.walk(newDir);
      }
    }
    else { //something in front
      if(warrior.feel(this.direction).getUnit() && warrior.feel(this.direction).getUnit().isEnemy()){
        warrior.attack(this.direction);
      } else {
        if(warrior.feel(this.direction).getUnit() && warrior.feel(this.direction).getUnit().isBound()){
            warrior.rescue(this.direction);
        } else {
          warrior.think('Changing direction');
          this.direction = 'forward';
        }
      }
   }
   this.lastTurnsHP = warrior.health();
  }
}
