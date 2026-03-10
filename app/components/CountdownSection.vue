<script setup>
import { ref, onMounted } from "vue"

const days = ref("00")
const hours = ref("00")
const minutes = ref("00")
const seconds = ref("00")

const weddingDate = new Date("2026-12-20T09:00:00")

function updateCountdown() {

  const now = new Date()
  const diff = weddingDate - now

  if (diff <= 0) return

  const d = Math.floor(diff / (1000 * 60 * 60 * 24))
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const m = Math.floor((diff / (1000 * 60)) % 60)
  const s = Math.floor((diff / 1000) % 60)

  days.value = String(d).padStart(2, "0")
  hours.value = String(h).padStart(2, "0")
  minutes.value = String(m).padStart(2, "0")
  seconds.value = String(s).padStart(2, "0")
}

onMounted(() => {

  updateCountdown()

  setInterval(updateCountdown, 1000)

})
</script>

<template>

<section class="countdown-section">

<v-container class="text-center">

<h2 class="countdown-title text-xxxl">
Our Wedding Day
</h2>

<v-row justify="center" class="mt-10">

<v-col cols="6" md="2">

<div class="count-card">
<h2>{{ days }}</h2>
<p>Days</p>
</div>

</v-col>

<v-col cols="6" md="2">

<div class="count-card">
<h2>{{ hours }}</h2>
<p>Hours</p>
</div>

</v-col>

<v-col cols="6" md="2">

<div class="count-card">
<h2>{{ minutes }}</h2>
<p>Minutes</p>
</div>

</v-col>

<v-col cols="6" md="2">

<div class="count-card">
<h2>{{ seconds }}</h2>
<p>Seconds</p>
</div>

</v-col>

</v-row>

</v-container>

</section>

</template>

<style scoped>

.countdown-section{

padding:120px 20px;

background:
url('/img/flowers-bg.png');
/* background:
linear-gradient(rgba(255,248,242,.95),rgba(255,248,242,.95)),
url('/img/flowers-bg.png'); */

background-size:cover;
background-position:center;

}

.countdown-title{

font-size:42px;

}

/* glass cards */

.count-card{

background:rgba(255,255,255,0.6);

backdrop-filter:blur(10px);

padding:30px;

border-radius:20px;

box-shadow:0 10px 30px rgba(0,0,0,0.15);

transition:0.3s;

}

.count-card:hover{

transform:translateY(-6px);

}

.count-card h2{

font-size:36px;
color:#C8A96A;

}

</style>