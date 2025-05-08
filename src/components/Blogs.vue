<template>
    <section id="blogs">
        <div class="container">
            <div class="row">
                <h4>News & Blog</h4>
                <h2>Our News & Update</h2>
                <div class="swiper blog-swiper">
                    <div class="swiper-wrapper">                        
                        <router-link to="/blog/1" class="swiper-slide">
                            <div class="blog">
                                <div class="inner">
                                    <img src="@/assets/images/blog1.png" alt="Blog 1" />
                                    <div class="meta-list">
                                        <div class="meta bordered">
                                            <img src="@/assets/svg/icon1.svg" alt="Author Icon" />
                                            <p>By XYZ</p>
                                        </div>
                                        <div class="meta bordered">
                                            <img src="@/assets/svg/icon2.svg" alt="Date Icon" />
                                            <p>22 Dec, 2024</p>
                                        </div>
                                        <div class="meta">
                                            <img src="@/assets/svg/icon3.svg" alt="Comment Icon" />
                                            <p>1 Comment</p>
                                        </div>
                                    </div>
                                    <h2>“Understanding LGBTQ Divorce Laws in the U.S.”</h2>
                                </div>
                            </div>
                        </router-link>                        
                        <router-link to="/blog/2" class="swiper-slide">
                            <div class="blog">
                                <div class="inner">
                                    <img src="@/assets/images/blog2.png" alt="Blog 2" />
                                    <div class="meta-list">
                                        <div class="meta bordered">
                                            <img src="@/assets/svg/icon1.svg" alt="Author Icon" />
                                            <p>By XYZ</p>
                                        </div>
                                        <div class="meta bordered">
                                            <img src="@/assets/svg/icon2.svg" alt="Date Icon" />
                                            <p>17 Dec, 2024</p>
                                        </div>
                                        <div class="meta">
                                            <img src="@/assets/svg/icon3.svg" alt="Comment Icon" />
                                            <p>3 Comments</p>
                                        </div>
                                    </div>
                                    <h2>“How to Prepare for a Divorce as an LGBTQ Couple”</h2>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/blog/3" class="swiper-slide">
                            <div class="blog">
                                <div class="inner">
                                    <img src="@/assets/images/blog3.png" alt="Blog 3" />
                                    <div class="meta-list">
                                        <div class="meta bordered">
                                            <img src="@/assets/svg/icon1.svg" alt="Author Icon" />
                                            <p>By XYZ</p>
                                        </div>
                                        <div class="meta bordered">
                                            <img src="@/assets/svg/icon2.svg" alt="Date Icon" />
                                            <p>27 Dec, 2024</p>
                                        </div>
                                        <div class="meta">
                                            <img src="@/assets/svg/icon3.svg" alt="Comment Icon" />
                                            <p>8 Comments</p>
                                        </div>
                                    </div>
                                    <h2>“Top Questions to Ask Your Divorce Lawyer”</h2>
                                </div>
                            </div>
                        </router-link>
                        <router-link to="/blog/4" class="swiper-slide">
                            <div class="blog">
                                <div class="inner">
                                    <img src="@/assets/images/blog1.png" alt="Blog 1" />
                                    <div class="meta-list">
                                        <div class="meta bordered">
                                            <img src="@/assets/svg/icon1.svg" alt="Author Icon" />
                                            <p>By XYZ</p>
                                        </div>
                                        <div class="meta bordered">
                                            <img src="@/assets/svg/icon2.svg" alt="Date Icon" />
                                            <p>22 Dec, 2024</p>
                                        </div>
                                        <div class="meta">
                                            <img src="@/assets/svg/icon3.svg" alt="Comment Icon" />
                                            <p>1 Comment</p>
                                        </div>
                                    </div>
                                    <h2>“Understanding LGBTQ Divorce Laws in the U.S.”</h2>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    <!-- Blogs navigation -->
                    <div class="blog-button-prev swiper-button-prev"></div>
                    <div class="blog-button-next swiper-button-next"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { initSliders } from '../assets/js/custom.js';

export default {
    mounted() {
        initSliders()        
    }
};

</script>