<template>
   <section>
      <div class="text-center mb-5 w-95 w-md-90 w-lg-70 w-xl-60 mx-auto wow fadeIn" data-wow-delay="200ms">
         <span class="text-uppercase letter-spacing-2 font-weight-700 small mb-3 d-block">Gépparkunk</span>
         <h2 class="mb-0 font-weight-800 h1">
            Válassza <span class="text-secondary">{{company.name}}</span>-t, ha megbízható és professzionális szállítmányozási megoldásokra van szüksége
        </h2>
      </div>
      <div class="container">
         <div class="row"  v-for="(truck, key) in trucks" :key="key" >
            <div class="col-lg-12 order-2 order-lg-1" v-if="truck.id % 2 !== 0">
               <div class="row mb-2-6 wow fadeIn" data-wow-delay="200ms" >
                  <div class="col-md-6">
                     <h4>{{truck.title}}</h4>
                     <p class="justify-p">{{truck.desc}}</p>
                     <ul class="list-style1 ps-0">
                        <li v-for="(property, key) in truck.properties" :key="key" >{{property.value}}</li>
                     </ul>
                  </div>
                  <div class="col-md-6 mt-1-6 mt-md-0">
                     <div class="ps-md-1-6 image-hover">
                        <img :src="truck.main_pic" alt="..." class="rounded-style">
                     </div>
                     <div class="ps-md-1-6 truck-button">
                        <a class="butn" :href="'trucks/' + truck.id">{{truck.button}}</a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="ttm-horizontal_sep width-100 "></div>
            <div class="col-lg-12 order-2 order-lg-1"  v-if="truck.id % 2 === 0">
               <div class="row mb-2-6 wow fadeIn" data-wow-delay="200ms">
                  <div class="col-md-6 mt-1-6 mt-md-0">
                     <div class="ps-md-1-6 image-hover">
                        <img :src="truck.main_pic" alt="..." class="rounded-style">
                     </div>
                     <div class="ps-md-1-6 truck-button">
                        <a class="butn" :href="'trucks/' + truck.id">{{truck.button}}</a>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <h4>{{truck.title}}</h4>
                     <p class="justify-p">{{truck.desc}}</p>
                     <ul class="list-style1 ps-0">
                        <li v-for="(property, key) in truck.properties" :key="key" >{{property.value}}</li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script>
import { data } from '@/assets/js/trucks.js'; 
import { info } from '@/assets/js/company.js'; 
export default {
  name: 'Trucks',
   data() {
    return {
      count:0,
      company:info,
      trucks: data.items.slice(0,this.count)
    };
  },
  methods: {
    myMethod: function say() {
      this.count +=3;
      this.trucks = data.items.slice(0,this.count)
   }
  },
}
</script>
