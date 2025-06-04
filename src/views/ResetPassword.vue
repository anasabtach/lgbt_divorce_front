<script setup>
import { reactive } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRoute, useRouter } from 'vue-router'

const form = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})

const baseURL = import.meta.env.VITE_API_BASE_URL
const route = useRoute()
const router = useRouter()

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

const submitResetPassword = async () => {
  if (!form.password || !form.confirmPassword) {
    Swal.fire('Error', 'Please enter and confirm your new password.', 'error')
    return
  }
  if (form.password.length < 8) {
    Swal.fire('Error', 'Password must be at least 8 characters long.', 'error')
    return
  }
  if (form.password !== form.confirmPassword) {
    Swal.fire('Error', 'Passwords do not match.', 'error')
    return
  }
  // Get token, email, ts from URL
  const token = route.query.token
  const email = route.query.email
  const ts = route.query.ts
  console.log(token)
  if (!token || !email || !ts) {
    Swal.fire('Error', 'Invalid or expired reset link.', 'error')
    return
  }
  try {
    const res = await axios.post(`${baseURL}/user/reset-password`, {
      token,
      email,
      ts,
      password: form.password
    })
    if (res.data && res.data.success) {
      Swal.fire('Success', 'Password reset successfully!', 'success').then(() => {
        router.push('/login')
      })
    } else {
      Swal.fire('Error', res.data.message || 'Failed to reset password.', 'error')
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
            <h4>Reset Password</h4>
            <p>Please enter your new password</p>

            <form @submit.prevent="submitResetPassword">
              <div class="input-wrap mb-4">
                <span><i class="fas fa-lock" style="color: #64748B;"></i></span>
                <input
                  v-model="form.password"
                  type="password"
                  class="form-control"
                  placeholder="New Password"
                  required
                />
              </div>
              <div class="input-wrap mb-4">
                <span><i class="fas fa-lock" style="color: #64748B;"></i></span>
                <input
                  v-model="form.confirmPassword"
                  type="password"
                  class="form-control"
                  placeholder="Confirm New Password"
                  required
                />
              </div>

              <button type="submit" class="btn btn-danger w-100 mb-3 py-2">Reset Password</button>

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
