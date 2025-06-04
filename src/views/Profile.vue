<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import LawyersSlider from '../components/LawyersSlider.vue';

const baseURL = import.meta.env.VITE_API_BASE_URL;
const token = localStorage.getItem('token');
const lawyers = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(`${baseURL}/ad`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data.advertisements);
    lawyers.value = response.data.advertisements;
  } catch (error) {
    console.error('Error fetching lawyers:', error);
  }
});
</script>
<template>
    <section class="profile-banner">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <img src="https://microbiology.ucr.edu/sites/default/files/styles/form_preview/public/blank-profile-pic.png?itok=4teBBoet" alt="" class="user-img w-100" />
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-6">
                            <h2 class="user-name">{{ user?.first_name || 'User Name' }}</h2>
                            <ul class="info-list">
                                <li><span><img src="@/assets/images/info-1.png" alt="" /></span> {{ userInfo?.experience || '100' }} years of experience</li>
                                <li><span><img src="@/assets/images/info-2.png" alt="" /></span> {{ userInfo?.specialization || 'Specialization' }}</li>
                                <!-- <li><span><img src="@/assets/images/info-3.png" alt="" /></span> {{ user?.city_town || 'Location' }}</li> -->
                            </ul>
                            <button class="profile-btn">Review This Lawyer</button>
                        </div>
                        <div class="col-lg-6">
                            <ul class="profile-btns text-end">
                                <li><button class="profile-btn"><i class="fas fa-phone"></i>{{ user?.mobile_phone || '(N/A)' }}</button></li>
                                <li><button class="profile-btn"><i class="far fa-envelope"></i>Email Lawyer</button>
                                </li>
                                <li><button class="profile-btn"><i class="fas fa-globe"></i>View Website</button></li>
                            </ul>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="d-flex align-items-center gap-3 mb-2 mt-4">
                                <img src="@/assets/images/hammer.png" alt="" />
                                <h2>Practice Areas</h2>
                            </div>

                            <div class="mb-2">
                                                    <div v-if="userInfo.practice_area" v-html="userInfo.practice_area"></div>
                            <div v-else>
                              <h6>N/A</h6>
                            </div>
                            </div>


                            <div class="badges d-flex align-items-center gap-3 mb-3">
                                <img src="@/assets/images/badges.png" alt="" />
                                <h5 class="m-0">Badges</h5>
                            </div>

                            <div class="d-flex align-items-center gap-2 badge-images">
                                <img src="@/assets/images/badge-1.png" alt="" />
                                <img src="@/assets/images/badge-2.png" alt="" />
                                <img src="@/assets/images/badge-3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     <section id="lawyers"  v-show="lawyers.length > 0"> 
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                     <h4>Some of recent ads</h4> 
                    <h2>Featured Ads</h2>
                    <!-- <router-link to="/#hero" class="btn1">
                        <span>Find a Lawyer</span><i class="fa-solid fa-arrow-right"></i>
                    </router-link> -->
                </div>
                <div class="col-md-9">
                    <div class="swiper-second">
                        <div class="swiper-wrapper">
                            <div v-for="lawyer in lawyers" :key="lawyer.id" class="swiper-slide">
                                <div class="box">
                                    <img :src="lawyer.image_url" :alt="lawyer.name" />
                                    <h3>{{ lawyer.title }}</h3>
                                    <p>{{ lawyer.content }}</p>
                                </div>
                                <router-link :to="`/edit-your-ad/${lawyer.id}`" class="dropdown-item">Edit</router-link>
                                <button
                                    v-if="lawyer.status === 'pending'"
                                    class="btn btn-warning mt-2"
                                    @click="$router.push(`/ad/${lawyer.id}/pay`)"
                                >
                                    Pay
                                </button>
                            </div>
                        </div>
                        <!-- Only arrows -->
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Biography -->
    <section class="bio">
        <div class="container">
            <div class="row">
                <div class="col-lg-10">
                    <div class="d-flex align-items-center gap-3 mb-2">
                        <img src="@/assets/images/badges.png" alt="" />
                        <h2 class="m-0">Biography</h2>
                    </div>
                    <div v-if="userInfo.biography" v-html="userInfo.biography"></div>
                    <div v-else>
                      <p>No biography available.</p>
                    </div>
                    <!-- <a href="#">View More ›</a> -->
                </div>
            </div>
        </div>
    </section>

    <section class="profile-section-3">
        <div class="container">
            <!-- <div class="row row-1">
                <div class="col">
                    <div>
                        <div class="d-flex align-items-center gap-3 mb-2 text-icon">
                            <img src="@/assets/images/dollar.png" alt="" />
                            <h2>Fees</h2>
                        </div>
                        <p>Credit Cards Accepted</p>
                    </div>
                </div>
            </div> -->

            <div class="row row-2">
                <div class="col">
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            <div class="d-flex align-items-center gap-3 mb-2 text-icon">
                                <img src="@/assets/images/home.png" alt="" />
                                <h2>Jurisdictions Admitted to Practice</h2>
                            </div>
                            <div v-if="userInfo.jurisdictions_admitted" v-html="userInfo.jurisdictions_admitted"></div>
                            <div v-else>
                              <h6>N/A</h6>
                            </div>
                        </div>
                        <img src="@/assets/images/Group 1321315087.png" alt="" class="building-img" />
                    </div>
                </div>
            </div>

            <div class="row row-3">
                <div class="col">
                    <div>
                        <div class="d-flex align-items-center gap-3 mb-2 text-icon">
                            <img src="@/assets/images/bag.png" alt="" />
                            <h2>Professional Experience</h2>
                        </div>
                        <div v-if="userInfo.professional_experience" v-html="userInfo.professional_experience"></div>
                        <div v-else>
                          <p>No professional experience available.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- ...existing code... -->
</template>

<script>
import { initSliders } from '../assets/js/custom.js';
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export default {
  data() {
    return {
      user: null,
      userInfo: {
        experience: '',
        specialization: '',
        practice_area: '',
        biography: '',
        jurisdictions_admitted: '',
        professional_experience: '',
      }
    };
  },
  async mounted() {
    initSliders();
    // Fetch user basic info from localStorage (for name, etc.)
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
    // Fetch extended info from API
    try {
      const token = localStorage.getItem('token');
      const headers = { Authorization: `Bearer ${token}` };
      const response = await axios.get(`${baseURL}/user/get-info`, { headers });
      if (
        response.data &&
        response.data.success &&
        response.data.user &&
        response.data.user.user_info
      ) {
        const info = response.data.user.user_info;
        this.userInfo = {
          experience: info.experience != null ? String(info.experience) : '',
          specialization: info.specialization != null ? String(info.specialization) : '',
          practice_area: info.practice_area != null ? String(info.practice_area) : '',
          biography: info.biography != null ? String(info.biography) : '',
          jurisdictions_admitted: info.jurisdictions_admitted != null ? String(info.jurisdictions_admitted) : '',
          professional_experience: info.professional_experience != null ? String(info.professional_experience) : '',
        };
      }
    } catch (error) {
      // Optionally handle error
      console.error('Error fetching user info:', error);
    }
  }
};
</script>