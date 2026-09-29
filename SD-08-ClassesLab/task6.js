export class Player {
    static party =[];

    constructor(name, level) {
      this.name = name;
      this.level = level;      
    }
    info(){
      return `${this.name} has reached Level ${this.level}!`;
    }
    levelUp(){
      this.level++;
    }  
    static addToParty(player){
      if(!Player.party.includes(player)){
        Player.party.push(player);
      }
    }
    static removeFromParty(playerName){
      Player.party = Player.party.filter(player => player.name !== playerName);
    }    
  }