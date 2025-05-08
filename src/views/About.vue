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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.

                    </p>
                    <a href="" class="btn1"><span>More About</span><i class="fa-solid fa-arrow-right"></i></a>
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
                    <a href="" class="btn1"><span>Sign Up as a Lawyer</span></a>
                </div>
                <div class="col-lg-5">
                    <img src="@/assets/images/man.png" alt="Lawyer Illustration" class="w-100">
                </div>
            </div>
        </div>
    </section>
</template>

