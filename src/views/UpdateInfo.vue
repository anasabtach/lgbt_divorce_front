<template>
  <section id="ad">
    <router-link to="/">
      <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
    </router-link>

    <div class="container">
      <h2>Update Your Info</h2>

      <form @submit.prevent="submitForm">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <!-- Experience -->
            <div class="mb-3">
              <label class="form-label">Experience (years)</label>
              <input v-model="formData.experience" type="number" class="form-control" required />
            </div>

            <!-- Specialization -->
            <div class="mb-3">
              <label class="form-label">Specialization</label>
              <textarea v-model="formData.specialization" class="form-control" required></textarea>
            </div>

            <!-- Practice Area -->
            <div class="mb-3" v-if="editorReady" :key="'practice_area' + editorKey">
              <label class="form-label">Practice Area</label>
              <QuillEditor
                :content="formData.practice_area"
                @update:content="value => formData.practice_area = value"
                content-type="html"
                theme="snow"
              />
            </div>

            <!-- Biography -->
            <div class="mb-3" v-if="editorReady" :key="'biography' + editorKey">
              <label class="form-label">Biography</label>
              <QuillEditor
                :content="formData.biography"
                @update:content="value => formData.biography = value"
                content-type="html"
                theme="snow"
              />
            </div>

            <!-- Jurisdictions Admitted -->
            <div class="mb-3" v-if="editorReady" :key="'jurisdictions' + editorKey">
              <label class="form-label">Jurisdictions Admitted</label>
              <QuillEditor
                :content="formData.jurisdictions_admitted"
                @update:content="value => formData.jurisdictions_admitted = value"
                content-type="html"
                theme="snow"
              />
            </div>

            <!-- Professional Experience -->
            <div class="mb-3" v-if="editorReady" :key="'experience' + editorKey">
              <label class="form-label">Professional Experience</label>
              <QuillEditor
                :content="formData.professional_experience"
                @update:content="value => formData.professional_experience = value"
                content-type="html"
                theme="snow"
              />
            </div>

            <!-- Submit Button -->
            <button type="submit" class="btn btn-primary">Update Info</button>
          </div>
        </div>
      </form>

      <!-- Loading -->
      <div v-if="loading" class="text-center py-5">Loading...</div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export default {
  components: { QuillEditor },
  data() {
    return {
      loading: true,
      editorReady: false,
      editorKey: 0,
      formData: {
        experience: '',
        specialization: '',
        practice_area: '',
        biography: '',
        jurisdictions_admitted: '',
        professional_experience: '',
      },
    };
  },
  mounted() {
    this.fetchUserInfo();
  },
  methods: {
    async fetchUserInfo() {
      try {
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };
        const res = await axios.get(`${baseURL}/user/get-info`, { headers });

        if (res.data.success && res.data.user.user_info) {
          Object.assign(this.formData, res.data.user.user_info);
          this.editorReady = false;
          this.editorKey++; // Force re-render with new key
          this.$nextTick(() => {
            this.editorReady = true;
          });
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
        Swal.fire('Error', 'Failed to load user info', 'error');
      } finally {
        this.loading = false;
      }
    },

    async submitForm() {
      try {
        const token = localStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}` };
        const res = await axios.put(`${baseURL}/user/info`, this.formData, { headers });

        if (res.data.success) {
          Swal.fire('Success', 'Info updated!', 'success');
        } else {
          Swal.fire('Error', 'Update failed.', 'error');
        }
      } catch (error) {
        Swal.fire('Error', 'An error occurred.', 'error');
      }
    },
  },
};
</script>

<style scoped>
.logo {
  width: 150px;
  margin: 20px 0;
}
</style>
