// Task 4: delUser(number)
import { getServerURL } from "./task1.js";
export async function delUser(id){
    try {
        const response = await fetch(`${getServerURL()}/users/${id}`, {
            method: 'DELETE'
        });

        if (response.ok){
            return true;
        } else {
            console.error(`No se pudo eliminar el usuario con ID ${id}`);
            return false;
        }
    }catch (error) {
        console.error("Error al eliminar el usuario: ", error);
    }
}


