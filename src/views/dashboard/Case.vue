<script setup>
import { onMounted, ref, reactive, computed } from 'vue'
  import Chart from 'chart.js/auto'
// Refs
const applicationsChart = ref(null)
  const profileViewsChart = ref(null)
  const calendarGrid = ref(null)
  
  // Date State
  const today = new Date()
  const current = reactive({ month: today.getMonth(), year: today.getFullYear() })
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  
  const monthLabel = computed(() => `${monthNames[current.month]} ${current.year}`)
  
  function renderCalendar() {
    const grid = document.getElementById("calendar-grid")
    const days = grid.querySelectorAll(".day")
    days.forEach(day => day.remove())
  
    const firstDay = new Date(current.year, current.month).getDay()
    const totalDays = new Date(current.year, current.month + 1, 0).getDate()
  
    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement("div")
      grid.appendChild(empty)
    }
  
    for (let day = 1; day <= totalDays; day++) {
      const cell = document.createElement("div")
      cell.textContent = day
      cell.classList.add("day")
  
      if (
        day === today.getDate() &&
        current.month === today.getMonth() &&
        current.year === today.getFullYear()
      ) {
        cell.classList.add("today")
      }
  
      grid.appendChild(cell)
    }
  }
  
  function prevMonth() {
    current.month--
    if (current.month < 0) {
      current.month = 11
      current.year--
    }
    renderCalendar()
  }
  
  function nextMonth() {
    current.month++
    if (current.month > 11) {
      current.month = 0
      current.year++
    }
    renderCalendar()
  }
  
  onMounted(() => {
    // Doughnut Chart
    new Chart(applicationsChart.value, {
      type: 'doughnut',
      data: {
        labels: ['On-Site', 'Remote', 'Hybrid'],
        datasets: [{
          data: [98, 64, 36],
          backgroundColor: ['#A6F4C5', '#B6DBFF', '#FF3B30'],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '70%',
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true }
        }
      }
    })
  
    // Bar Chart
    const chartData = {
      day: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          { label: 'Recruiter', backgroundColor: '#007bff', data: [55, 48, 50, 42, 50, 48, 40] },
          { label: 'User', backgroundColor: '#A6F4C5', data: [70, 75, 68, 60, 72, 76, 65] },
          { label: 'Incognito', backgroundColor: '#B6DBFF', data: [15, 25, 12, 18, 15, 20, 10] }
        ]
      },
      week: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          { label: 'Recruiter', backgroundColor: '#007bff', data: [200, 180, 220, 210] },
          { label: 'User', backgroundColor: '#A6F4C5', data: [300, 320, 310, 330] },
          { label: 'Incognito', backgroundColor: '#B6DBFF', data: [80, 60, 90, 100] }
        ]
      },
      month: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
          { label: 'Recruiter', backgroundColor: '#007bff', data: [900, 950, 870, 1000] },
          { label: 'User', backgroundColor: '#A6F4C5', data: [1200, 1300, 1100, 1250] },
          { label: 'Incognito', backgroundColor: '#B6DBFF', data: [300, 280, 260, 310] }
        ]
      }
    }
  
    const addLegendSpacing = {
      id: 'addLegendSpacing',
      beforeInit(chart) {
        const fitValue = chart.legend.fit
        chart.legend.fit = function () {
          fitValue.call(this)
          this.height += 20
        }
      }
    }
  
    const chart = new Chart(profileViewsChart.value, {
      type: 'bar',
      data: chartData.day,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            align: 'start',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle'
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 50 }
          }
        }
      },
      plugins: [addLegendSpacing]
    })
  
    document.querySelectorAll('#viewTabs .nav-link').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#viewTabs .nav-link').forEach(el => el.classList.remove('active'))
        btn.classList.add('active')
  
        const selected = btn.getAttribute('data-chart')
        chart.data = chartData[selected]
        chart.update()
      })
    })
  
    // Render initial calendar
    renderCalendar()
  })

  
const form = reactive({
   caseTitle: '',
  caseType: '',
  courtName: '',
  filingDate: '',
  status: '',
  clientName: '',
  clientEmail: '',
  opponentName: '',
  description: '',
  consultationFee: null,
  retainerFee: null,
  paymentStatus: '',
})

const submitForm = () => {
  // Basic client-side validation
  if (!form.name || !form.email || !form.subject || !form.message) {
    alert('Please fill out all fields.')
    return
  }

  // Example: log the form or connect to an API
  console.log('Submitted form:', form)
  alert('Your message has been sent successfully!')

  // Clear form (optional)
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}

  import DashboardLeft from '@/components/DashboardLeft.vue'
  import DashboardRight from '@/components/DashboardRight.vue'
  </script>
  
<template>
    <section id="overview">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
          <DashboardLeft/>
      </div>
      <div class="col-md-6">
        <h4 class="hdbold mt-5 mb-3">Add New Case</h4>
         <form @submit.prevent="submitForm">
  <!-- Case Title -->
  <div class="form-floating mb-3">
    <input v-model="form.caseTitle" type="text" class="form-control" id="caseTitle" placeholder="Case Title" required />
    <label for="caseTitle">Case Title</label>
  </div>

  <!-- Case Type -->
  <div class="form-floating mb-3">
    <select v-model="form.caseType" class="form-select" id="caseType" required>
      <option disabled value="">Select Case Type</option>
      <option>Divorce</option>
      <option>Custody</option>
      <option>Property</option>
      <option>Civil</option>
      <option>Criminal</option>
    </select>
    <label for="caseType">Case Type</label>
  </div>

  <!-- Court Name -->
  <div class="form-floating mb-3">
    <input v-model="form.courtName" type="text" class="form-control" id="courtName" placeholder="Court Name" />
    <label for="courtName">Court Name</label>
  </div>

  <!-- Filing Date -->
  <div class="form-floating mb-3">
    <input v-model="form.filingDate" type="date" class="form-control" id="filingDate" />
    <label for="filingDate">Filing Date</label>
  </div>

  <!-- Status -->
  <div class="form-floating mb-3">
    <select v-model="form.status" class="form-select" id="status">
      <option disabled value="">Select Status</option>
      <option>Open</option>
      <option>In Progress</option>
      <option>Closed</option>
      <option>Settled</option>
    </select>
    <label for="status">Case Status</label>
  </div>

  <!-- Client Name -->
  <div class="form-floating mb-3">
    <input v-model="form.clientName" type="text" class="form-control" id="clientName" placeholder="Client Name" required />
    <label for="clientName">Client Name</label>
  </div>

  <!-- Client Email -->
  <div class="form-floating mb-3">
    <input v-model="form.clientEmail" type="email" class="form-control" id="clientEmail" placeholder="Client Email" />
    <label for="clientEmail">Client Email</label>
  </div>

  <!-- Opponent Name -->
  <div class="form-floating mb-3">
    <input v-model="form.opponentName" type="text" class="form-control" id="opponentName" placeholder="Opponent Name" />
    <label for="opponentName">Opposing Party</label>
  </div>

  <!-- Case Description -->
  <div class="form-floating mb-4">
    <textarea v-model="form.description" class="form-control" placeholder="Case Description" id="description" style="height: 150px"></textarea>
    <label for="description">Case Description</label>
  </div>

  <!-- Consultation Fee -->
  <div class="form-floating mb-3">
    <input v-model="form.consultationFee" type="number" class="form-control" id="consultationFee" placeholder="Consultation Fee" />
    <label for="consultationFee">Consultation Fee ($)</label>
  </div>

  <!-- Retainer Fee -->
  <div class="form-floating mb-3">
    <input v-model="form.retainerFee" type="number" class="form-control" id="retainerFee" placeholder="Retainer Fee" />
    <label for="retainerFee">Retainer Fee ($)</label>
  </div>

  <!-- Payment Status -->
  <div class="form-floating mb-4">
    <select v-model="form.paymentStatus" class="form-select" id="paymentStatus">
      <option disabled value="">Select Payment Status</option>
      <option>Paid</option>
      <option>Pending</option>
      <option>Partial</option>
      <option>Overdue</option>
    </select>
    <label for="paymentStatus">Payment Status</label>
  </div>

  <!-- Submit Button -->
  <div class="d-grid">
    <button type="submit" class="btn btn-success btn-lg rounded-pill">
      Save Case
    </button>
  </div>
</form>

       
      </div>
      <div class="col-md-3">
           <DashboardRight/>
</div>
    </div>
  </div>
</section>
</template>
