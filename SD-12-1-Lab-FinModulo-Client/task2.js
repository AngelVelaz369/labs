// Task 2: listUsers()
import { getServerURL } from "./task1.js";

export async function listUsers(){
    try{
        const response = await fetch(`${getServerURL()}/users`);
        const users = await response.json();
        console.log(users);
        return users;
    }catch (error){
        console.log("Error al obtener la lista de usuarios: ", error)
    }
}
