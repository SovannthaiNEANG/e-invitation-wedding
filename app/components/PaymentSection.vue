<template>
  <v-container class="payment-section text-center">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h2 class="section-title">Wedding Gift</h2>

        <p class="section-subtitle">
          Your presence is the greatest gift.  
          If you wish to bless us with a gift, you can scan the QR code below.
        </p>

        <v-card class="payment-card pa-6" elevation="6">
          <v-img
            src="/img/aba.jpg"
            max-width="260"
            class="mx-auto qr-image"
          />

          <div class="mt-4">
            <h3 class="account-name">Sovannthai & Partner</h3>
            <p class="bank-name">KHQR Payment</p>
          </div>

          <p class="thank-text mt-4">
            Thank you for your love and support ❤️
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.payment-section {
  padding: 120px 20px;
  background: linear-gradient(
      rgba(255,255,255,0.9),
      rgba(255,255,255,0.9)
    ),
    url('/images/payment-bg.jpg');
  background-size: cover;
}

.section-title {
  font-size: 36px;
  color: #b76e79;
  margin-bottom: 10px;
}

.section-subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
}

.payment-card {
  border-radius: 20px;
  background: white;
}

.qr-image {
  border-radius: 12px;
}

.account-name {
  font-weight: bold;
  font-size: 20px;
}

.bank-name {
  color: #888;
}

.thank-text {
  font-style: italic;
  color: #b76e79;
}

</style>