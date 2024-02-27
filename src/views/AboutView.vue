<template>
    <Header :isHome="false"/>
    <AboutTitle/>
    <AboutDescription/>
    <Footer :isHome="false"/>
</template>
<script>
import Header from '../components/Header.vue'
import AboutTitle from '../components/About/AboutTitle.vue'
import AboutDescription from '../components/About/AboutDescription.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    AboutTitle,
    AboutDescription,
    Footer
  },
}
</script>
