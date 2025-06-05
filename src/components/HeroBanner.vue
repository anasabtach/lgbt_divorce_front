<template>
    <section id="hero" class="hero-section">
      <div class="swiper my-loop-swiper">
        <div class="swiper-wrapper">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="swiper-slide container-fluid"
          >
            <div class="row fluid">
              <div class="col-md-6 hero-map">
                <!-- <img src="@/assets/images/map.png" alt="USA Map" class="img-fluid" loading="lazy" /> -->
                 <Map />
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-md-6"></div>
                <div class="col-md-6">
                  <div class="hero-text">
                    <small>Your Legal Shield</small>
                    <h1>
                      FIND <span class="highlight">LGBT</span> Lawyers, Proven Results
                    </h1>
                    <!-- <div class="review d-flex align-items-center mt-3">
                      <div class="clients-images me-3">
                        <img src="@/assets/images/clients.png" alt="Clients" class="img-fluid" />
                      </div>
                      <div class="review-text">
                        <p class="mb-1">We Have 30k+ Happy Clients</p>
                        <div class="stars">⭐⭐⭐⭐⭐ 4.5/5(35k+ Reviews)</div>
                      </div>
                    </div> -->
                    <form @submit.prevent="handleSubmit" class="search-bar mt-4 d-flex">
                        <input 
                        type="text" 
                        class="form-control me-2" 
                        v-model="zipCode" 
                        placeholder="Zip Code"
                        aria-label="Zip Code"
                        required
                        autofocus
                        />
                    <input 
                        type="text" 
                        class="form-control me-2 bordered" 
                        v-model="country" 
                        placeholder="County" 
                        aria-label="Country"                        
                        required 
                    />
                    <button 
                    type="submit" 
                    class="btn btn-danger" 
                    aria-label="Search Lawyers"
                    >
                    <!-- <button 
                    type="submit" 
                    class="btn btn-danger" 
                    :disabled="isSubmitting || !zipCode || !country"
                    aria-label="Search Lawyers"
                    > -->
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="bottom-link">
        <a href="#about">
          <img src="@/assets/images/Link.png" alt="Link icon" />
        </a>
      </div>
    </section>
  </template>
  
  <script >
  import { initSliders } from '../assets/js/custom.js';
  import Map from '@/components/Map.vue';
  
  export default {
    components: {
    Map,
  },

    data() {
      return {
        slides: [1, 2, 3], // Replace with real data if needed
        zipCode: "",
        country: "",
        isSubmitting: false,
      };
    },
    mounted() {
      initSliders();
    },
    methods: {
      handleSubmit() {
        this.isSubmitting = true;
        this.$router.push('/about'); // Use this.$router instead of router.push
        // Process the form submission (e.g., API call)
        // After the submission, reset the form or handle success
        this.isSubmitting = false;
      },
    },
  };
</script>


