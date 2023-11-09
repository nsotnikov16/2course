<template>
  <Header />
  <Hero />
  <Projects />
  <Technologies />
  <ContactUs />
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Projects from "./components/Projects.vue";
import Technologies from "./components/Technologies.vue";
import ContactUs from "./components/ContactUs.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: { Header, Hero, Projects, Technologies, ContactUs, Footer },
};
</script>
