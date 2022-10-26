class Player extends User {
    name = null;
    team = null;
    id = null;


    constructor(name){
        this.name = name;
    }

    set setTeam(team) {
        this.name = name;
    }

    get getName(){
        return this.name;
    }

    get isMod() {
        return false;
    }
    
    get getTeam() {
        return team;
    }
}