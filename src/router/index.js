import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import ForLawyers from '@/views/ForLawyers.vue'
import Faq from '@/views/Faq.vue'
import Profile from '@/views/Profile.vue'
import CreateAccount from '@/views/CreateAccount.vue'
import Login from '@/views/Login.vue'
import ContactUs from '@/views/ContactUs.vue'
import Payment from '@/views/Payment.vue'
import CreateYourAd from '@/views/CreateYourAd.vue'
import Dashboard from '@/views/Dashboard.vue'
import ForgetPassword from '@/views/ForgetPassword.vue'
import UpdateProfile from '@/views/UpdateProfile.vue'
import BlogInner from '@/views/BlogInner.vue'
import Map from '../components/Map.vue'
import MyAds from '@/views/MyAds.vue'

const routes = [
  { path: '/', component: Home },  // Use 'component' instead of 'view'
  { path: '/about', component: About },
  { path: '/for-lawyers', component: ForLawyers },
  { path: '/faq', component: Faq },
  { path: '/profile', component: Profile },
  { path: '/create-account', component: CreateAccount, meta: { hideLayout: true } },
  { path: '/login', component: Login, meta: { hideLayout: true } },
  { path: '/contact-us', component: ContactUs, meta: { hideLayout: true } },
  { path: '/payment', component: Payment, meta: { hideLayout: true } },
  { path: '/create-your-ad', component: CreateYourAd, meta: { hideLayout: true } },
  { path: '/my-ads', component: MyAds },
  { path: '/dashboard', component: Dashboard, meta: { hideLayout: true } },
  { path: '/reset-password', component: ForgetPassword, meta: { hideLayout: true } },
  { path: '/blog/:id', name: 'BlogInner', component: BlogInner },
  { path: '/map', name: 'Map', component: Map },
  { path: '/update-profile', component: UpdateProfile, meta: { hideLayout: true } },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }  // Scrolls to the top of the page on route change
  }
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  // Restrict access to login and create-account if already logged in
  if (token && ['/login', '/create-account'].includes(to.path)) {
    next('/') // Redirect to home if logged in and trying to access login or create-account
  } 
  // Restrict access to update-profile if not logged in
  else if (!token && to.path === '/update-profile') {
    next('/login') // Redirect to login if not logged in and trying to access update-profile
  } 
  // Allow access to other routes
  else {
    next() // Proceed to the route
  }
})

export default router
