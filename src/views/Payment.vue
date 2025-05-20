<template>
    <section class="login-banner">
        <router-link class="login-logo" to="/">
            <img src="@/assets/images/login-logo.png" alt="Logo" />
        </router-link>
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-6 p-0 align-self-start d-none d-md-block">
                    <img src="@/assets/images/cover.png" alt="Cover" class="w-100" />
                </div>
                <div class="col-md-6 payment">
                    <div class="payment-container">
                        <h4 class="text-center mb-3">Choose a Payment Plan</h4>
                        <p class="text-center small">
                            <label>
                                <input type="radio" name="pricing" value="monthly" v-model="plan">
                                <strong>Monthly:</strong> $30/month
                            </label><br>
                            <label>
                                <input type="radio" name="pricing" value="yearly" v-model="plan">
                                <strong>Yearly:</strong> $300/year <span class="text-success">(Save $60 annually)</span>
                            </label>
                        </p>
                        <h5>Enter your card details</h5>
                        <div class="wrapper">
                            <div class="inner-wrapper">
                                <h4>Payment Information</h4>
                                <div id="card-element" class="mb-3"></div>
                                <div v-if="cardError" class="text-danger mb-2">{{ cardError }}</div>
                            </div>
                            <div class="d-flex button-wrapper">
                                <button class="btn btn-danger w-100">Remove</button>
                                <button class="btn btn-secondary w-100">Cancel</button> 
                                <button class="btn btn-success w-100" :disabled="loading || !agreed" @click="pay">
                                    {{ loading ? 'Processing...' : 'Post Your Ad' }}
                                </button>
                            </div>
                        </div>
                        <div class="form-check text-center mb-3">
                            <p class="small text-muted mt-1">
                                Credit card will not be charged until the 31st day after posting your ad.
                            </p>
                            <div class="terms">
                                <input class="form-check-input" type="checkbox" id="terms" v-model="agreed">
                                <label class="form-check-label small" for="terms">
                                    I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import Swal from 'sweetalert2'; // <-- Add this line

export default {
  data() {
    return {
      adId: '', // will be set from route
      plan: 'monthly',
      amount: 30,
      stripe: null,
      elements: null,
      card: null,
      cardError: '',
      loading: false,
      agreed: true
    }
  },
  async mounted() {
    this.adId = this.$route.params.id;
    this.amount = this.plan === 'monthly' ? 30 : 300;

    this.stripe = await loadStripe('pk_test_51NfnBdGkONwmLpxCcOjr5Ui9kDzvyaOkuEcFSyKWAcilk7hBOlpsWm7jRUJiCU46cxTHkTaoYaa4AwDndYRgZI2H00NQoNJidR');
    this.elements = this.stripe.elements();
    this.card = this.elements.create('card');
    this.card.mount('#card-element');
    this.card.on('change', (event) => {
      this.cardError = event.error ? event.error.message : '';
    });

    if (window.Stripe === undefined) {
      // Optionally warn the developer
      // eslint-disable-next-line no-console
      console.warn('Stripe.js failed to load. Please disable ad blockers for Stripe to work.');
    }
  },
  watch: {
    plan(newVal) {
      this.amount = newVal === 'monthly' ? 30 : 300;
    }
  },
  methods: {
    async pay() {
      if (!this.agreed) return;
      this.loading = true;
      this.cardError = '';
      const { paymentMethod, error } = await this.stripe.createPaymentMethod({
        type: 'card',
        card: this.card,
      });
      if (error) {
        this.cardError = error.message;
        this.loading = false;
        return;
      }
      try {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

        await axios.post(
          `${API_BASE_URL}/ad/${this.adId}/pay`,
          {
            amount: this.amount,
            payment_method_id: paymentMethod.id
          },
          {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          }
        );
        // Show SweetAlert and redirect to profile
        await Swal.fire({
          icon: 'success',
          title: 'Payment Successful',
          text: 'Your payment was successful!',
          confirmButtonText: 'Go to Profile'
        });
        this.$router.push('/profile');
      } catch (err) {
        this.cardError = err.response?.data?.message || 'Payment failed';
      }
      this.loading = false;
    }
  }
}
</script>

<style scoped>
.login-banner {
  /* ...existing code... */
}
</style>