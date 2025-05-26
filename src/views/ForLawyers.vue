<script setup>
import LawyersSlider from '../components/LawyersSlider.vue'
</script>



<template>
    <section class="find-lawyer-banner">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col text-center">
                    <h2>
                        Join Our Network of Expert Divorce Lawyers Connect with Clients.
                        Grow Your Practice.
                    </h2>
                    <router-link to="/login" class="btn1"><span>Sign Up Today & Expand Your Reach!</span></router-link>

                    <!-- Scroll link image -->
                    <a href="#lawyers">
                        <img src="@/assets/images/Link.png" alt="Scroll to Lawyers" class="bottom-arrow">
                    </a>
                </div>
            </div>
        </div>
    </section>

    <LawyersSlider/>

    <section class="expertise">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <h4>Lawyers Expertise</h4>
                    <h2>LGBTQ+ Divorce</h2>
                    <p>
                        Lawyers specializing in LGBT divorce possess a deep understanding of the unique legal and personal issues that can arise in same-sex separations. Their expertise includes navigating complex matters such as property division in non-traditional relationships, custody and parental rights for non-biological parents, and the varying recognition of same-sex marriages across different states or countries. These legal professionals are also sensitive to the emotional and social aspects of LGBT divorce, offering respectful and inclusive representation. With a strong grasp of evolving laws and a commitment to equality, LGBT divorce lawyers ensure that their clients receive fair treatment and clear guidance throughout the legal process.

                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="sign-up">
        <div class="container container-small">
            <div class="row justify-content-center">
                <div class="col-lg-7 content-col">
                    <h2>Sign Up as a Lawyer</h2>
                    <p>As the LGBT community gets married, there will be a considerable number of couples seeking
                        Divorce/Dissolution of their Marriage or Civil Union. They will need a Divorce Lawyer like you.

                    </p>
                    <p>We, at www.GayDivorceUSA.com (GDUSA), facilitate the meeting of such couples with a Divorce
                        Lawyer like you, in their own geographical area.

                    </p>
                      <router-link class="btn1 d-none d-lg-block" to="/create-account">Sign Up as a Lawyer</router-link>
                </div>
                <div class="col-lg-5">
                    <img src="@/assets/images/man.png" alt="Lawyer Illustration" class="w-100">
                </div>
            </div>
        </div>
    </section>
</template>

