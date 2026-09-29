// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from "./task1.js";
export async function addUser(first_name, last_name, email){
    try{
        const response = await fetch(`${getServerURL()}/users`)
        const users = await response.json();

        let maxId = 0;
        if(users.length > 0){
            maxId = Math.max(...users.map(u => Number(u.id) || 0));
        }

        const newId = String(maxId + 1);

        const newUser = {
            id: newId,
            first_name,
            last_name,
            email
        };

        const postResponse = await fetch(`${getServerURL()}/users`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });

        const createUser = await postResponse.json();
        console.log(createUser);
        return createUser;
    }catch(error){
        console.log("Error al agregar el usuario: ", error);
    }
}
