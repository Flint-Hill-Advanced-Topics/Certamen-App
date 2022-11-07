<script>
export default {
    data() {
        return {
            code: "asdf"
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

        <h1> Certamen </h1>

    </div>

    <div class="Bubble"> 
   
        <h2 class="Code">{{code}}</h2>

    <div class="Space"> 
        <h3 id="GCode"> </h3>
    </div>

    <h2 class="People"> People: </h2>

    <div class="Number" id="Number"></div>
        <a class="StartButton" href="mteam.html"> Start </a>
    </div>

    <div class="tag"> Moderator</div>
</template>

<style>
</style>