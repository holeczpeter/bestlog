<template>
   <section>
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-lg-11">
               <div class="mb-1-9 mb-lg-0 wow fadeIn image-hover" data-wow-delay="100ms">
                  <img src="../../assets/img/banner/banner-04.jpg" alt="..." class="rounded-style">
               </div>
               <div class="mb-2-6 wow fadeIn" data-wow-delay="300ms">
                  <h3 class="mb-1-6">Bemutatkozás</h3>
                  <p class="justify-p">
                     1996-ban gyorsfutár szolgálatra alapított vállalkozásunk napjainkra belföldi és nemzetközi
                     szállítmányozással, közúti teherfuvarozással kibővített tevékenységi körrel áll az Önök
                     rendelkezésére. A telephelyünk Kecskeméttől 15 km-re található, amely könnyebbé teszi
                     bármely azonnali igény kielégítését a megbízó részéről.
                  </p>
                  <p class="justify-p">
                     Fuvarfeladatok teljesítését elsősorban a 24 tonnás nyerges szerelvényekből, a 7,5-12 tonnás
                     teherautókból, illetve a sürgős szállításokra alkalmas furgonokból álló saját gépjármű
                     parkunkkal végezzük. Nyerges szerelvényeink normál és mega rolótetős, függönyponyvás –
                     daruzható – félpótkocsikból állnak.
                  </p>
                  <p class="justify-p">
                     Tevékenységeink lebonyolításához saját fuvareszközeink igénybe vétele mellett különleges
                     igény esetén a piac és általunk felállított szigorú normáknak teljes mértékben megfelelő, több
                     éves múltra visszatekintő alvállalkozói partnereket alkalmazunk. Alvállalkozóinkat
                     rendszeresen szigorú minősítésnek vetjük alá, teljesítésükért teljes körű felelősséget vállalunk.
                     Saját műhelyünkben folyamatosan szervízelt, és felügyelt, kitűnő műszaki állapotban lévő
                     járműparkunk megbízhatósága garantált. Különleges igény esetén járműveinket az Önök
                     igényeinek megfelelően dedikáljuk.
                  </p>
                  <p class="justify-p">
                     Számunkra elengedhetetlen, hogy megbízóink áruja biztonságban és időben célba érkezzen,
                     ezért biztosítjuk, mind a tevékenységet, mind a szállított árut 100.000 Euro keretösszegű
                     CMR biztosítással, valamint rendelkezünk szállítmányozói felelősség biztosítással is.
                     Magánvállalkozók Nemzetközi Fuvarozó Ipartestületének tagsága (NIT-tagság) biztosítja
                     számunkra a jogszabályok naprakész követését, valamint a fuvarozással kapcsolatos
                     nemzetközi aktualitások folyamatos figyelemmel kísérését.
                  </p>
                  <p class="justify-p">
                     Több nyelvet beszélő, nagy szakmai gyakorlattal rendelkező, motivált munkatársaink képesek
                     gyorsan és önállóan döntéseket hozni ügyfeleink érdekében. Megbízóink számára 0-24 órás
                     ügyeleti elérhetőséget biztosítunk.
                  </p>
                  <p class="justify-p">
                     Gépjárművezetőink belföldi járatainkon és nemzetközi viszonylatban is oktelefonnal és
                     műholdas nyomkövetővel vannak ellátva, amely biztosítja elérhetőségüket és nyomon
                     követhetőségüket a nap bármely szakában.
                  </p>
                  <p class="justify-p">
                     Szolgáltatási palettánk:
                  <ul>
                     <li> belföldi és nemzetközi szállítmányozás, fuvarszervezés,</li>
                     <li>közúti teherfuvarozás keretében az 1-3tonnás kis teherautótól a 24tonnás kamionokig a
                        fuvareszközök széles skálájával vállaljuk Európa valamennyi országában a fuvarfeladatok
                        teljesítését,
                     </li>
                     <li>  a komplett rakományok mellett vállaljuk a részrakományok nem gyűjtőforgalomban történő
                        fuvarozását és raktározását is,
                     </li>
                     <li> kiegészítő szolgáltatásként vállaljuk a vámkezelésben történő közreműködést, a teljesített
                        megbízásokról kiértékelések, statisztikák készítését, szállítmánybiztosítási szolgáltatás
                        közvetítését, logisztikai kontrolling tevékenység ellátását, valamint költségelemzést és
                        szaktanácsadást.
                     </li>
                  </ul>
                  Küldetésünk a megbízóink elégedettségének növelése, a hosszú távú, kölcsönösen előnyös
                  kapcsolat kiépítése. Célunk elérése érdekében folyamatosan figyeljük partnereink
                  visszajelzéseit, alkalmazkodunk megbízóink igényeihez.
                  Sikereinket, megbízható munkánkat számos referenciánk bizonyítja, megbízóink körében
                  tudhatjuk többek között a Linea M Kubinszky Kft., Gyulai Fafém Bútor Zrt. Wimmer
                  Wohnkollektionen GmbH
                  </p>
                  <section class="position-relative">
                     <div class="container position-relative z-index-9">
                        <div class="section-title mb-2-3 mb-md-6 text-center wow fadeInUp" data-wow-delay="200ms">
                           <span class="sub-title wow text-animation" data-in-effect="fadeInRight">Jarműparkunk</span>
                        </div>
                        <div class="row mt-n1-9">
                        <div class="col-sm-6 col-xl-4 mt-1-9 wow fadeInUp" data-wow-delay="200ms" v-for="(truck, key) in trucks" :key="key"  >
                           <div class="card card-style1">
                            <div class="card-body">
                                <span class="mb-4 d-block"><img :src="truck.icon" alt="..."></span>
                                <h3 class="h5 mb-3 mt-2"><a :href="'trucks/' + truck.id">{{truck.title}}</a></h3>
                                <div class="card-info">
                                    <p class="mb-0">{{truck.info}}</p>
                                </div>
                            </div>
                            </div>
                         </div>
                    
                  
                        </div>
                     </div>
                </section>
                  
                  <p class="justify-p">
                     Keressenek minket, és mi segítünk Önöknek kiválasztani és lebonyolítani az igényeiknek
                     legmegfelelőbb szállítási módozatot!
                     Reméljük, hogy szolgáltatási palettánk felkeltette az Önök érdeklődését, és partnereik
                     lehetünk cégük logisztikai, szállítmányozási feladatainak megoldásában!
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
<script>
import { data } from '@/assets/js/trucks.js'; 
export default {
  name: 'AboutDescription',
   data() {
    return {
      count:0,
      trucks: data.items.slice(0,this.count)
    };
  },
  
}
</script>
