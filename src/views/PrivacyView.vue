<template>
    <Header :isHome="false"/>
    <PrivacyTitle/>
    <PrivacyDescription/>
    <Footer :isHome="false"/>
</template>
<script>
import Header from '../components/Header.vue'
import PrivacyTitle from '../components/Privacy/PrivacyTitle.vue'
import PrivacyDescription from '../components/Privacy/PrivacyDescription.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'PrivacyView',
  components: {
    Header,
    PrivacyTitle,
    PrivacyDescription,
    Footer
  },
}
</script>
