<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import Swal from 'sweetalert2'

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  remember: false
})

const submitLogin = async () => {
  if (!form.email || !form.password) {
    Swal.fire('Error', 'Please fill in both email and password.', 'error')
    return
  }

  try {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
    const response = await axios.post(`${API_BASE_URL}/user/login`, {
      email: form.email,
      password: form.password
    })

    if (response.data.success) {
      const { token, user } = response.data
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
      Swal.fire('Success', 'Logged in successfully!', 'success').then(() => {
        router.push('/profile') // Redirect to home page
      })
    } else {
      Swal.fire('Error', response.data.message || 'Login failed.', 'error')
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
            <h4>Login to your Account</h4>
            <p>Welcome back! please enter your details</p>

            <form @submit.prevent="submitLogin">
              <div class="input-wrap mb-3">
                <span><i class="far fa-envelope" style="color: #64748B;"></i></span>
                <input v-model="form.email" type="email" class="form-control" placeholder="Email" required />
              </div>

              <div class="input-wrap pass mb-3">
                <span><i class="fas fa-lock" style="color: #64748B;"></i></span>
                <input v-model="form.password" type="password" class="form-control" placeholder="Password" required />
              </div>

              <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="form-check remember-link">
                  <input v-model="form.remember" class="form-check-input" type="checkbox" id="rememberMe" />
                  <label class="form-check-label" for="rememberMe">Remember me</label>
                </div>
                <router-link to="/forget-password" class="forgot-link">Forgot Password?</router-link>
              </div>

              <button type="submit" class="btn btn-danger w-100 mb-3 py-2">Sign In</button>

              <!-- <p class="text-center">Or sign in with</p> -->
<!-- 
              <div class="social-links-wrap mb-3">
                <button type="button" class="social-btn me-2">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                    width="20"
                    class="me-2"
                  />
                  Google
                </button>
                <button type="button" class="social-btn">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                    width="20"
                    class="me-2"
                  />
                  Facebook
                </button>
              </div> -->

              <p class="text-center no-acc">
                Don’t have an account? <router-link to="/create-account">Sign Up</router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add styles or adjust classes here as needed */

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
