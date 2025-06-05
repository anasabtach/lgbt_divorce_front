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
                                <p>Divorce is hard no matter who you are, but being part of the LGBTQ+ community adds layers most people don’t understand. This platform gave me the tools, support, and sense of belonging I needed to start over with hope</p>
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
                                <p>After my marriage ended, I felt lost. But here, I found community, comfort, and practical help. It’s more than just a website—it’s a safe place to rebuild and rediscover who I am.</p>
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
                                <p>Ending a relationship is never easy, but having a space that understands the unique struggles of LGBTQ+ couples made all the difference. This site reminded me that healing is possible—and I’m not alone.</p>
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