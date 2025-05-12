<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import Swal from 'sweetalert2'
import mapPinIcon from '@/assets/svg/MapPinArea.svg'
import phoneIcon from '@/assets/svg/ico_phone2.svg'
import emailIcon from '@/assets/svg/ico_email.svg'
import logo from '@/assets/images/logo.png'

const router = useRouter()
const user = ref(null)

onMounted(() => {
  const userData = localStorage.getItem('user')
  if (userData) {
    user.value = JSON.parse(userData)
  }
})

const logout = async () => {
  try {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
    await axios.get(`${API_BASE_URL}/user/logout`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    user.value = null
    Swal.fire('Success', 'Logged out successfully!', 'success').then(() => {
      router.push('/login')
    })
  } catch (error) {
    Swal.fire('Error', error.response?.data?.message || 'Something went wrong.', 'error')
  }
}
</script>

<template>
    <header>
  <section class="top-bar">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="contact-details">
              <ul>
                <li>
                    <a href="tel:+ 123-6485-5467"> <img :src="phoneIcon" alt="">+ 123-6485-5467</a>
                </li>
                <li class="border">
                  <a href="mailto:yourdomain.com"> <img :src="emailIcon" alt="">yourdomain.com</a>
              </li>
                <li class="border">
                    <a href=""> <img :src="mapPinIcon" alt="Map Pin" />Your address</a>
                </li> 
            </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="icon-list">
              <ul>
                <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  </section>
  <section class="header-main">
      <div class="container">
          <nav class="navbar navbar-expand-lg">
  <router-link class="navbar-brand" to="/"><img :src="logo"></router-link>
  <div class= "d-flex align-items-center">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <i class="fas fa-user-plus user-icon d-lg-none"></i>
      </div>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
      </li>
      <!-- <li class="nav-item">
        <router-link class="nav-link" to="/profile">FOR Lawyers</router-link>
      </li> -->
            <li class="nav-item">
        <router-link class="nav-link" to="/about">ABout</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/faq">FAQ</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/contact-us">Contact us</router-link>
      </li>
    </ul>
  </div>
  <div v-if="user" class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
      Hello, {{ user.first_name }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="userDropdown">
      <li>
      <router-link class="dropdown-item" to="/profile">My Account</router-link>
        <router-link class="dropdown-item" to="/update-profile">Edit Profile</router-link>
        
        <router-link class="dropdown-item" to="/create-your-ad">Create Ad</router-link>
      </li>
      <li>
        <button class="dropdown-item" @click="logout">Logout</button>
      </li>
    </ul>
  </div>
  <router-link v-else to="/login" class="btn1 d-none d-lg-block"><span>Login/Register</span></router-link>
  

</nav>
</div>
  </section>
</header>
</template>