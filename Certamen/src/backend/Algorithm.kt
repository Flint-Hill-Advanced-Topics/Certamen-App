package src.backend

class Algorithms {

    fun main{
        println(roomCode)
    }

    //random room code generator
    fun roomCode(): Int {
        val num = "0123456789QWERTYUIOPASDFGHJKLZXCVBNM"//length 36
        var enter = ""
        var tempIndex = 0;
        for (i in 0..4) { // 5 alphanumerics
            tempIndex = Random.nextInt(0, 35)//random index 0 to 35
            enter += num.subSequence(tempIndex, tempIndex + 1)
        }
        println(enter)
    }

    fun buzzOrder() {

        if (buzzActivated()) {

        }
    }