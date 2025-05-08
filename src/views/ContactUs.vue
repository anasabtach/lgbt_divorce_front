<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // Basic client-side validation
  if (!form.name || !form.email || !form.subject || !form.message) {
    alert('Please fill out all fields.')
    return
  }

  // Example: log the form or connect to an API
  console.log('Submitted form:', form)
  alert('Your message has been sent successfully!')

  // Clear form (optional)
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
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

        <div class="col-md-6">
          <div class="container py-5">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="card shadow-lg rounded-4 border-0">
                  <div class="card-body p-5">
                    <h2 class="text-center mb-4">Contact Us</h2>
                    <form @submit.prevent="submitForm">
                      <div class="form-floating mb-3">
                        <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Your Name" required />
                        <label for="name">Your Name</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input v-model="form.email" type="email" class="form-control" id="email" placeholder="Your Email" required />
                        <label for="email">Your Email</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input v-model="form.subject" type="text" class="form-control" id="subject" placeholder="Subject" required />
                        <label for="subject">Subject</label>
                      </div>
                      <div class="form-floating mb-4">
                        <textarea
                          v-model="form.message"
                          class="form-control"
                          placeholder="Your Message"
                          id="message"
                          style="height: 150px"
                          required
                        ></textarea>
                        <label for="message">Your Message</label>
                      </div>
                      <div class="d-grid">
                        <button type="submit" class="btn btn-primary btn-lg rounded-pill">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optional styles */

</style>
