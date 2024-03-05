<template>
   <footer class="position-relative">
      <div class="container z-index-9 position-relative">
         <div class="row py-8">
            <div class="col-lg-4 col-xl-4 col-md-6 col-sm-6 wow fadeIn" data-wow-delay="200ms">
               <div class="footer-logo mb-1-9">
                  <img src="../assets/BestLog_white.png" alt="logo">
               </div>
               <ul class="list-unstyled mb-0">
                  <li class="mb-3 d-flex align-items-baseline">
                     <a href="#!" class="text-white text-primary-hover"><i class="far fa-envelope text-primary display-25 me-4"></i>{{company.email}}</a>
                  </li>
                  <li class="mb-3 d-flex align-items-baseline">
                     <a href="#!" class="text-white text-primary-hover"><i class="fas fa-mobile-alt text-primary display-25 me-4"></i>{{company.phone}}</a>
                  </li>
                  <li class="text-white d-flex align-items-baseline">
                     <i class="fas fa-map-marker-alt text-primary display-25 me-4"></i>{{company.address}}
                  </li>
               </ul>
            </div>
            <div class="col-lg-2 col-xl-3 col-md-3 col-sm-6 mt-2-2 mt-sm-0 wow fadeIn" data-wow-delay="350ms">
               <h3 class="text-white h5 mb-3">Quick links</h3>
               <ul class="footer-list list-unstyled">
                  <li v-for="(item, index) in menuitems" :key="index">
                     <a  v-if=!isHome :href="`${$route.meta.basePath || ''}/` + item.routerlink">{{item.title}}</a>
                  </li>
               </ul>
            </div>
            <div class="col-lg-2 col-xl-3 col-md-3 col-sm-6 mt-2-2 mt-md-0 wow fadeIn" data-wow-delay="500ms">
               <h3 class="text-white h5 mb-3">Support</h3>
               <ul class="footer-list list-unstyled">
                  <li><a :href="`${$route.meta.basePath || ''}/` + 'impressum'">Impresszum</a></li>
                  <li><a :href="`${$route.meta.basePath || ''}/` + 'privacy'">Adatkezelési tájékoztató</a></li>
                  <li><a :href="`${$route.meta.basePath || ''}/` + '#contact'">Kapcsolat</a> </li>
               </ul>
            </div>
         </div>
      </div>
      <div class="border-top border-color-light-white z-index-9 position-relative wow fadeIn" data-wow-delay="700ms">
         <div class="container">
            <div class="row align-items-center py-3">
               <div class="col-md-7 col-lg-6 text-center text-md-start order-2 order-md-1">
                  <p class="d-inline-block text-white mb-0">&copy; <span class="current-year"></span> 2024 <a href="holeczpeter.com" 
                     class="text-primary text-secondary-hover">Holecz Péter </a> All rights reserved</p>
               </div>
               <div class="col-md-5 col-lg-6 text-center text-md-end mb-3 mb-md-0 order-1 order-md-2">
                  <ul class="social-icon-style1 mb-0">
                     <li>
                        <a href="#!"><i class="fab fa-facebook-f"></i></a>
                     </li>
                     <li>
                        <a href="#!"><i class="fab fa-twitter"></i></a>
                     </li>
                     <li>
                        <a href="#!"><i class="fab fa-youtube"></i></a>
                     </li>
                     <li>
                        <a href="#!"><i class="fab fa-linkedin-in"></i></a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </footer>
</template>
<script>
import { data } from '@/assets/js/menu.js'
import { info } from '@/assets/js/company.js'
export default {
  name: 'Footer',
   data() {
    return {
       company: info,
       menuitems: data.items
    };
  },
}
</script>

