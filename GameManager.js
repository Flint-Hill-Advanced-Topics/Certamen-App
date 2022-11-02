class gameManager {
    
    createPlayer(name) {
        return new Player(name);
    }

    createMod() {
        return new Mod();
    }

    startGame() {
        let code = randomCode();
        let mod = createMod();
    }

    randomCode () {
        let allCharNum = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM';// length = 36, index 0 to 35
        let roomCode = '';
        let tempIndex = 0;
        for (let i = 0; i < 6; i++) {
            tempIndex = (Math.random() * 36);
            roomCode += allCharNum.substring(tempIndex, tempIndex + 1);
        }
        roomcode += '√';
        document.querySelector("#GCode")
        return roomCode;
    }
}
