<template>
    <Header :isHome="false"/>
    <ServiceTitle/>
    <ServiceDescription/>
</template>
<script>
import Header from '../components/Header.vue'
import ServiceTitle from '../components/Services/ServiceTitle.vue'
import ServiceDescription from '../components/Services/ServiceDescription.vue'
export default {
  name: 'App',
  components: {
    Header,
    ServiceTitle,
    ServiceDescription,
    
  },
}
</script>

