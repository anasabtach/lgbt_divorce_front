<script setup>
import { reactive } from 'vue'
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
  agree: false,
  image: null, // Add image field
  imagePreview: null // Add image preview field
})

const validateForm = () => {
  if (
    !form.firstName ||
    !form.lastName ||
    !form.username ||
    !form.password ||
    !form.lawFirm ||
    !form.zipCode ||
    !form.city ||
    !form.county ||
    !form.address ||
    !form.officePhone ||
    !form.mobilePhone ||
    !form.email ||
    !form.website ||
    !form.agree
  ) {
    Swal.fire('Error', 'All fields are.', 'error')
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

  if (form.password.length < 8) {
    Swal.fire('Error', 'Password must be at least 8 characters long.', 'error')
    return false
  }

  return true
}

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    form.image = file;
    form.imagePreview = URL.createObjectURL(file);
  }
}

const updatePassword = (event) => {
  form.password = event.target.value;
}

const submitForm = async () => {
  if (!validateForm()) return

  try {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
    const formData = new FormData();
    formData.append('first_name', form.firstName);
    formData.append('last_name', form.lastName);
    formData.append('username', form.username);
    formData.append('email', form.email);
    formData.append('password', form.password);
    formData.append('law_firm_name', form.lawFirm);
    formData.append('zip_code', form.zipCode);
    formData.append('city_town', form.city);
    formData.append('county', form.county);
    formData.append('address', form.address);
    formData.append('office_phone', form.officePhone);
    formData.append('mobile_phone', form.mobilePhone);
    formData.append('website_url', form.website);
    formData.append('terms_accepted', form.agree);
    if (form.image) {
      formData.append('image', form.image); // Add image to formData
    }
    console.log(formData);
    const response = await axios.post(`${API_BASE_URL}/user/register`, formData);
    Swal.fire('Success', 'Account created successfully!', 'success').then(() => {
      router.push('/login') // Redirect to login page
    })
  } catch (error) {
    Swal.fire('Error', error.response?.data?.message || 'Something went wrong.', 'error')
  }
}
</script>

<template>
  <section class="login-banner">
    <router-link class="login-logo" to="/">
      <img src="@/assets/images/login-logo.png" alt="Logo" width="100px" height="100px"/>
    </router-link>

    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-md-6 p-0 align-self-start d-none d-md-block">
          <img src="@/assets/images/cover.png" alt="Cover" class="w-100" loading="lazy" />
        </div>

        <div class="col-md-6">
          <div class="register">
            <h2>Create an Account</h2>
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
                <div class="col">
                  <div class="input-group">
                    <span class="input-group-text"><i class="fa fa-lock"></i></span>
                    <input v-model="form.password" @change="updatePassword" type="password" class="form-control" placeholder="Password" />
                  </div>
                </div>
              </div>

              <p class="note">Your password must have at least 8 characters</p>

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

              <div class="mb-3 input-group">
                <span class="input-group-text"><i class="fa fa-image"></i></span>
                <input @change="handleImageUpload" type="file" class="form-control" accept="image/*" />
              </div>

              <div v-if="form.imagePreview" class="mb-3">
                <img :src="form.imagePreview" alt="Image Preview" class="img-thumbnail" />
              </div>

              <div class="form-check mb-3">
                <input v-model="form.agree" class="form-check-input" type="checkbox" id="terms" />
                <label class="form-check-label" for="terms">
                  By creating an account you agree to the
                  <a href="#">Terms & Conditions</a> and our
                  <a href="#">Privacy Policy</a>
                </label>
              </div>

              <button type="submit" class="btn w-100">Sign Up</button>
              <p class="login mt-3">
                Already have an account?
                <router-link to="/login">Log In</router-link>
              </p>
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
