<script>
import './GameManager.js'
export default {
    data() {
        return {
            
        }
    },
    methods: {
        print() {
            test();
        }
    }
}
</script>

<template>
    <div class="content">
        <h1>Certamen</h1>
    </div>
    <div v-on:click="print" class="Moderator"> 
       <a class="ModeratorButton" href="moderator.vue">Moderator</a>
   </div>

   <div class="logo"> <!--this will be an image once the logo is made. For now, it will be a circle--> 
       <img v-bind:src="'assets/SPQR3.png'" alt="image"><img>
   </div>
       
   <div class="Player"> 
       <a class="PlayerButton" href="player.vue" > Player </a>
   </div>
</template>

<style>

/*Downloaded Fonts are located Below
 */
/*Roboto*/
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body{
    height: 1000px;
    background-image: linear-gradient(132deg, purple, goldenrod);
    background-repeat: no-repeat;
}

.content{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
.content h1{
    text-align: center;
    font-weight: bold;
    font-size: 80px;
    text-transform: uppercase;
    margin-top: 90px;
    margin-bottom:  100px;
}

a{
    text-decoration: none;
    color:  white;
}

.Moderator{
    text-align: center;
    background: maroon;
    border-radius: 25px;
    border-radius: 30px;
    border-bottom: 1px solid;
    border-color: goldenrod;
    width:  200px;
    margin: 0 auto;
    padding: 20px 50px;
}

.Moderator:hover{
  background: goldenrod;
  border-color: white;
}


.logo{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 50px;
    margin-top: 50px;
    align-self: center;
    background: maroon;
}

.logo img{
  width: 100%;
  height: 100%;
  object-fit: contain;
  align-self: center;
  
}

.Player{
    text-align: center;
    color: white;
    background: maroon;
    border-radius: 25px;
    border-bottom: 1px solid;
    border-color: goldenrod;
    width:  200px;
    margin: 0 auto;
    padding: 20px 50px;
}

.Player:hover{
  background: goldenrod;
  border-color: white;
}
</style>