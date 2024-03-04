<template>
   <div>
     
      <section class="bg-secondary pb-8">
         <div class="container pt-6 pt-lg-4 pt-xl-0">
            <div class="row mt-n1-9 position-relative">
               <div class="col-6 col-lg-4 mt-1-9 wow fadeIn" data-wow-delay="200ms">
                  <div class="counter-box">
                     <span class="icon mb-1 d-block text-white display-17 text-center"><i class="icon-profile-male"></i></span>
                     <h4 class="countup text-white d-block text-center">
                        <count-up :end-val="1500000" :options="options"></count-up>
                     </h4>
                     <div class="separator-line-horrizontal-medium-light3 bg-white my-4 opacity5 mx-auto"></div>
                     <p class="lead font-weight-600 text-white m-0 text-center">Leszállított áru</p>
                  </div>
               </div>
               <div class="col-6 col-lg-4 mt-1-9 wow fadeIn" data-wow-delay="400ms">
                  <div class="counter-box">
                     <span class="icon mb-1 d-block text-white display-17 text-center"><i class="icon-happy"></i></span>
                     <h4 class="countup text-white d-block text-center">
                        <count-up :end-val="1457" :options="options"></count-up>
                     </h4>
                     <div class="separator-line-horrizontal-medium-light3 bg-white my-4 opacity5 mx-auto"></div>
                     <p class="lead font-weight-600 text-white m-0 text-center">Elégedett ügyfél</p>
                  </div>
               </div>
               <div class="col-6 col-lg-4 mt-1-9 wow fadeIn" data-wow-delay="600ms">
                  <div class="counter-box">
                     <span class="icon mb-1 d-block text-white display-17 text-center"><i class="icon-trophy"></i></span>
                     <h4 class="countup text-white d-block text-center">
                        <count-up :end-val="18121200" :options="options"></count-up>
                     </h4>
                     <div class="separator-line-horrizontal-medium-light3 bg-white my-4 opacity5 mx-auto"></div>
                     <p class="lead font-weight-600 text-white m-0 text-center">Megtett km</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
</template>
<script >
import CountUp from 'vue-countup-v3'
import 'vue3-carousel/dist/carousel.css'
export default {
  components: {
    CountUp, 
   
  },
  
  setup() {
    const options = {
      useEasing: true,
      useGrouping: true,
      separator: " ",
      decimal: ",",
      prefix: "",
      suffix: "",
    };
    return {
      options,
      testimonialContent: [
        {
          name: "Partner  Kft",
          job: `Ügyvezető igazgató`,
          imgSrc: require("../assets/img/testimonials/1.jpg"),
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          name: "Cég ZRT",
          job: "Menedzser",
          imgSrc: require("../assets/img/testimonials/2.jpg"),
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          name: "Vállalkozás",
          job: "Ügyvezető igazgató",
          imgSrc: require("../assets/img/testimonials/3.jpg"),
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          },
      ]
    };
  },
};
</script>
