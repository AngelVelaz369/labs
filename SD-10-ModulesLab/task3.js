export function ageCalculator(y, m, d) {
    let today = new Date();
    let birthday = new Date(y, m, d);
    let age = today.getFullYear() - birthday.getFullYear();
    let theMonth = today.getMonth() - birthday.getMonth();

    if(theMonth < 0 || (theMonth === 0 && today.getDate() < birthday.getDate())){
        age--;
    }
    return age;
}