<template>
    <section class="blog-inner py-5">
      <div class="container">
        <router-link to="/" class="btn btn-link mb-4">
          ← Back to Blog
        </router-link>
  
        <div v-if="blog">
          <h1 class="mb-3">{{ blog.title }}</h1>
          <div class="meta-list d-flex gap-4 mb-4">
            <div class="meta d-flex align-items-center gap-2">
              <img src="@/assets/svg/icon1.svg" alt="Author Icon" />
              <span>{{ blog.author }}</span>
            </div>
            <div class="meta d-flex align-items-center gap-2">
              <img src="@/assets/svg/icon2.svg" alt="Date Icon" />
              <span>{{ blog.date }}</span>
            </div>
            <div class="meta d-flex align-items-center gap-2">
              <img src="@/assets/svg/icon3.svg" alt="Comment Icon" />
              <span>{{ blog.comments }} Comments</span>
            </div>
          </div>
  
          <img :src="blog.image" alt="Blog Image" class="img-fluid rounded mb-4" />
  
          <div class="content">
            <p v-for="(para, index) in blog.content" :key="index" class="mb-3">
              {{ para }}
            </p>
          </div>
        </div>
        <div v-else>
          <p>Loading blog...</p>
        </div>
      </div>
    </section>
</template>
  
<script setup>
import blog1Img from '@/assets/images/blog1.png'
import blog2Img from '@/assets/images/blog2.png'
import blog3Img from '@/assets/images/blog3.png'


  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  
  // Dummy data, replace with API or Vuex later
  const blogList = [
  {
    id: '1',
    title: 'Understanding LGBTQ Divorce Laws in the U.S.',
    author: 'XYZ',
    date: '22 Dec, 2024',
    comments: 1,
    image: blog1Img,
    content: [
      'Divorce laws vary by state, but same-sex couples now enjoy the same legal rights and responsibilities.',
      'This article explores the key points to be aware of when navigating an LGBTQ divorce.This article explores the key points to be aware of when navigating an LGBTQ divorce.This article explores the key points to be aware of when navigating an LGBTQ divorce.This article explores the key points to be aware of when navigating an LGBTQ divorce.This article explores the key points to be aware of when navigating an LGBTQ divorce.This article explores the key points to be aware of when navigating an LGBTQ divorce.This article explores the key points to be aware of when navigating an LGBTQ divorce.This article explores the key points to be aware of when navigating an LGBTQ divorce.This article explores the key points to be aware of when navigating an LGBTQ divorce.This article explores the key points to be aware of when navigating an LGBTQ divorce.This article explores the key points to be aware of when navigating an LGBTQ divorce.This article explores the key points to be aware of when navigating an LGBTQ divorce.',
    ],
  },
  {
    id: '2',
    title: 'How to Prepare for a Divorce as an LGBTQ Couple',
    author: 'XYZ',
    date: '17 Dec, 2024',
    comments: 3,
    image: blog2Img,
    content: [
      'Preparation is critical for any divorce, especially for LGBTQ couples with complex financial and parental considerations.',
      'Learn what steps you can take to protect your interests.',
    ],
  },
  {
    id: '3',
    title: 'Top Questions to Ask Your Divorce Lawyer',
    author: 'XYZ',
    date: '27 Dec, 2024',
    comments: 8,
    image: blog3Img,
    content: [
      'Choosing the right lawyer is critical to a successful divorce.',
      'These are the essential questions you should ask before hiring an attorney.',
    ],
  },
  {
    id: '4',
    title: 'Understanding LGBTQ Divorce Laws in the U.S.',
    author: 'XYZ',
    date: '22 Dec, 2024',
    comments: 1,
    image: blog1Img,
    content: [
      'This entry repeats blog 1 as a placeholder for layout testing.',
      'You can update it with fresh content later.',
    ],
  },
]


  const route = useRoute()
  const blog = ref(null)
  
  onMounted(() => {
  const blogId = route.params.id
  console.log('Route param blogId:', blogId)  // DEBUG LOG
  blog.value = blogList.find((b) => b.id === blogId)
})

  </script>
  
  <style scoped>
  .blog-inner img {
    max-height: 400px;
    object-fit: cover;
  }
  </style>
  