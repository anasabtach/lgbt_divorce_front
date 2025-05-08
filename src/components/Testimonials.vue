<template>
        <section id="testimonial-section">
        <div class="container">
            <div class="row">
                <h4>Client Testimonials</h4>
                <h2>What Our Clients Say</h2>
                <div class="swiper test-swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="inner">
                                <span class="quote-icon"><img src="@/assets/svg/quotes.svg" alt="Quote Icon" /></span>
                                <div class="testimonial-header">
                                    <img src="@/assets/images/testi_1_1.png" alt="Monica D'suza" />
                                    <div>
                                        <div class="name">Monica D'suza</div>
                                        <div class="role">UI/UX Designer</div>
                                        <div class="stars">★★★★★</div>
                                    </div>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="inner">
                                <span class="quote-icon"><img src="@/assets/svg/quotes.svg" alt="Quote Icon" /></span>
                                <div class="testimonial-header">
                                    <img src="@/assets/images/testi_1_2.png" alt="Teresa Hamilton" />
                                    <div>
                                        <div class="name">Teresa Hamilton</div>
                                        <div class="role">UI/UX Designer</div>
                                        <div class="stars">★★★★☆</div>
                                    </div>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="inner">
                                <span class="quote-icon"><img src="@/assets/svg/quotes.svg" alt="Quote Icon" /></span>
                                <div class="testimonial-header">
                                    <img src="@/assets/images/testi_1_1.png" alt="Monica D'suza" />
                                    <div>
                                        <div class="name">Monica D'suza</div>
                                        <div class="role">UI/UX Designer</div>
                                        <div class="stars">★★★★★</div>
                                    </div>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                            </div>
                        </div>
                    </div>
                    <!-- Testimonial navigation -->
                    <div class="testimonial-button-prev swiper-button-prev"></div>
                    <div class="testimonial-button-next swiper-button-next"></div>
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