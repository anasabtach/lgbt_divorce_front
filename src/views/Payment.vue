
<template>
    <section class="login-banner">
        <router-link class="login-logo" to="/">
      <img src="@/assets/images/login-logo.png" alt="Logo" />
    </router-link>
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-6 p-0 align-self-start d-none d-md-block">
                    <img src="@/assets/images/cover.png" alt="Cover" class="w-100" />
                </div>

                <div class="col-md-6 payment">
                    <div class="payment-container">
                        <h4 class="text-center mb-3">Choose a Payment Plan</h4>
                        <p class="text-center small">
                            <label>
                                <input type="radio" name="pricing" value="monthly" checked>
                                <strong>Monthly:</strong> $30/month
                            </label><br>
                            <label>
                                <input type="radio" name="pricing" value="yearly">
                                <strong>Yearly:</strong> $300/year <span class="text-success">(Save $60 annually)</span>
                            </label>

                        </p>
                        <h5>Select payment method</h5>
                        <div class="d-flex justify-content-center mb-3 payment-methods">
                            <img src="@/assets/images/applepay.png" alt="Apple Pay" />
                            <img src="@/assets/images/mastercard.png" alt="Mastercard" />
                            <img src="@/assets/images/googlepay.png" alt="Google Pay" />
                            <img src="@/assets/images/paypal.png" alt="Paypal" />
                        </div>
                        <div class="wrapper">
                            <div class="inner-wrapper">
                                <h4>Payment Information</h4>
                                <label class="form-label">Card Number</label>
                                <div class="mb-3 input-group">
                                    <span class="input-group-text bg-white">
                                        <i class="fa-solid fa-credit-card"></i>
                                    </span>
                                    <input type="text" class="form-control" placeholder="Card Number"
                                        value="4242 XXXX XXXX XXXX">
                                </div>
                                <label class="form-label">Expiration</label>
                                <div class="mb-3 input-group">
                                    <span class="input-group-text bg-white">
                                        <i class="fa-solid fa-calendar-week"></i>
                                    </span>

                                    <input type="text" class="form-control" placeholder="Expiration" value="42/42">
                                </div>
                                <label class="form-label">CVC</label>
                                <div class="mb-3 input-group">
                                    <span class="input-group-text bg-white">
                                        <i class="fa-solid fa-lock"></i>
                                    </span>

                                    <input type="text" class="form-control" placeholder="CVC">
                                </div>
                                <label class="form-label">Name on Card</label>
                                <div class="mb-3 input-group">
                                    <span class="input-group-text bg-white">
                                        <i class="fa-solid fa-user"></i>
                                    </span>

                                    <input type="text" class="form-control" placeholder="Name on Card" value="Fabio">
                                </div>
                            </div>

                            <div class="d-flex button-wrapper">
                                <button class="btn btn-danger w-100">Remove</button>
                                <button class="btn btn-secondary w-100">Cancel</button>
                                <button class="btn btn-success w-100">Save Changes</button>
                            </div>
                        </div>
                        <div class="form-check text-center mb-3">
                            <p class="small text-muted mt-1">
                                Credit card will not be charged until the 31st day after posting your ad.
                            </p>
                            <div class="terms">
                                <input class="form-check-input" type="checkbox" id="terms" checked>
                                <label class="form-check-label small" for="terms">
                                    I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
                                </label>
                            </div>
                        </div>

                        <button class="btn submit-btn w-100">Post Your Ad</button>
                    </div>
                </div>
            </div>
        </div>


    </section>
</template>