<template>
<div class="right-sidebar">
    <div class="search-bar">
     <form action="" @submit.prevent>
  <!-- <input required type="text" placeholder="Search job, company, etc"> -->
  <button type="button"  @click="$router.push('/case')" title="Create Case"><i class="fa-solid fa-suitcase"></i></button>
  <button type="button" @click="$router.push('/profile')" title="My Account"><i class="fa-solid fa-user"></i></button>
  <button type="button" @click="$router.push('/update-profile')" title="Edit Profile"><i class="fa-solid fa-users"></i></button>
  <button type="button" @click="$router.push('/create-your-ad')" title="Create Ad"><i class="fa-solid  fa-square-plus"></i></button>
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
          <div class="icon fa-solid fa-suitcase"></div>
          <div>
            <div class="title">{{ caseItem.title || `Case ` }}</div>
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
<div class="upcoming-hearings"><div class="hearings" style="width: 100%;">
  <h3>Upcoming Hearings</h3>
  <table>
    <thead>
      <tr>
        <th>Client</th>
        <th>Case Type</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>John Doe</td><td>Property Dispute</td><td>6/1/2025</td></tr><tr><td>John Doe</td><td>Propertqy Dispute</td><td>6/1/2025</td></tr></tbody></table></div>
      
      
      
      
      
</div>











        <!-- <div class="hearings">
    <h3>Upcoming Hearings</h3>
    <table>
      <thead>
        <tr>
          <th>Client</th>
          <th>Case Type</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="dashboardData && dashboardData.upcomingHearings && dashboardData.upcomingHearings.length">
          <tr v-for="hearing in dashboardData.upcomingHearings" :key="hearing.id">
            <td>{{ hearing.client_name }}</td>
            <td>{{ hearing.case_type }}</td>
            <td>{{ hearing.upcoming_hearing ? (new Date(hearing.upcoming_hearing)).toLocaleDateString() : '' }}</td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td colspan="3">No upcoming hearings</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div> -->
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
<style scoped>
.right-sidebar .card-header .icon {
    width: 40px;
    height: 40px;
    background: #ff0000 !important;
    border-radius: 10px;
    margin-right: 10px;
    color: white;
    padding: 12px;
}
.right-sidebar .search-bar form {
    display: flex;
    justify-content: flex-end !important;
}
</style>