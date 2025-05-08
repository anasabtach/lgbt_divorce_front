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
  </script>
  
<template>
    <section id="overview">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <div class="left-sidebar">
          <div class="personal-info">
            <i class="fa-solid fa-pen-to-square  edit"></i>
            <img src="@/assets/images/avatar.png" class="avatar" alt="">
            <h4 class="name">Lawyer Name</h4>
            <h5 class="designation">Law Degree (LGBT)</h5>
            <h6 class="case-add">Open to Case or Ad</h6>
          </div>
          <div class="connections">
            <div class="r1">
              <div class="icon-with-text">
                <div class="icon-div">
                  <i class="fa-solid fa-briefcase"></i>
                </div>
                <div>
                  <h5>Work Experience</h5>
                  <h3>10+ years</h3>
                </div>
              </div>
              <div class="icon-with-text">
                <div class="icon-div">
                  <i class="fa-solid fa-share-nodes"></i>
                </div>
                <div>
                  <h5>Connections</h5>
                  <h3>1,500+</h3>
                </div>
              </div>
            </div>
            <div class="r2  ">
              <div class="icon-with-text">
                <div class="icon-div">
                  <i class="fa-solid fa-chart-simple"></i>
                </div>
                <div>
                  <h5>Work Level</h5>
                  <h3>Expert</h3>
                </div>
              </div>
              <div class="icon-with-text">
                <div class="icon-div">
                  <i class="fa-solid fa-users"></i>
                </div>
                <div>
                  <h5>Followers</h5>
                  <h3>2,300+</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="experience">
            <h4>Experience</h4>
            <div class="icon-with-text">
              <div class="icon-div">
                <i class="fa-solid fa-briefcase"></i>
              </div>
              <div>
                <h3>LGBT Lawyer Specializing in Civil Rights</h3>
                <h6>Tech Innovators Inc.(Jan 2018 - Present)</h6>
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
          </div>
          <div class="enhanced">
            <div class="box">
              <h3>Enhanced Analytics Dashboard</h3>
              <p>Get deeper insights with our revamped analytics tools.</p>
              <a href="" class="btn2">Try for Free</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row inner-row">
          <div class="col-md-6">
            <div class="total">
              <div class="w-50">
                <div class="icon-with-text">
                  <h6>Total Applications</h6>
                  <i class="fa-solid fa-file"></i>
                </div>
                <div class="icon-with-text">
                  <h3>198</h3>
                  <div class="percent">
                    <h6><i class="fa-solid fa-arrow-up"></i> 9.78%</h6>
                    <p>from last week</p>
                  </div>
                </div>
              </div>
              <div class="w-50">
                <div class="icon-with-text">
                  <h6>Interview Schedule</h6>
                  <i class="fa-solid fa-briefcase"></i>
                </div>
                <div class="icon-with-text">
                  <h3>36</h3>
                  <div class="percent">
                    <h6><i class="fa-solid fa-arrow-up"></i> 6.29%</h6>
                    <p>from last week</p>
                  </div>
                </div>
              </div>
              <div class="w-50">
                <div class="icon-with-text">
                  <h6>Application Rejected</h6>
                  <i class="fa-solid fa-file-excel"></i>
                </div>
                <div class="icon-with-text">
                  <h3>56</h3>
                  <div class="percent">
                    <h6><i class="fa-solid fa-arrow-down danger"></i> 1.78%</h6>
                    <p>from last week</p>
                  </div>
                </div>
              </div>
              <div class="w-50">
                <div class="icon-with-text">
                  <h6>Profile Visited</h6>
                  <i class="fa-solid fa-eye"></i>
                </div>
                <div class="icon-with-text">
                  <h3>96</h3>
                  <div class="percent">
                    <h6><i class="fa-solid fa-arrow-up"></i> 5.32%</h6>
                    <p>from last week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="summary">
              <div class="text-with-btn">
                <h4>Applications Summary</h4>
                <a href="" class="btn2">Work Model</a>
              </div>
              <div class="round-chart">
                <!-- Doughnut Chart -->
                <canvas id="applicationsChart" ref="applicationsChart" width="200" height="200"></canvas>
                <div class="mt-2">
                  <h3 class="fw-bold">198</h3>
                  <p class="text-muted">Applications</p>
                </div>
                <ul class="list-unstyled">
                <li><span class="legend-dot" style="background-color: #A6F4C5;"></span> On-Site - 98</li>
                <li><span class="legend-dot" style="background-color: #B6DBFF;"></span> Remote - 64</li>
                <li><span class="legend-dot" style="background-color: #FF3B30;"></span> Hybrid - 36</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="chart-card">
  <div class="d-flex justify-content-between align-items-center mb-3">
    <h5 class="mb-0">Profile Views</h5>
    <ul class="nav nav-pills" id="viewTabs">
      <li class="nav-item">
        <button class="nav-link active" data-chart="day">Day</button>
      </li>
      <li class="nav-item">
        <button class="nav-link" data-chart="week">Week</button>
      </li>
      <li class="nav-item">
        <button class="nav-link" data-chart="month">Month</button>
      </li>
    </ul>
  </div>
  <canvas ref="profileViewsChart" width="400" height="200"></canvas>
</div>
        <div class="upcoming-hearings">
  <div class="hearings">
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
        <tr><td>Sarah</td><td>LGBT Divorce</td><td>2025-04-10</td></tr>
        <tr><td>Joseph</td><td>LGBT Divorce</td><td>2025-04-10</td></tr>
        <tr><td>Micheal</td><td>LGBT Divorce</td><td>2025-04-10</td></tr>
        <tr><td>Jason</td><td>LGBT Divorce</td><td>2025-04-10</td></tr>
        <tr><td>Tom</td><td>LGBT Divorce</td><td>2025-04-10</td></tr>
      </tbody>
    </table>
  </div>

  <div class="calendar">
    <div class="calendar-header">
        <button @click="prevMonth">Prev</button>
        <span id="month-year">{{ monthLabel }}</span>
        <button @click="nextMonth">Next</button>
    </div>
    <div class="calendar-grid" id="calendar-grid">
      <!-- Weekdays -->
      <div class="weekday">SUN</div>
      <div class="weekday">MON</div>
      <div class="weekday">TUE</div>
      <div class="weekday">WED</div>
      <div class="weekday">THU</div>
      <div class="weekday">FRI</div>
      <div class="weekday">SAT</div>
    </div>
  </div>
</div>
      </div>
      <div class="col-md-3">
  <div class="right-sidebar">
    <div class="search-bar">
     <form action="">
  <input required type="text" placeholder="Search job, company, etc">
  <button type="submit"><i class="fa-solid fa-filter"></i></button>
</form>
    </div>
  
    <!-- Card 1 -->
    <div class="card">
      <div class="card-header">
        <div class="icon"></div>
        <div>
          <div class="title">Case 1</div>
          <div class="location">Lorem Ipsum • Leipzig, GER</div>
        </div>
      </div>
      <div class="tags">
        <div class="tag">Full-Time</div>
        <div class="tag">Hybrid</div>
      </div>
      <div class="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
      <div class="fees">
          <div>
              <h6>Consultation Fees</h6>
              <h5>$150,000 - $180,000</h5>
          </div>
          <button class="consult-btn">Consult</button>
      </div>
      
    </div>
  
    <!-- Card 2 -->
    <div class="card">
      <div class="card-header">
        <div class="icon"></div>
        <div>
          <div class="title">Case 2</div>
          <div class="location">Lorem Ipsum • Leipzig, GER</div>
        </div>
      </div>
      <div class="tags">
        <div class="tag">Full-Time</div>
        <div class="tag">Hybrid</div>
      </div>
      <div class="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </div>
      <div class="fees">
          <div>
              <h6>Consultation Fees</h6>
              <h5>$150,000 - $180,000</h5>
          </div>
          <button class="consult-btn">Consult</button>
      </div>
    </div>
  
    <!-- Notifications -->
    <div class="notification-section">
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
    </div>
  </div>
</div>
    </div>
  </div>
</section>
</template>