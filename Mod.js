class Mod extends User {
    roomCode = "";

    






    randomCode () {
        let allCharNum = '0123456789QWERTYUIOPASDFGHJKLZXCVBNM';// length = 36, index 0 to 35
        let enter = '';
        let tempIndex = 0;
        for (let i = 0; i < 5; i++) {
            tempIndex = (Math.random() * 36);
            enter += allCharNum.substring(tempIndex, tempIndex + 1);
        }
        this.roomCode = enter;
    };
}