<template>
    <Header :isHome="true" />
    <Banner id="home" />
    <About id="about"/>
    <Trucks id="trucks"/>
    <Services id="services"/>
    <Partners id="partners"/>
    <Testimonials id="testimonials"/>
    <Contact id="contact"/>
    <Footer :isHome="true" />
</template>

<script>
import Header from '../components/Header.vue'
import Banner from '../components/Banner.vue'
import About from '../components/About.vue'
import Trucks from '../components/Trucks.vue'
import Services from '../components/Services.vue'
import Contact from '../components/Contact.vue'
import Testimonials from '../components/Testimonials.vue'
import Partners from '../components/Partners.vue'
import Footer from '../components/Footer.vue';
export default {
  name: 'HomeView',
  components: {
    Header,
    Banner,
    About,
    Trucks,
    Services,
    Partners,
    Testimonials,
    Contact,
    Footer
  },
  
}
</script>
