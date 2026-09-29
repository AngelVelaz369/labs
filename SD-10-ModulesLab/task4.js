export class FriendAge {
    constructor(name, year, month, day){
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }
    returnAge(){
        let today4 = new Date();
        let birthday4 = new Date(this.year, this.month, this.day);
        let age4 = today4.getFullYear() - birthday4.getFullYear();
        let month4 = today4.getMonth() - birthday4.getMonth();

        if (month4 < 0 || (month4 === 0 && today4.getDate() < birthday4.getDate())){
            age4--;
        }
        return `${this.name} is ${age4} today!`;
    }
}