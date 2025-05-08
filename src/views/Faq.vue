<script setup> 
import Faq from '../components/Faq.vue';
</script>

<template>
    <section class="find-lawyer-banner">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col text-center">
                    <h2>
                        Frequently Asked Questions
                    </h2>
                    <a href="#faqs">
                        <img src="@/assets/images/Link.png" alt="Scroll to Lawyers" class="bottom-arrow">
                    </a>
                </div>
            </div>
        </div>
    </section>

   <Faq :showButton="false" />

</template>