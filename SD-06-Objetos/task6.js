

// Type your code below this line!
function ShoppingList(itemsArray){
    this.items = itemsArray;
}

const totalItems = parseInt(process.argv[3]);
const shoppingItems = [];

for (let i = 0; i < totalItems; i++){
    shoppingItems.push(process.argv[4 + i]);
}

const myLyst = new ShoppingList( shoppingItems);

console.log(myLyst.items);


// Type your code above this line!

