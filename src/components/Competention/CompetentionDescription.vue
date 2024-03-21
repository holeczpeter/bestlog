 <template>

<section>
      <div class="container">
         <div class="row">
            <div class="title-header">
               <h3>Pályázat</h3>
            </div>     
            <div>
             <img src="../../assets/img/MFF kedvezményezetti infóblokk-1.jpg" />
            </div>  
            <div class="title-header">
               <h3>Modern üzleti és termelési kihívásokhoz való alkalmazkodást segítő fejlesztés a BEST-LOG Kft-nél.</h3>
            </div>
            <div class="title-desc">
               <ul class="ul-support">
                  <li>Projekt azonosító száma: GINOP_PLUSZ-1.2.1-21-2021-02060</li>
                  <li>Támogatás összege: 35 918 895 Ft</li>
                  <li>Támogatási arány (%) 70</li>
                
               </ul>
               <p class="justify-p">
               A Kft-ben lévő alkalmazottak végzettsége, szakmai tapasztalata lehetővé teszi a tevékenységi körbe újabb profil integrálását (hatósági vizsgabázis) és a már meglévő fejlesztését (gumiszerviz). A folyamatos fejlődés és tanulás a vállalat alapértékeivel egyezik, hiszen a Dél-Alföldön lévő mikrovállalkozás fenntartásához elengedhetetlen az a piaci plusz érték hozzáadása, amellyel ez a pályázat segítségre lehet. Az eszközök fejlesztésével, új eszközök beszerzésével és munkavállalók képzésével, vevőelégedettség mérésével, a munkatársak személyes kompetenciájának hozzáadott értékével a bevétel jelentős része növelhető a beszerzés során megvalósított technológiai és informatikai fejlesztés révén. A beruházás révén várhatóan növekszik a Kft. gazdasági teljesítménye és javul a technológiai felkészültsége, versenyképessége, és az erőforrás hatékonysága ezzel erősödik a vállalkozás gazdasági szerepe a régióban. A hatósági vizsgabázis szolgáltatás piaci bevezetése, köztudatba való beágyazásának alapja, a pontos, precíz, költséghatékony, de biztonságos munkavégzés, mely során adott idő alatt a munkaidő kihasználtságot jelentősen növelni tudja. A fejlesztés során Európai Uniós szintű gépjárműfenntartó műhely fejlesztéséhez szükséges tárgyi feltételeinek egyes berendezései kerülnek beszerzésre (az infrastrukturális  és személyi feltételek adottak). Az iparágban használt eszközök gyors fejlődése miatt, a legkorszerűbb Energotest ETL-20 TF fékpad, VS-MDS-410_SLIM Komplett emissziómérő állomás, Energotest HDA-18/RC futómű holtjáték vizsgáló mozgatópad, FILCAR ACA-125/13-COMP Teher személy kipufogógáz elszívó berendezés, Energotest PET JACK-14HP Hidropneumatikus aknaperem emelő, TECO 814 Futóműállító, Műszaki vizsgasori VDO, TECO kerékkiegyensúlyozó gépek, kerékszerelő új gépek kerülnek beszerzésre. Megvalósul a technológiai háttér megteremtése hardverek és felhőalapú szoftverek beszerzésével, hatékonyság növelése céljából szervezet-, folyamat- és menedzsmentfejlesztésre irányuló tanácsadással. A vállalkozás jövőképe egy olyan stabil, megbízható, versenyképes, innovatív autóipari szolgáltató cég, melyben az alkalmazottak számára szakmai tudásuknak megfelelő technológia biztosított, ahol a megrendelők az általuk kívánt igényeket határidőre maximálisan megkapják, ahol szempont a hosszú távú fejlődés.
               </p>
            </div>
         </div>
      </div>
    </section>
 </template>
 
<script>
import { info } from '@/assets/js/company.js'; 
import { domain } from '@/assets/js/domain.js'; 
export default {
  name: 'ImpressumTitle',
  data(){
    return { 
        company:info,
        domain: domain
        } 
  }
}

</script>