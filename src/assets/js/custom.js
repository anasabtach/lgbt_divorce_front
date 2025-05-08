
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import Chart from 'chart.js/auto';
import { nextTick } from 'vue';

export function initSliders() {
  nextTick(() => {
    if (document.querySelector('.my-loop-swiper') && !document.querySelector('.my-loop-swiper').swiper) {
      new Swiper('.my-loop-swiper', {
        loop: true,
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
    
    // Slider 2: Second Swiper
    new Swiper('.swiper-second', {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 30,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        624: {
          slidesPerView: 2,
        },
        1230: {
          slidesPerView: 3,
        },
      },
    });

    // Slider 3: Testimonials
    new Swiper('.test-swiper', {
      slidesPerView: 2,
      spaceBetween: 10,
      loop: true,
      loopedSlides: 2,
      navigation: {
        nextEl: '.testimonial-button-next',
        prevEl: '.testimonial-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      },
    });

    // Slider 4: Blog Swiper
    new Swiper('.blog-swiper', {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      loopedSlides: 3,
      navigation: {
        nextEl: '.blog-button-next',
        prevEl: '.blog-button-prev',
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
      },
    });

    
  });
}


// Counter function
export function initCounters() {
  const counters = document.querySelectorAll('.counter-number');
  const speed = 200; // lower is faster

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toLocaleString() + 'k+';
      }
    };

    updateCount();
  });
}

// Chart functions
export function initCharts() {
  // Donut Chart
  const donutCtx = document.getElementById('applicationsChart').getContext('2d');
  new Chart(donutCtx, {
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
  });

  // Data for bar chart
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
  };

  // Custom spacing plugin
  const addLegendSpacing = {
    id: 'addLegendSpacing',
    beforeInit(chart) {
      const fitValue = chart.legend.fit;
      chart.legend.fit = function () {
        fitValue.call(this);
        this.height += 20;
      };
    }
  };

  // Bar Chart
  const barCtx = document.getElementById('barChart').getContext('2d');
  const chart = new Chart(barCtx, {
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
  });

  // Tabs to switch data
  document.querySelectorAll('#viewTabs .nav-link').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#viewTabs .nav-link').forEach(el => el.classList.remove('active'));
      btn.classList.add('active');
      const selected = btn.getAttribute('data-chart');
      chart.data = chartData[selected];
      chart.update();
    });
  });
}

// Calendar function
export function initCalendar() {
  const calendarGrid = document.getElementById("calendar-grid");
  const monthYear = document.getElementById("month-year");

  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  function renderCalendar(month, year) {
    monthYear.textContent = `${monthNames[month]} ${year}`;
    calendarGrid.innerHTML = "";

    const firstDay = new Date(year, month).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement("div");
      calendarGrid.appendChild(empty);
    }

    for (let day = 1; day <= totalDays; day++) {
      const cell = document.createElement("div");
      cell.textContent = day;
      cell.classList.add("day");

      if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
        cell.classList.add("today");
      }

      calendarGrid.appendChild(cell);
    }
  }

  function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
  }

  function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
  }

  document.getElementById("prev-month").addEventListener("click", prevMonth);
  document.getElementById("next-month").addEventListener("click", nextMonth);

  renderCalendar(currentMonth, currentYear);
}

