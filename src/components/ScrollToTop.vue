<template>
  <a @click="scrollToTop" class="scroll-to-top" :style="{display: topVisible ? 'inline': 'none'}"> 
    <i class="fas fa-angle-up" aria-hidden="true"></i>
  </a>
</template>
<script>
export default {
  name: 'ScrollToTop',
  data() {
    return {
      topVisible: false,
    };
  },
  mounted() {
    this.initializeScrollToTop();
  },
  methods: {
    initializeScrollToTop() {
      this.checkScrollPosition();
      window.addEventListener("scroll", this.checkScrollPosition);
    },
    checkScrollPosition() {
      if (window.scrollY >= 500) {
        this.topVisible = true;
      } else {
        this.topVisible = false;
      }
    },
    scrollToTop() {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  unmounted() {
    window.removeEventListener("scroll", this.checkScrollPosition);
  },
}
</script>
