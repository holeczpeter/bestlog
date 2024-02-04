<template>
<div>
   <section class="position-relative corporate-form">
      <div class="container">
         <div class="row g-0 overlap-column">
            <div class="col-lg-6 border-radius-10 bg-img cover-background" data-background="img/bg/contact-bg.jpg"></div>
            <div class="col-lg-6">
               <div class="common-border bg-white p-1-9 p-md-2-4 p-xl-7 border-radius-10">
                  <h3 class="mb-1-9 font-weight-800">Vegye fel velünk a <span class="text-secondary">kapcsolatot</span></h3>
                  <form class="quform">
                     <div class="quform-elements">
                        <div class="row">
                           <div class="col-md-6">
                              <div class="quform-element form-group">
                                 <label for="name">Név<span class="quform-required">*</span></label>
                                 <div class="quform-input">
                                    <input class="form-control" id="name" type="text" name="name" placeholder="Név" />
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="quform-element form-group">
                                 <label for="email">Email <span class="quform-required">*</span></label>
                                 <div class="quform-input">
                                    <input class="form-control" id="email" type="text" name="email" placeholder="Email" />
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="quform-element form-group">
                                 <label for="subject">Tárgy <span class="quform-required">*</span></label>
                                 <div class="quform-input">
                                    <input class="form-control" id="subject" type="text" name="subject" placeholder="Tárgy" />
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="quform-element form-group">
                                 <label for="phone">Telefonszám</label>
                                 <div class="quform-input">
                                    <input class="form-control" id="phone" type="text" name="phone" placeholder="Telefonszám" />
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-12">
                              <div class="quform-element form-group">
                                 <label for="message">Üzenet <span class="quform-required">*</span></label>
                                 <div class="quform-input">
                                    <textarea class="form-control" id="message" name="message" rows="3" placeholder="Üzenet"></textarea>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-12">
                              <div class="quform-submit-inner">
                                 <button class="butn theme butn-md" type="submit"><span>Elküld</span></button>
                              </div>
                              <div class="quform-loading-wrap text-start"><span class="quform-loading"></span></div>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section class="contact-style02 pt-0 position-relative wow fadeIn" data-wow-delay="400ms">
      <div class="container-fluid px-sm-5">
         <div class="row g-0 p-0 m-0">
            <div class="col-md-5 col-lg-4 col-xl-3">
               <div class="inner-container bg-secondary">
                  <ul class="info-box p-4 p-xxl-5 list-unstyled mb-0">
                     <li class="single-item wow fadeInUp" data-wow-delay="100ms">
                        <div class="d-flex">
                           <div class="flex-shrink-0 mt-2">
                              <i class="fa fa-phone text-primary fs-3"></i>
                           </div>
                           <div class="flex-grow-1 ms-3">
                              <span class="d-block mb-1 text-white">{{company.phone}}</span>
                              <span class="text-white">{{company.phone}}</span>
                           </div>
                        </div>
                     </li>
                     <li class="single-item wow fadeInUp" data-wow-delay="300ms">
                        <div class="d-flex">
                           <div class="flex-shrink-0 mt-2">
                              <i class="far fa-envelope-open text-primary fs-3"></i>
                           </div>
                           <div class="flex-grow-1 ms-3">
                              <span class="d-block mb-1 text-white">{{company.email}}</span>
                              <span class="text-white">{{company.email}}</span>
                           </div>
                        </div>
                     </li>
                     <li class="single-item wow fadeInUp" data-wow-delay="500ms">
                        <div class="d-flex">
                           <div class="flex-shrink-0 mt-2">
                              <i class="fas fa-map-marker-alt text-primary fs-3"></i>
                           </div>
                           <div class="flex-grow-1 ms-3">
                              <address class="d-block mb-0 text-white">{{company.address}}</address>
                           </div>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
            <div class="col-md-7 col-lg-8 col-xl-9 overflow-hidden">
               <div class="map-inner h-100">
                  <iframe class="map" 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2727.26082170871!2d20.000953700000004!3d46.8779172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743e158f863cda5%3A0xd9957eadbd4238b6!2sLakitelek%2C%20Liget%20u.%209%2C%206065!5e0!3m2!1shu!2shu!4v1706997091367!5m2!1shu!2shu" scrolling="no" marginheight="0" marginwidth="0">
                  </iframe>
               </div>
            </div>
         </div>
      </div>
   </section>
</div>
</template>
<script>
import { info } from '@/assets/js/company.js'; 
export default {
  name: 'Contact',
   data() {
    return {
      company: info
      
    };
  },
  
}
</script>