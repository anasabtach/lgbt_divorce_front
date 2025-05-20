<template>
    <section id="ad">
        <router-link to="/"> <img src="@/assets/images/logo.png" alt="Divorce USA Logo" class="logo"></router-link>
        <div class="container">
            <h2>Create Your Ad</h2>
            <form @submit.prevent="submitForm">
            <div class="row">
                <!-- Form Section -->                 
                    <div class="col-md-6 form-section">
                        
                        <div class="mb-3">
                            <label class="form-label">Law Firm Description</label>
                            <textarea required v-model="formData.law_firm_desc" class="form-control"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Title</label>
                            <input required v-model="formData.title" type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Content</label>
                            <textarea required v-model="formData.content" class="form-control"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Schedule and Duration</label>
                            <div class="row duration">
                                <label class="form-label">Start Date</label>
                                <input required v-model="formData.start_date" type="date" class="form-control">

                                <label class="form-label">Days</label>
                                <input required v-model="formData.days" type="number" class="form-control">

                                <label class="form-label">Run Until</label>
                                <input required v-model="formData.run_until" type="date" class="form-control">

                            </div>
                        </div>
                          <div class="mb-3">
                            <label class="form-label">Upload Image</label>
                            <input type="file" class="form-control" @change="handleImageUpload">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Target location</label>
                            <div class="row location">
                                <label class="form-label">City</label>
                                <input required v-model="formData.city" type="text" class="form-control">

                                <label class="form-label">Latitude</label>
                                <input required v-model="formData.location_latitude" type="number" step="any" class="form-control">

                                <label class="form-label">Longitude</label>
                                <input required v-model="formData.location_longitude" type="number" step="any" class="form-control">

                                <label class="form-label">Radius</label>
                                <input required v-model="formData.radius" type="range" class="form-range radius-slider" min="0" max="15">
                            </div>
                        </div>
                    </div>

                    <!-- Preview Section -->
                    <div class="col-md-6 preview-section">
                        <h4 class="text-center mb-3">Preview Your Ad</h4>
                        <div class="preview-card">
                            <div>
                                <h5 class="name">{{ formData.title }}</h5>
                                <p><strong>Law Firm Description:</strong> {{ formData.law_firm_desc }}</p>
                                <p><strong>Content:</strong> {{ formData.content }}</p>
                                <p><strong>City:</strong> {{ formData.city }}</p>
                                <p><strong>Location:</strong> {{ formData.location_latitude }}, {{ formData.location_longitude }}</p>
                                <p><strong>Radius:</strong> {{ formData.radius }} km</p>
                                <p><strong>Start Date:</strong> {{ formData.start_date }}</p>
                                <p><strong>Days:</strong> {{ formData.days }}</p>
                                <p><strong>Run Until:</strong> {{ formData.run_until }}</p>
                                <div v-if="formData.imagePreview">
                                    <p><strong>Uploaded Image:</strong></p>
                                    <img :src="formData.imagePreview" alt="Uploaded Image" class="img-fluid" />
                                </div>
                            </div>
                        </div>    
                        <label class="form-label">View Profile</label>
                        <div class="d-flex view-profle">
                            <button class="btn">Website</button>
                            <button class="btn">Call</button>
                            <button class="btn">Email</button>
                        </div>
                        <button type="submit" class="btn btn-publish">Publish</button>
                        
                    </div>                
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export default {
  data() {
    return {
      formData: {
        title: '',
        law_firm_desc: '',
        content: '',
        start_date: '',
        days: 30,
        run_until: '',
        city: '',
        location_latitude: 33.6844, // Change location object to individual fields
        location_longitude: 73.0479,
        radius: 10,
        user_id: null,
        image: null,
        imagePreview: null
      }
    };
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
      this.formData.user_id = user.id;
    }
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.formData.image = file;
        this.formData.imagePreview = URL.createObjectURL(file);
      }
    },
    validateForm() {
      const errors = [];

      if (!this.formData.title) errors.push('Title is required.');
      if (!this.formData.law_firm_desc) errors.push('Law Firm Description is required.');
      if (!this.formData.content) errors.push('Content is required.');
      if (!this.formData.start_date) errors.push('Start Date is required.');
      if (!this.formData.run_until) errors.push('Run Until date is required.');
      if (!this.formData.city) errors.push('City is required.');
      if (!this.formData.location_latitude) errors.push('Latitude is required.');
      if (!this.formData.location_longitude) errors.push('Longitude is required.');

      if (errors.length > 0) {
        Swal.fire('Validation Error', errors.join('<br>'), 'error');
        return false;
      }

      return true;
    },
    async submitForm() {
      if (!this.validateForm()) return;

      const token = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${token}`
      };

      const formData = new FormData();
      for (const key in this.formData) {
        if (key === 'location_latitude') {
          formData.append('location[latitude]', this.formData[key]);
        } else if (key === 'location_longitude') {
          formData.append('location[longitude]', this.formData[key]);
        } else if (key === 'image') {
          formData.append('image', this.formData[key]);
        } else if (key !== 'imagePreview') {
          formData.append(key, this.formData[key]);
        }
      }

      try {
        const response = await axios.post(`${baseURL}/ad/store`, formData, { headers });
        if (response.status === 200) {
          Swal.fire('Success', 'Ad submitted successfully!', 'success');
          const adId = response.data.advertisement.id;
          this.$router.push(`/ad/${adId}/pay`);
        }
      } catch (error) {
        console.log(this.formData);
        Swal.fire('Error', 'There was an error submitting the ad.', 'error');
      }
    }
  }
};
</script>

<style>
/* Add any additional styles if needed */
</style>