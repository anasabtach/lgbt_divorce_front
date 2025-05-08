<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import Swal from 'sweetalert2'
import validator from 'validator'

const router = useRouter()

const form = reactive({
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  lawFirm: '',
  zipCode: '',
  city: '',
  county: '',
  address: '',
  officePhone: '',
  mobilePhone: '',
  email: '',
  website: '',
  agree: false
})

onMounted(() => {
  const userData = localStorage.getItem('user')
  if (userData) {
    const user = JSON.parse(userData)
    form.firstName = user.first_name
    form.lastName = user.last_name
    form.username = user.username
    form.lawFirm = user.law_firm_name
    form.zipCode = user.zip_code
    form.city = user.city_town
    form.county = user.county
    form.address = user.address
    form.officePhone = user.office_phone
    form.mobilePhone = user.mobile_phone
    form.email = user.email
    form.website = user.website_url
    form.agree = user.terms_accepted
  }
})

const validateForm = () => {
  if (
    !form.firstName ||
    !form.lastName ||
    !form.username ||
    !form.lawFirm ||
    !form.zipCode ||
    !form.city ||
    !form.county ||
    !form.address ||
    !form.officePhone ||
    !form.mobilePhone ||
    !form.email ||
    !form.website
  ) {
    Swal.fire('Error', 'All fields are required.', 'error')
    return false
  }

  if (!validator.isEmail(form.email)) {
    Swal.fire('Error', 'Invalid email address.', 'error')
    return false
  }

  if (!validator.isURL(form.website)) {
    Swal.fire('Error', 'Invalid website URL.', 'error')
    return false
  }

  if (!validator.isMobilePhone(form.mobilePhone)) {
    Swal.fire('Error', 'Invalid mobile phone number.', 'error')
    return false
  }

  return true
}

const submitForm = async () => {
  if (!validateForm()) return

  try {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
    const response = await axios.put(`${API_BASE_URL}/user/update`, {
      first_name: form.firstName,
      last_name: form.lastName,
      username: form.username,
      email: form.email,
      law_firm_name: form.lawFirm,
      zip_code: form.zipCode,
      city_town: form.city,
      county: form.county,
      address: form.address,
      office_phone: form.officePhone,
      mobile_phone: form.mobilePhone,
      website_url: form.website
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    Swal.fire('Success', 'Profile updated successfully!', 'success').then(() => {
      localStorage.setItem('user', JSON.stringify(response.data.user)) // Update localStorage
      router.push('/') // Redirect to profile page
    })
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
          <img src="@/assets/images/cover.png" alt="Cover" class="w-100" loading="lazy" />
        </div>

        <div class="col-md-6">
          <div class="register">
            <h2>Update Profile</h2>
            <form @submit.prevent="submitForm">
              <div class="row mb-3">
                <div class="col">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fa fa-user"></i></span>
                    <input v-model="form.firstName" type="text" class="form-control" placeholder="First Name" />
                  </div>
                </div>
                <div class="col">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fa fa-user"></i></span>
                    <input v-model="form.lastName" type="text" class="form-control" placeholder="Last Name" />
                  </div>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fa fa-user-tag"></i></span>
                    <input v-model="form.username" type="text" class="form-control" placeholder="Username" />
                  </div>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fa fa-building"></i></span>
                    <input v-model="form.lawFirm" type="text" class="form-control" placeholder="Law Firm Name" />
                  </div>
                </div>
                <div class="col">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fa fa-map-pin"></i></span>
                    <input v-model="form.zipCode" type="text" class="form-control" placeholder="Zip Code" />
                  </div>
                </div>
              </div>

              <div class="row mb-3">
                <div class="col">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fa fa-city"></i></span>
                    <input v-model="form.city" type="text" class="form-control" placeholder="City/Town" />
                  </div>
                </div>
                <div class="col">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fa fa-map"></i></span>
                    <input v-model="form.county" type="text" class="form-control" placeholder="County" />
                  </div>
                </div>
              </div>

              <div class="mb-3 input-group">
                <span class="input-group-text"><i class="fa fa-address-card"></i></span>
                <input v-model="form.address" type="text" class="form-control" placeholder="Address" />
              </div>

              <div class="row mb-3">
                <div class="col">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fa fa-phone"></i></span>
                    <input v-model="form.officePhone" type="tel" class="form-control" placeholder="Office Phone No" />
                  </div>
                </div>
                <div class="col">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fa fa-mobile-alt"></i></span>
                    <input v-model="form.mobilePhone" type="tel" class="form-control" placeholder="Mobile Phone No" />
                  </div>
                </div>
              </div>

              <div class="mb-3 input-group">
                <span class="input-group-text"><i class="fa fa-envelope"></i></span>
                <input v-model="form.email" type="email" class="form-control" placeholder="Email" />
              </div>

              <div class="mb-3 input-group">
                <span class="input-group-text"><i class="fa fa-globe"></i></span>
                <input v-model="form.website" type="url" class="form-control" placeholder="Website URL" />
              </div>

              <button type="submit" class="btn w-100">Update Profile</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add your styles here */
</style>
