<template>
    <section id="faqs">
        <div class="container">
            <div class="row">
                <div class="faq-box">
                    <h3>FAQ'S</h3>
                    <h4>Frequently Asked Questions</h4>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Can any divorce lawyer handle LGBTQ divorces?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Yes, all divorce lawyers are legally qualified to handle LGBTQ divorces. Our
                                    directory highlights professionals committed to serving LGBTQ clients.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    What if no lawyers are listed in my city?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Yes, all divorce lawyers are legally qualified to handle LGBTQ divorces. Our
                                    directory highlights professionals committed to serving LGBTQ clients.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How do lawyers update their ads?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Yes, all divorce lawyers are legally qualified to handle LGBTQ divorces. Our
                                    directory highlights professionals committed to serving LGBTQ clients.
                                </div>
                            </div>
                        </div>
                    </div>
                    <router-link v-if="showButton" to="/faq" class="btn1"><span>See More FAQs</span><i class="fa-solid fa-arrow-right"></i></router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  props: {
    showButton: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
