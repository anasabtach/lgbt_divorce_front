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
                                <li><span><img src="@/assets/images/info-1.png" alt="" /></span> {{ user?.experience || '10' }} years of experience</li>
                                <li><span><img src="@/assets/images/info-2.png" alt="" /></span> {{ user?.specialization || 'Specialization' }}</li>
                                <li><span><img src="@/assets/images/info-3.png" alt="" /></span> {{ user?.city_town || 'Location' }}</li>
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
                                <h5>Divorce</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                            </div>

                            <div class="mb-2">
                                <h5>LGBT Divorce</h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                                </p>
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
                    <!-- <h4>Our Attorneys</h4> -->
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
                                    <img src="@/assets/images/image28.png" :alt="lawyer.name" />
                                    <h3>{{ lawyer.title }}</h3>
                                    <p>{{ lawyer.content }}</p>
                                </div>
                                <!-- <router-link :to="`/profile/${lawyer.id}`" class="btn1">
                                    <span>View profile</span>
                                </router-link> -->
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

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum but also the leap into electronic typesetting, remaining essentially unchanged. It
                        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.

                    </p>
                    <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.

                    </p>
                    <a href="#">View More ›</a>
                </div>
            </div>
        </div>
    </section>

    <section class="profile-section-3">
        <div class="container">
            <div class="row row-1">
                <div class="col">
                    <div>
                        <div class="d-flex align-items-center gap-3 mb-2 text-icon">
                            <img src="@/assets/images/dollar.png" alt="" />
                            <h2>Fees</h2>
                        </div>
                        <p>Credit Cards Accepted</p>
                    </div>
                </div>
            </div>

            <div class="row row-2">
                <div class="col">
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            <div class="d-flex align-items-center gap-3 mb-2 text-icon">
                                <img src="@/assets/images/home.png" alt="" />
                                <h2>Jurisdictions Admitted to Practice</h2>
                            </div>
                            <h6>Texas</h6>
                            <p>State Bar of Texas</p>
                            <p>Since 2010</p>
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

                        <div>
                            <h6>Attorney</h6>
                            <p>Diggs & Sadler</p>
                            <p class="para-light">2010 - Current</p>
                        </div>

                        <div class="mt-3">
                            <h6>Law Clerk</h6>
                            <p>Holmes, Diggs, Eames & Puhl, PLLC</p>
                            <p class="para-light">2008 - 2010</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { initSliders } from '../assets/js/custom.js';

export default {
  data() {
    return {
      user: null
    };
  },
  mounted() {
            initSliders();        
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }
};
</script>