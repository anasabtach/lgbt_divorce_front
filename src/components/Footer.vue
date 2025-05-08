<script setup>
import footerLogo from '@/assets/images/logo.png'
</script>

<template>
    <section id="newsletter">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h4>Newsletter</h4>
                    <h2>Sign Up to get latest Update</h2>
                </div>
                <div class="col-md-6">
                    <form action="">
                        <input required type="email" placeholder="Enter your Email" class="form-control">
                        <input class="btn1" type="submit" value="Subscribe">
                    </form>
                </div>
            </div>
        </div>
    </section>
    <section id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-3 left-col">
                    <div>
                        <h4>Pages</h4>
                        <ul>
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/profile">FOR LAWYERS</router-link></li>
                            <li><router-link to="/faq">Faq</router-link></li>
                            <li><router-link to="/about">ABOUT</router-link></li>
                            <li><router-link to="/contact-us">CONTACT US</router-link></li>
                            <li><router-link to="/login">SIGN IN</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 center-col">
                    <img :src="footerLogo" alt="">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the
                        industry's standard dummy text ever since the 1500s.</p>
                    <div class="social-icons">
                        <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                        <a href=""><i class="fa-brands fa-twitter"></i></a>
                        <a href=""><i class="fa-brands fa-linkedin"></i></a>
                        <a href=""><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                <div class="col-md-3 right-col">
                    <div class="icon-with-text">
                        <div class="icon-div">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div>
                            <h5>Location</h5>
                            <small>123 your address</small>
                        </div>
                    </div>
                    <div class="icon-with-text">
                        <div class="icon-div">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div>
                            <h5>Phone</h5>
                            <a href=""><small>+ 123-6485-5467</small></a>
                            <a href=""><small>+ 123-6485-5467</small></a>
                        </div>
                    </div>
                    <div class="icon-with-text">
                        <div class="icon-div">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div>
                            <h5>Email</h5>
                            <a href=""><small>info@your domain.com</small></a>
                            <a href=""><small>info@your domain.com</small></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="copyright">
        <p>Copyright © 2025 <b>GAY Divorce USA.</b> All Rights Reserved.</p>
    </section>
</template>