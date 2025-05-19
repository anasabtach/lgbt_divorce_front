<template>
<div class="right-sidebar">
    <div class="search-bar">
     <form action="">
  <input required type="text" placeholder="Search job, company, etc">
  <button type="submit"><i class="fa-solid fa-filter"></i></button>
</form>
    </div>
  
    <!-- Dynamic Cases -->
    <template v-if="dashboardData && dashboardData.cases && dashboardData.cases.length">
      <div
        class="card"
        v-for="(caseItem, idx) in dashboardData.cases"
        :key="caseItem.id || idx"
      >
        <div class="card-header">
          <div class="icon"></div>
          <div>
            <div class="title">{{ caseItem.title || `Case ${idx + 1}` }}</div>
            <div class="location">{{ caseItem.location }}</div>
          </div>
        </div>
        <div class="tags">
          <div class="tag" v-for="(tag, tIdx) in caseItem.tags || []" :key="tIdx">{{ tag }}</div>
        </div>
        <div class="description">
          {{ caseItem.case_description }}
        </div>
        <div class="fees" v-if="caseItem.fees">
            <div>
                <h6>Consultation Fees</h6>
                <h5>{{ caseItem.fees }}</h5>
            </div>
            <button class="consult-btn">Consult</button>
        </div>
      </div>
    </template>
    <!-- Fallback if no cases -->
    <template v-else>
      <div class="card">
        <div class="card-header">
          <div class="icon"></div>
          <div>
            <div class="title">No Cases</div>
            <div class="location"></div>
          </div>
        </div>
        <div class="description">No case data available.</div>
      </div>
    </template>
  
    <!-- Notifications (static for now) -->
    <!-- <div class="notification-section">
      <h4>Notification</h4>
  
      <div class="section-label">Today</div>
      <div class="notification">
        <div class="icon"><i class="fa-solid fa-download"></i></div>
        <div>
          <div class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div class="timestamp">10:15 AM</div>
        </div>
      </div>
  
      <div class="notification">
        <div class="icon" style="background: #dff6e1;"><i class="fa-solid fa-user"></i></div>
        <div>
          <div class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div class="timestamp">9:00 AM</div>
        </div>
      </div>
  
      <div class="section-label">Yesterday</div>
      <div class="notification">
        <div class="icon"><i class="fa-solid fa-circle-check"></i></div>
        <div>
          <div class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div class="timestamp">4:30 AM</div>
        </div>
      </div>
  
      <div class="notification">
        <div class="icon" style="background: #dff6e1;"><i class="fa-solid fa-envelope-open"></i></div>
        <div>
          <div class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div class="timestamp">2:00 AM</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
defineProps({
  dashboardData: {
    type: Object,
    default: null
  }
})
</script>