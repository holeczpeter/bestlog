<template>
   <section>
      <div class="container">
         <div class="row">
            <div class="col-lg-4 order-2 order-lg-1">
               <div class="sidebar pe-lg-1-6">
                  <div class="widget wow fadeIn" data-wow-delay="100ms">
                     <div class="widget-title">
                        <h3>Szolgáltatásaink</h3>
                     </div>
                     <div class="widget-body">
                        <ul class="services-list">
                           <li v-for="(service, key) in services" :key="key" >
                              <a :href="`${$route.meta.basePath || ''}/services/` + service.id" >{{service.title}} </a>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div class="bg-secondary widget-info wow fadeIn rounded-style" data-wow-delay="500ms">
                     <div class="position-relative z-index-9 overflow-hidden text-center py-4 py-md-5">
                       
                        <h5 class="text-white mb-3">Kérdése van?</h5>
                        <ul class="text-center list-unstyled mb-4 p-0">
                           <li class="text-white mb-2"><i class="fa fa-phone-alt small text-white me-2"></i><a href="#!" class="text-white">{{company.phone}}</a></li>
                           <li class="text-white"><i class="fa fa-envelope-open small text-white me-2"></i><a href="#!" class="text-white">{{company.email}}</a></li>
                        </ul>
                        <ul class="social-icons">
                           <li>
                              <a href="#!"><i class="fab fa-facebook-f"></i></a>
                           </li>
                           <li>
                              <a href="#!"><i class="fab fa-instagram"></i></a>
                           </li>
                           <li>
                              <a href="#!"><i class="fab fa-linkedin-in"></i></a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-8 order-1 order-lg-2 mb-2-9 mb-lg-0">
               <div class="image-hover mb-2-6 wow fadeIn" data-wow-delay="200ms">
                  <img :src="currentService.home_pic" alt="Szolgáltatás háttér" class="rounded-style">
               </div>
               <div class="row wow fadeIn" data-wow-delay="300ms">
                  <div class="col-lg-12">
                     <h3 class="mb-1-6">{{currentService.title}}</h3>
                     <div class="mb-2-6">
                      <ul class="list-style2">
                        <li v-for="(listitem, key) in currentService.list" :key="key" >{{listitem}}</li>
                     </ul>
                     </div>
                     <p class="justify-p">
                        {{currentService.paragraph}}
                     </p>
                     <p class="mb-2-6 justify-p">
                        {{currentService.paragraph2}}
                     </p>
                      <p class="mb-2-6 justify-p">
                        {{currentService.paragraph3}}
                     </p>
                     <p class="mb-2-6 justify-p">
                        {{currentService.paragraph4}}
                     </p>
                  </div>
               </div>
               <ul class="list-unstyled mb-0" v-if="currentService.address">
                  <li class="d-flex align-items-baseline">
                     <i class="fas fa-map-marker-alt text-primary display-25 me-4"></i>{{currentService.address}}
                  </li>
               </ul>
               <p class="mb-2-6 justify-p">
                  {{currentService.addressInfo}}
               </p>
               <div class="row mt-n1-9 g-3 mb-2-2 wow fadeIn" data-wow-delay="400ms">
                  <div class="col-md-4 mt-1-9 image-hover" v-for="(picture, key) in currentService.more_pics" :key="key" >
                     <img :src="picture.pic" alt="Szolgáltatás kép" class="rounded-style">
                  </div>
               </div>
               <div  v-if="currentService.isOffer == 'true'" 
                     class="row wow fadeIn" 
                     data-wow-delay="500ms">
                  <div class="col-lg-12">
                     <a :href="`${$route.meta.basePath || ''}/` +'#contact'" 
                        class="butn secondary mt-2-2"><span class="text-white">Árajánlat</span></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import { data } from '@/assets/js/services.js'; 
import { info } from '@/assets/js/company.js'; 
export default {
  name: 'ServiceDescription',
  components: {
   
  },
  data(){
    return { 
        company:info,
        services:data.items,
        currentService:data.items.find(x=>x.id == this.$route.params.id),
        prevServicetId: data.items.find(x=>x.id == this.$route.params.id)?.id -1,
        nextServiceId: data.items.find(x=>x.id == this.$route.params.id)?.id +1,
        max:data.items.length-1,
        
        } 
  }
}

</script>