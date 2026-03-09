<template>
  <section class="story-section">
    <v-container>
      <h2 class="section-title text-center">Our Love Story</h2>

      <!-- Desktop Timeline -->

      <div class="desktop-timeline">
        <v-timeline align="center">
          <v-timeline-item dot-color="#C8A96A" size="large">
            <v-card class="story-card">
              <v-card-title>First Meet</v-card-title>

              <v-card-text>
                We met for the first time and became friends.
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item dot-color="#C8A96A" size="large">
            <v-card class="story-card">
              <v-card-title>Falling In Love</v-card-title>

              <v-card-text> Our love story began beautifully. </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item dot-color="#C8A96A" size="large">
            <v-card class="story-card">
              <v-card-title>Proposal</v-card-title>

              <v-card-text>
                The unforgettable moment when we decided to spend our lives
                together.
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>

      <!-- Mobile Layout -->

      <div class="mobile-story">
        <v-row>
          <v-col cols="12">
            <v-card class="story-card">
              <v-card-title>First Meet</v-card-title>
              <v-card-text>
                We met for the first time and became friends.
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="story-card">
              <v-card-title>Falling In Love</v-card-title>
              <v-card-text> Our love story began beautifully. </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="story-card">
              <v-card-title>Proposal</v-card-title>
              <v-card-text>
                The unforgettable moment when we decided to spend our lives
                together.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.story-section {
  padding: 120px 20px;

  background:
/* linear-gradient(rgba(232,220,207,0.9),rgba(232,220,207,0.9)), */ url("/img/story-bg.png");

  background-size: cover;
}

/* title */

.section-title {
  font-family: "Playfair Display";
  font-size: 42px;
  margin-bottom: 60px;
}

/* cards */

.story-card {
  border-radius: 20px;
  padding: 10px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* desktop */

.desktop-timeline {
  display: block;
}

/* mobile */

.mobile-story {
  display: none;
}

/* responsive */

@media (max-width: 960px) {
  .desktop-timeline {
    display: none;
  }

  .mobile-story {
    display: block;
  }
}
</style>
