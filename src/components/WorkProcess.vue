<script setup>
import { ref } from 'vue'

const showVideo = ref(false)
</script>


<template>
    <section id="process">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img
                    src="@/assets/svg/link.svg"
                    alt="Link Icon"
                    class="play-icon"
                    @click="showVideo = true"
                    />
                </div>
                <div class="col-md-6 process-content">
                    <h4>Work Process</h4>
                    <h2>Navigating the Law: Your Assurance of Peace</h2>
                    <div class="steps">
                        <div class="timeline">
                            <div class="dashed-line"></div>
                            <div class="step-container">
                                <div class="icon">
                                    <img src="@/assets/images/handshake-icon.png" alt="Consultation Icon" />
                                </div>
                                <div class="step-text">
                                    <h3>Initial Consultation</h3>
                                    <p>Our experienced lawyers thoroughly analyze the facts of each case. They then
                                        apply the relevant laws to provide clear.</p>
                                </div>
                            </div>
                            <div class="step-container">
                                <div class="icon">
                                    <img src="@/assets/images/evaluation-icon.png" alt="Evaluation Icon" />
                                </div>
                                <div class="step-text">
                                    <h3>Case Evaluation</h3>
                                    <p>We prioritize understanding your concerns and aligning with your goals. Your
                                        satisfaction is our top priority.</p>
                                </div>
                            </div>
                            <div class="step-container">
                                <div class="icon">
                                    <img src="@/assets/images/strategy-icon.png" alt="Strategy Icon" />
                                </div>
                                <div class="step-text">
                                    <h3>Legal Strategy</h3>
                                    <p>We develop a customized plan to protect your rights and achieve the best possible
                                        outcome.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section v-if="showVideo" @click.self="showVideo = false">
  <div class="video-modal">
    <div class="video-content">
      <button class="close-btn" @click="showVideo = false">×</button>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/Hfm94aHAbYQ?autoplay=1"
        title="Video"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</section>

</template>



<style>
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-content {
  position: relative;
  width: 80%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  background: #000;
}

.close-btn {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #fff;
  border: none;
  font-size: 24px;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 1;
}

</style>