

// Type your code below this line!

function FriendList(namesArray){
    this.names = namesArray;
}

const cont = parseInt(process.argv[3]);
const friendsNames = [];

for (let i = 0; i < cont; i++){
    friendsNames.push(process.argv[4 + i]);
}

if(friendsNames.length > 1 && friendsNames[1] === 'Sam'){
    friendsNames.splice(1, 1, 'Sami');
}

const myList = new FriendList(friendsNames);

console.log(myList.names);

// Type your code above this line!

