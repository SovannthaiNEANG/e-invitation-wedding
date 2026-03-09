<template>
  <section class="hero">
    <v-container
      class="text-center fill-height d-flex align-center justify-center"
    >
      <div>
        <h1 class="hero-title">Sovannthai & Soheng</h1>

        <p class="hero-subtitle">We Are Getting Married</p>

        <p class="hero-date">19th December 2026</p>

        <v-btn color="#C8A96A" size="large" rounded> Open Invitation </v-btn>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;

  background:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/img/hero.png");

  background-size: cover;
  background-position: center;

  color: white;
}

.hero-title {
  font-family: "Playfair Display";
  font-size: 64px;
}

.hero-subtitle {
  font-size: 22px;
  margin: 10px 0;
}

.hero-date {
  color: #c8a96a;
  font-size: 24px;
}
</style>
