<script setup>
import { reactive } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

const form = reactive({
  email: ''
})

const baseURL = import.meta.env.VITE_API_BASE_URL

const submitForgotPassword = async () => {
  if (!form.email) {
    Swal.fire('Error', 'Please enter your email.', 'error')
    return
  }
  try {
    const res = await axios.post(`${baseURL}/user/forget-password`, { email: form.email })
    if (res.data && res.data.success) {
      Swal.fire('Success', 'Password reset link sent to your email.', 'success')
    } else {
      Swal.fire('Error', res.data.message || 'Failed to send reset link.', 'error')
    }
  } catch (error) {
    Swal.fire('Error', error.response?.data?.message || 'Something went wrong.', 'error')
  }
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
