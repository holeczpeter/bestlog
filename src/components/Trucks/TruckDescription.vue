<template>
   <section>
   <div class="container">
      <div class="row justify-content-center">
         <div class="col-lg-11">
            <div class="mb-1-9 mb-lg-0 wow fadeIn image-hover" data-wow-delay="100ms">
               <img :src="currentTruck.main_pic" alt="Gépjárű kép" class="rounded-style">
            </div>
            <div class="row justify-content-center position-relative mt-n2-9 mb-2-6 wow fadeIn" data-wow-delay="200ms">
               <div class="col-lg-11 col-xxl-10">
                  <div class="bg-primary position-relative overflow-hidden p-1-6 p-lg-1-9 rounded-style">
                     <div class="row mt-n4">
                        <div class="col-sm-6 col-lg-3 mt-4" v-for="(property, key) in currentTruck.attributes" :key="key" >
                           <div>
                              <h3 class="h5 text-white">{{property.name}}</h3>
                              <p class="mb-0 text-white font-weight-600">{{property.value}}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="mb-2-6 wow fadeIn" data-wow-delay="300ms">
               <h3 class="mb-1-6">{{currentTruck.title}}</h3>
               <p class="justify-p">
                  {{currentTruck.paragraph}}
               </p>
            </div>
            <div class="row mb-2-6 wow fadeIn" data-wow-delay="500ms" >
               <div class="masonry-container">
                  <div class="image-hover" v-for="(picture, key) in currentTruck.more_pics" :key="key">
                     <img :src="picture.pic" alt="Gépjármű kép" class="rounded-style">
                  </div>
               </div>
               <div>
                  <p class="justify-p">
                     A képek illusztrációk
                  </p>
               </div>
               <div>
                  <div class="d-flex justify-content-end row-reverse" v-if="currentTruckId == 1">
                     <div class="ps-md-1-6 truck-button">
                        <a class="butn" :href="nextTruckId">KIS-TEHERGÉPJÁRMŰVEK</a>
                     </div>
                  </div>
                  <div class="d-flex justify-content-between" v-if="currentTruckId == 2">
                     <div class="ps-md-1-6 truck-button">
                        <a class="butn" :href="prevTruckId">NYERGES SZERELVÉNYEK</a>
                     </div>
                     <div class="ps-md-1-6 truck-button">
                        <a class="butn" :href="nextTruckId">FURGONOK</a>
                     </div>
                  </div>
                  <div class="d-flex justify-content-between" v-if="currentTruckId == 3">
                     <div class="ps-md-1-6 truck-button">
                        <a class="butn" :href="prevTruckId">KIS-TEHERGÉPJÁRMŰVEK</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
</template>

<script>
import { data } from '@/assets/js/trucks.js'; 
export default {
  name: 'TruckDescription',
  components: {
   
  },
  data(){
    return { 
        trucks:data.items,
        currentTruck:data.items.find(x=>x.id == this.$route.params.id),
        currentTruckId:data.items.find(x=>x.id == this.$route.params.id).id,
        prevTruck: data.items.find(x=>x.id == this.$route.params.id-1 ) ,
        prevTruckId: data.items.find(x=>x.id == this.$route.params.id)?.id -1,
        nextTruck: data.items.find(x=>x.id == this.$route.params.id+1 ) ,
        nextTruckId: data.items.find(x=>x.id == this.$route.params.id)?.id +1,
        max:data.items.length-1,
        
        } 
  }
}

</script>