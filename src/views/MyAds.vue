<template>
     <section id="lawyers">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <h4>Our Attorneys</h4>
                    <h2>Featured Lawyers</h2>
                    <router-link to="/#hero" class="btn1"><span>Find a Lawyer</span><i class="fa-solid fa-arrow-right"></i></router-link>
                </div>
                <div class="col-md-9">
                    <div class="swiper-second">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="box">
                                    <img src="@/assets/images/image28.png" alt="Lawyer Michel">
                                    <h3>Michel phelops</h3>
                                    <p>Trusted LGBTQ advocate and divorce attorney in Texas</p>
                                </div>
                                <router-link to="/profile" class="btn1"><span>View profile</span></router-link>
                            </div>
                            <div class="swiper-slide">
                                <div class="box">
                                    <img src="@/assets/images/lawyer2.png" alt="Lawyer Sarah">
                                    <h3>Sarah Rahman</h3>
                                    <p>15+ years of experience helping LGBTQ couples in New York</p>
                                </div>
                                <router-link to="/profile" class="btn1"><span>View profile</span></router-link>
                            </div>
                            <div class="swiper-slide">
                                <div class="box">
                                    <img src="@/assets/images/lawyer3.png" alt="Lawyer Smith">
                                    <h3>Smith Miller</h3>
                                    <p> Specializing in LGBTQ family law and mediation</p>
                                </div>
                                <router-link to="/profile" class="btn1"><span>View profile</span></router-link>
                            </div>
                            <div class="swiper-slide">
                                <div class="box">
                                    <img src="@/assets/images/lawyer4.png" alt="Lawyer Samira">
                                    <h3>Samira Dsuza</h3>
                                    <p>Attorney</p>
                                </div>
                                <router-link to="/profile" class="btn1"><span>View profile</span></router-link>
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
</template>

<script>
import { initSliders } from '../assets/js/custom.js';

export default {
    mounted() {
        initSliders();        
    }
};

</script>