<template>
  <div>
    <Header v-if="!$route.meta.hideLayout" />
    
    <router-view />

    <Footer v-if="!$route.meta.hideLayout" />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute()
</script>


<style>

</style>
