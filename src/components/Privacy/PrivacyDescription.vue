 <template>

<section>
      <div class="container">
         <div class="row">
                     <div class="title-header">
                        <h3>Vállalkozás adatai</h3>
                     </div>
                     <div class="title-desc">
                        <ul class="ul-support">
                            <li>Cégnév: {{company.name}}</li>
                            <li>Székhely: {{company.address}}</li>
                            <li>Posta cím: {{company.address}}</li>
                            <li>Adószám: {{company.tax}}</li>
                            <li>Cégjegyzékszám: {{company.number}}</li>
                            <li>Telefonszám: {{company.phone}}</li>
                            <li>E-mail: {{company.email}}</li>
                        </ul>
                     </div>
                  </div>
                   <div class="section-title">
                     <div class="title-header">
                        <h3>Tárhelyszolgáltató adatai</h3>
                     </div>
                     <div class="title-desc">
                        <ul class="ul-support">
                            <li>Cégnév: {{domain.name}}</li>
                            <li>Cím: {{domain.address}}</li>
                            <li>Telefon: {{domain.phone}}</li>
                            <li>{{domain.link}}</li>
                        </ul>
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