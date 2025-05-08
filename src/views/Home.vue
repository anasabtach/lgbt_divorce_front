


<template>
    <HeroBanner/>

    <About/>

    <Counter/>

    <LawyersSlider/>

    <WorkProcess/>

    <CaseStudy/>

    <Testimonials/>

    <Faq :showButton="true" />

    <Blogs/>

</template>


<script setup>

import HeroBanner from '../components/HeroBanner.vue'
import About from '../components/About.vue'
import Counter from '../components/Counter.vue'
import LawyersSlider from '../components/LawyersSlider.vue'
import WorkProcess from '../components/WorkProcess.vue'
import CaseStudy from '../components/CaseStudy.vue'
import Testimonials from '../components/Testimonials.vue'
import Faq from '../components/Faq.vue'
import Blogs from '../components/Blogs.vue'
</script>