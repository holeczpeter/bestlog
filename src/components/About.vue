<template>
   <section>
      <div class="container mt-lg-3 mt-xl-0">
         <div class="row clearfix align-items-xl-center">
            <div class="col-lg-6 text-column mb-2-9 mb-lg-0 wow fadeIn" data-wow-delay="200ms">
               <div class="pe-xl-2-9">
                  <h2 class="h1 mb-4">Üdvözöljük a <span class="text-secondary"> {{company.name}}</span> weboldalán!  </h2>
                  <p class="pb-3 justify-p">1996-ban gyorsfutár szolgálatként indult vállalkozásunk mára bővült belföldi és nemzetközi szállítmányozással, valamint közúti teherfuvarozással. Telephelyünk Kecskemét központjától mindössze 15 km-re található, megkönnyítve az azonnali igények kielégítését a megbízóink részére. Fuvarfeladatokat 24 tonnás nyerges szerelvényekkel, 7,5-12 tonnás teherautókkal és sürgős szállításokra alkalmas furgonokkal teljesítjük saját gépjárműparkunk segítségével. Nyerges szerelvényeink normál és mega rolótetős, függönyponyvás, daruzható, félpótkocsikból állnak.
</p>
                  <div class="clearfix d-sm-flex align-items-center mb-2-6">
                     <ul class="list-style2 mb-5 mb-sm-0">
                        <li>Gyorsított szállítás</li>
                        <li>Megbízhatóság</li>
                        <li>Rugalmas logisztika</li>
                        <li>CMR biztosítás</li>
                        <li>Nemzetközi fuvarozói szervezet tagság</li>
                        <li>Kiváló szakmai csapat</li>
                        <li>GPS nyomonkövetés</li>
                     </ul>
                     <div class="since">
                        <span class="txt text-center text-white bg-dark">1996 <br>óta</span>
                     </div>
                  </div>
                  <div>
                     <a class="butn" :href="`${$route.meta.basePath || ''}/` + 'about'">Ismerjen meg minket</a>
                  </div>
               </div>
            </div>
            <div class="col-lg-6 position-relative wow fadeIn" data-wow-delay="400ms">
               <div class="row align-items-center ps-lg-1-9 position-relative z-index-9">
                  <div class="col-sm-7 d-none d-sm-block">
                     <img src="../assets/img/about/1.jpeg" class="rounded" alt="...">
                  </div>
                  <div class="col-sm-5 text-center text-sm-start">
                     <img src="../assets/img/about/2.jpg" class="rounded" alt="...">
                     <div class="text-center mt-4">
                        <a :href="'/'" v-scroll-to="'#services'" class="font-weight-600">Tekintse meg szolgáltatásainkat<i class="ti-arrow-right ms-2 align-middle display-30"></i></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script>
import { info } from '@/assets/js/company.js'; 
export default {
  name: 'About',
   data() {
    return {
      company: info
      
    };
  },
  
}
</script>
