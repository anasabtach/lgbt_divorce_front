

<template>
    <section id="ad">
        <router-link to="/"> <img src="@/assets/images/logo.png" alt="Divorce USA Logo" class="logo"></router-link>
        <div class="container">
            <h2>Create Your Ad</h2>
            <form action="">
            <div class="row">
                <!-- Form Section -->                 
                    <div class="col-md-6 form-section">
                        
                        <div class="mb-3">
                            <label class="form-label">Law Firm Description</label>
                            <textarea required name="" id="" class="form-control f-description" placeholder=""></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Title</label>
                            <input required type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Body Text</label>
                            <input required type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Schedule and Duration</label>
                            <div class="row duration">
                                <label class="form-label">Start date</label>
                                <input required type="date" class="form-control">

                                <label class="form-label">Days</label>
                                <input required type="number" class="form-control" value="6">

                                <label class="form-label">Run this Ad until</label>
                                <input required type="date" class="form-control">

                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Target location</label>
                            <div class="row location">
                                <input required type="text" class="form-control" value="DALLAS,TEXAS">


                                <label class="form-label">Radius</label>
                                <input required type="range" class="form-range radius-slider" min="0" max="15">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Upload Image/Video</label>
                            <input required type="file" class="form-control">
                        </div>
                    </div>

                    <!-- Preview Section -->
                    <div class="col-md-6 preview-section">
                        <h4 class="text-center mb-3">Preview Your Ad</h4>
                        <div class="mb-3">
                            <label class="form-label">Title</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="preview-card">
                            <div>
                                <img src="@/assets/images/lawyer-image.png" alt="Lawyer Photo" class="mb-3">
                            </div>
                            <div>
                                <h5 class="name">Sarah Rahman</h5>
                                <p class="designation">Divorce LGBT Lawyer</p>
                                <p class="number">(123) 456-7890</p>
                                <div class="body-box">
                                    <strong>Body Text</strong>
                                    <p class="">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                            </div>
                        </div>    
                        <label class="form-label">View Profile</label>
                        <div class="d-flex view-profle">
                            <button class="btn">Website</button>
                            <button class="btn">Call</button>
                            <button class="btn">Email</button>
                        </div>
                        <button type="submit" class="btn btn-publish">Publish</button>
                        
                    </div>                
                </div>
            </form>
        </div>
    </section>
</template>