<template>
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
</template>