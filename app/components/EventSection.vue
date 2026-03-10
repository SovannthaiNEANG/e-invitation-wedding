<template>
  <section class="event-section">
    <v-container class="text-center">
      <h2 class="section-title">Wedding Event</h2>

      <v-row justify="center" class="mt-10">
        <v-col cols="12" md="4">
          <v-card class="event-card">
            <v-card-title class="gold"> Ceremony </v-card-title>

            <v-card-text>
              <p>20 December 2026</p>

              <p>09:00 AM</p>

              <p>Phnom Penh</p>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="4">
          <v-card class="event-card">
            <v-card-title class="gold"> Reception </v-card-title>

            <v-card-text>
              <p>20 December 2026</p>

              <p>06:00 PM</p>

              <p>Phnom Penh</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.event-section {
  padding: 120px 20px;

  background: #fff8f2;
}

.section-title {
  font-size: 42px;
}

.event-card {
  padding: 30px;

  border-radius: 24px;

  background: white;

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);

  transition: 0.3s;
}

.event-card:hover {
  transform: translateY(-8px);
}

.gold {
  color: #c8a96a;

  font-weight: 600;
}
</style>
