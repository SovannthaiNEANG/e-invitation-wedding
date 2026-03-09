<script setup>
import { ref } from "vue";

const opened = ref(false);

function openInvitation() {
  opened.value = true;
}
</script>

<template>
  <div v-if="!opened" class="envelope-page">
    <div class="envelope-card">
      <h2>You Are Invited</h2>

      <p>Sovannthai & Bride Wedding</p>

      <v-btn color="#C8A96A" size="large" rounded @click="openInvitation">
        Open Invitation
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
.envelope-page {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: #fff8f2;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;
}

.envelope-card {
  background: white;
  padding: 60px;

  border-radius: 20px;

  text-align: center;

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}
</style>
