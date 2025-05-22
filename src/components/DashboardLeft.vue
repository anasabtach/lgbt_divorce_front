<template>
<div class="left-sidebar">
          <div class="personal-info">
            <button class="edit-btn" @click="$router.push('/update-profile')" title="Edit Profile">
              <i class="fa-solid fa-pen-to-square edit"></i>
            </button>
            <img
                :src="props.user?.image_url || avatarUrl"
                class="avatar"
                alt=""
              >
            <h4 class="name">{{ (props.user?.first_name || '').trim() }} {{ (props.user?.last_name || '').trim() }}</h4>
            <h5 class="designation">{{ (props.user?.law_firm_name || 'Law Degree (LGBT)').trim() }}</h5>
            <h6 class="case-add">Open to Case or Ad</h6>

    <!-- <div v-if="props.user?.mobile_phone" class="mt-1">
      <i class="fa-solid fa-phone"></i>
      <span>{{ props.user.mobile_phone.trim() }}</span>
    </div>
    <div v-if="props.user?.website_url" class="mt-1">
      <i class="fa-solid fa-globe"></i>
      <a :href="props.user.website_url.trim()" target="_blank">{{ props.user.website_url.trim() }}</a>
    </div>
    <div v-if="props.user?.address" class="mt-1">
      <i class="fa-solid fa-location-dot"></i>
      <span>
        {{ props.user.address.trim() }},
        {{ props.user.city_town?.trim() }},
        {{ props.user.county?.trim() }},
        {{ props.user.zip_code }}
      </span>
    </div> -->
          </div>
          <div class="connections">
            <div class="r1">
              <div class="icon-with-text">
                <div class="icon-div">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <!-- <h5>Work Experience</h5> -->
                   <h5>Email Adress</h5>
                              <div v-if="props.user?.email" class="mt-2">
              <span style="font-size: 13px;">{{ props.user.email }}</span>
            </div>
                </div>
              </div>
              <div class="icon-with-text">
                <div class="icon-div">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div>
 <div v-if="props.user?.mobile_phone" class="mt-1">
  <h5>Phone Number</h5>
      <span style="font-size: 13px;">{{ props.user.mobile_phone.trim() }}</span>
    </div>






                  <!-- <h5>Connections</h5>
                  <h3>1,500+</h3> -->
                </div>
              </div>
            </div>
            <div class="r2  ">
              <div class="icon-with-text" style="width: 73%;">
                <div class="icon-div">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
<div v-if="props.user?.address" class="mt-1">
  <h5>Address</h5>
      <span style="font-size: 13px;">
        {{ props.user.address.trim() }},
        {{ props.user.city_town?.trim() }},
        {{ props.user.county?.trim() }},
        {{ props.user.zip_code }}
      </span>
    </div>



                  
                  <!-- <h5>Work Level</h5>
                  <h3>Expert</h3> -->
                </div>
              </div>
              <!-- <div class="icon-with-text">
                <div class="icon-div">
                  <i class="fa-solid fa-users"></i>
                </div>
                <div>
                  <h5>Followers</h5>
                  <h3>2,300+</h3>
                </div>
              </div> -->
            </div>
               <div class="r2  ">
              <div class="icon-with-text" style="width: 73%;">
                <div class="icon-div">
                  <i class="fa-solid fa-globe"></i>
                </div>
                <div>
    <div v-if="props.user?.website_url" class="mt-1" style="font-size: 13px;">
  <h5>Website Url</h5>
      <a :href="props.user.website_url.trim()" target="_blank">{{ props.user.website_url.trim() }}</a>
    </div>



                  
                  <!-- <h5>Work Level</h5>
                  <h3>Expert</h3> -->
                </div>
              </div>
              <!-- <div class="icon-with-text">
                <div class="icon-div">
                  <i class="fa-solid fa-users"></i>
                </div>
                <div>
                  <h5>Followers</h5>
                  <h3>2,300+</h3>
                </div>
              </div> -->
            </div>
          </div>
          <!-- <div class="experience">
            <h4>Experience</h4>
            <div class="icon-with-text">
              <div class="icon-div">
                <i class="fa-solid fa-briefcase"></i>
              </div>
              <div>
                <h3>LGBT Lawyer Specializing in Civil Rights</h3>
                <h6>{{ (props.user?.law_firm_name || 'Tech Innovators Inc.') }} (Jan 2018 - Present)</h6>
                <p>Led dev team to design scalable software, improve performance, and mentor junior engineers.</p>
              </div>
            </div>
            <div class="icon-with-text">
              <div class="icon-div">
                <i class="fa-solid fa-briefcase"></i>
              </div>
              <div>
                <h3>LGBTQ+ Family Law Specialist</h3>
                <h6>CodeCrafters Ltd. (Mar 2013 - Dec 2017)</h6>
                <p>Developed and maintained web apps, collaborated to define requirements, and optimized existing
                  codebases.</p>
              </div>
            </div>
          </div> -->
          <div class="enhanced">
            <div class="box">
              <h3>Enhanced Analytics Dashboard</h3>
              <p>Get deeper insights with our revamped analytics tools.</p>
              <a href="" class="btn2">Try for Free</a>
            </div>
          </div>
        </div>
</template>

<script setup>
import avatarImg from '@/assets/images/avatar.png'
const props = defineProps({
  user: {
    type: Object,
    default: null
  }
})
const avatarUrl = avatarImg
</script>

<style scoped>
.avatar{
    width: 120px;
}
</style>