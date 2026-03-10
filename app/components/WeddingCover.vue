<template>
  <v-container fluid class="cover-container pa-0">
    <div class="cover-wrapper">
      
      <!-- Background -->
      <div class="cover-bg"></div>

      <!-- Content -->
      <div class="cover-content text-center">
        <p class="subtitle">The Wedding of</p>

        <h1 class="name">Sovannthai</h1>
        <h2 class="and">&</h2>
        <h1 class="name">Soheng</h1>

        <p class="date">19.12.2026</p>
        <EnvelopeOpen/>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import EnvelopeOpen from './EnvelopeOpen.vue';

</script>

<style scoped>

.cover-container{
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
}

/* wrapper */
.cover-wrapper{
  position:relative;
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
}

/* background */
.cover-bg{
  position:absolute;
  inset:0;
  /* background-image:url('@/assets/wedding.png'); your image */
  background: url("/img/wedding.png");;
  background-size:cover;
  background-position:center;
  z-index:0;
}

/* content */
.cover-content{
  position:relative;
  z-index:2;
  color:#2e5c3d;
}

/* text styles */

.subtitle{
  font-size:22px;
  letter-spacing:1px;
  margin-bottom:10px;
}

.name{
  font-size:70px;
  font-weight:500;
  line-height:1.1;
}

.and{
  font-size:50px;
  margin:10px 0;
}

.date{
  font-size:24px;
  margin-top:25px;
  letter-spacing:2px;
}


/* -------- Mobile -------- */

@media (max-width: 600px){

.name{
  font-size:42px;
}

.and{
  font-size:32px;
}

.subtitle{
  font-size:16px;
}

.date{
  font-size:18px;
}

}

</style>