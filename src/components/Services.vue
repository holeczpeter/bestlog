<template>
   <section class="bg-light">
      <div class="container">
         <div class="text-center mb-5 w-95 w-md-90 w-lg-70 w-xl-60 mx-auto wow fadeIn" data-wow-delay="200ms">
            <span class="text-uppercase letter-spacing-2 font-weight-700 small mb-3 d-block">Szolgáltatásaink</span>
            <h2 class="mb-0 font-weight-800 h1">Válassza <span class="text-secondary">Bestlog Kft-t</span>, ha megbízható és professzionális szállítmányozási megoldásokra van szüksége</h2>
         </div>
         <div class="row mt-n1-9">
            <div class="col-md-6 col-lg-4 mt-1-9 wow fadeIn" data-wow-delay="400ms" 
               v-for="(service, key) in services" :key="key" >
               <div class="card border-radius-10 card-style5">
                  <div class="card-img">
                     <img :src="service.home_pic" alt="...">
                     <span class="icon"><img :src="service.icon" alt="..."></span>
                  </div>
                  <div class="card-body pb-2-0 pt-7 px-1-6 px-sm-2-6">
                     <h3 class="mb-4 h4"><a href="#!">{{service.title}}</a></h3>
                     <p class="justify-p">{{service.desc}}</p>
                     <a :href="'services/' + service.id" class="font-weight-600 text-secondary text-primary-hover">Részletek
                     <i class="fas fa-arrow-right small align-middle ms-2">
                     </i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script>
import { data } from '@/assets/js/services.js'; 
export default {
  name: 'Services',
   data() {
    return {
      count:0,
      services: data.items.slice(0,this.count)
    };
  },
  methods: {
    myMethod: function say() {
      this.count +=3;
      this.products = data.items.slice(0,this.count)
   }
  },
}
</script>

