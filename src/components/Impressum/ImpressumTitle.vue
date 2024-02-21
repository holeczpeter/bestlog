<template>
   <section class="page-title-section bg-img cover-background top-position1 left-overlay-dark" data-overlay-dark="9" data-background="img/bg/bg-01.jpg">
      <div class="container">
         <div class="row">
            <div class="col-md-12">
               <h1 class="text-animation" data-in-effect="fadeInUp">Impresszum</h1>
            </div>
            <div class="col-md-12">
               <ul class="wow fadeInUp" data-wow-delay="400ms">
                  <li><a :href="`${$route.meta.basePath || ''}/`">Főoldal</a></li>
                  <li><a href="#!">Impresszum</a></li>
               </ul>
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
  name: 'ImpressumTitle',
}
</script>