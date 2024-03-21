<template>
    <Header :isHome="false"/>
    <CompetentionTitle/>
    <CompetentionDescription/>
    <Footer :isHome="false"/>
</template>
<script>
import Header from '../components/Header.vue'
import CompetentionTitle from '../components/Competention/CompetentionTitle.vue'
import CompetentionDescription from '../components/Competention/CompetentionDescription.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'PrivacyView',
  components: {
    Header,
    CompetentionTitle,
    CompetentionDescription,
    Footer
  },
}
</script>
