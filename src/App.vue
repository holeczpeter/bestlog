<template>
  <div id="app" class="page">
    <router-view/>
    <Footer/>
    <Competention/>
    <ScrollToTop/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import ScrollToTop from './components/ScrollToTop.vue'
import Competention from './components/Competention.vue'
export default {
  name: 'App',
  components: {
    Footer,
    ScrollToTop,
    Competention
  },
  
  metaInfo () {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale
      },
     
    }
  },
}
</script>