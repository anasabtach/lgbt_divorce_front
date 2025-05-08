<template>
  <section id="counter">
      <div class="container">
          <div class="row">
              <div class="counter-container">
                  <div class="counter-item">
                      <img src="@/assets/svg/counter_1_1.svg" alt="Case Done Icon">
                      <div class="numbers">
                          <div class="counter-number" data-target="10">0</div>
                          <div class="counter-label">Case Done</div>
                      </div>
                  </div>
                  <div class="counter-item">
                      <img src="@/assets/svg/counter_1_2.svg" alt="Expert Attorneys Icon">
                      <div class="numbers">
                          <div class="counter-number" data-target="12">0</div>
                          <div class="counter-label">Expert Attorneys</div>
                      </div>
                  </div>
                  <div class="counter-item">
                      <img src="@/assets/svg/counter_1_3.svg" alt="Happy Clients Icon">
                      <div class="numbers">
                          <div class="counter-number" data-target="15">0</div>
                          <div class="counter-label">Happy Clients</div>
                      </div>
                  </div>
                  <div class="counter-item">
                      <img src="@/assets/svg/counter_1_4.svg" alt="Award Winning Icon">
                      <div class="numbers">
                          <div class="counter-number" data-target="20">0</div>
                          <div class="counter-label">Award Winning</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import {  initCounters } from '../assets/js/custom.js';

export default {
  mounted() {        
      initCounters()
  }
};

</script>
