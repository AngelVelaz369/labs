export class Player {
    constructor(name, level = 1, xp = 0) {
      this.name = name;
      this.level = level;
      this.xp = xp;      
    }
    info(){
      return `${this.name} has reached Level ${this.level} with ${this.xp} XP!`;
    }
    levelUp(){
      this.level++;
    }
    gainXp(amount){
      this.xp += amount;
      //Cada 100 puntos de XP sube de nivel 
      while (this.xp >= 100){
        this.xp -= 100;
        this.levelUp();
      }
    }
  }