<template>
  <section class="payment-section text-center">

    <v-container class="text-center">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <h2 class="section-title">Wedding Gift</h2>
  
          <p class="section-subtitle">
            Your presence is the greatest gift.  
            If you wish to bless us with a gift, you can scan the QR code below.
          </p>
  
          <v-card class="payment-card pa-6" elevation="6">
            <div class="d-flex">
              <v-img
                src="/img/aba.jpg"
                max-width="260"
                class="mx-auto qr-image"
              />
              <v-img
                src="/img/ac.jpg"
                max-width="260"
                class="mx-auto qr-image"
              />
            </div>
  
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
  </section>
</template>

<style scoped>
.payment-section {
  background: url('/img/payment-bg.png');
  background-size: cover;
  background-position: center;
  padding: 0px;
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