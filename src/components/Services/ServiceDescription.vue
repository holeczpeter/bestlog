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
                        <img src="img/icons/icon-11.png" class="mb-4" alt="...">
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
            <div class="col-lg-8 order-1 order-lg-2 mb-2-9 mb-lg-0">
               <div class="image-hover mb-2-6 wow fadeIn" data-wow-delay="200ms">
                  <img :src="currentService.home_pic" alt="..." class="rounded-style">
               </div>
               <div class="row wow fadeIn" data-wow-delay="300ms">
                  <div class="col-lg-12">
                     <h3 class="mb-1-6">{{currentService.title}}</h3>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veritatis ducimus rerum sunt dignissimos libero et eum modi! Consequuntur rem incidunt et ducimus magnam sunt rerum hic beatae sed obcaecati. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium asperiores eos obcaecati nostrum sed, corporis placeat quasi pariatur id, est iure, minus quibusdam! Facilis laudantium vero.
                     </p>
                     <p class="mb-2-6">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock a Latin professor at Hampden-Sydney.
                     </p>
                  </div>
               </div>
               <div class="row mt-n1-9 g-3 mb-2-2 wow fadeIn" data-wow-delay="400ms">
                  <div class="col-md-4 mt-1-9 image-hover" v-for="(picture, key) in currentService.more_pics" :key="key" >
                     <img :src="picture.pic" alt="..." class="rounded-style">
                  </div>
               </div>
               <div class="row wow fadeIn" data-wow-delay="500ms">
                  <div class="col-lg-12">
                     <a :href="`${$route.meta.basePath || ''}/`" class="butn secondary mt-2-2"><span class="text-white">Árajánlat</span></a>
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