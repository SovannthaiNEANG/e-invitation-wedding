<template>
  <section class="rsvp-section">
    <v-container>
      <h2 class="section-title text-center">RSVP</h2>

      <v-row justify="center">
        <v-col cols="12" md="6">
          <v-card class="rsvp-card">
            <v-card-title class="text-center gold">
              Confirm Your Attendance
            </v-card-title>

            <v-card-text>
              <v-form @submit.prevent="submitRSVP">
                <v-text-field
                  v-model="name"
                  label="Your Name"
                  variant="outlined"
                />

                <v-text-field
                  v-model="phone"
                  label="Phone Number"
                  variant="outlined"
                />

                <v-select
                  v-model="attendance"
                  :items="['Attending', 'Not Attending']"
                  label="Will you attend?"
                  variant="outlined"
                />

                <v-textarea
                  v-model="message"
                  label="Message"
                  variant="outlined"
                />

                <v-btn type="submit" color="#C8A96A" size="large" block>
                  Send RSVP
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const phone = ref("");
const attendance = ref("");
const message = ref("");

function submitRSVP() {
  console.log({
    name: name.value,
    phone: phone.value,
    attendance: attendance.value,
    message: message.value,
  });

  alert("Thank you for your response!");
}
</script>

<style scoped>
.rsvp-section {
  padding: 120px 20px;

  background:
    linear-gradient(rgba(255, 248, 242, 0.95), rgba(255, 248, 242, 0.95)),
    url("/images/flowers-bg.jpg");

  background-size: cover;
  background-position: center;
}

.section-title {
  font-family: "Playfair Display";
  font-size: 42px;
  margin-bottom: 60px;
}

.rsvp-card {
  padding: 30px;

  border-radius: 24px;

  background: rgba(255, 255, 255, 0.9);

  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.gold {
  color: #c8a96a;
}
</style>
