export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level;
      this.inventory = [];      
    }
    info(){
      return `${this.name} has reached Level ${this.level}!`;
    }
    levelUp(){
      this.level++;
    }
    addItem(item){
      this.inventory.push(item);
    }
    removeItem(item){
      const index = this.inventory.indexOf(item);
      if(index !== -1){
        this.inventory.splice(index , 1);
      }
    }
    showInventory(){
      return `${this.name}'s inventory: ${this.inventory.join(', ')}`;
    }
  }