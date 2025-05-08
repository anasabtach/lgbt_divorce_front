<script setup>
import { reactive } from 'vue'

const form = reactive({
  email: ''
})

const submitForgotPassword = () => {
  if (!form.email) {
    alert('Please enter your email.')
    return
  }

  // Replace with your real API call
  console.log('Password reset request sent for:', form.email)
  alert('Password reset link sent to your email.')
}
</script>

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

        <div class="col-md-6 login">
          <div class="login-box">
            <h4>Forgot Password</h4>
            <p>Please enter your email to receive a password reset link</p>

            <form @submit.prevent="submitForgotPassword">
              <div class="input-wrap mb-4">
                <span><i class="far fa-envelope" style="color: #64748B;"></i></span>
                <input
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  required
                />
              </div>

              <button type="submit" class="btn btn-danger w-100 mb-3 py-2">Send Reset Link</button>

              <p class="text-center no-acc">
                Remember your password? <router-link to="/login">Back to Login</router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.input-wrap {
  position: relative;
}

.input-wrap span {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}

.input-wrap input {
  padding-left: 35px;
}
</style>
