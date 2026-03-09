<template>
  <v-app>
    <v-main class="default-layout">
      <slot />
    </v-main>
  </v-app>
</template>
<style scoped>
.default-layout {
  background: url("/img/hero.png");
  background-size: cover;
  background-position: center;
}
</style>