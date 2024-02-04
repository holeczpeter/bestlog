<template>
  <div id="app" class="page">
    <router-view/>
    <Footer/>
    <ScrollToTop/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import ScrollToTop from './components/ScrollToTop.vue'
export default {
  name: 'App',
  components: {
    Footer,
    ScrollToTop
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