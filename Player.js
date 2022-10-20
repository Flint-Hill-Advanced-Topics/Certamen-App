class Player extends User {
    name = "";
    constructor(name){
        this.name = name;
    }

    get getName(){
        return this.name;
    }

}