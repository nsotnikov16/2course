<script setup>
import { formatePhone } from "@/utils/functions";
</script>

<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__logo"><Logo /></div>
      <div class="footer__contacts">
        <a class="underline scale" :href="`mailto:${info.email}`">{{ info.email }}</a>
        <a class="underline scale" :href="`tel:${formatePhone(info.phone)}`">{{
          info.phone
        }}</a>
      </div>
      <div class="footer__requisites">
        <p v-if="info.address">{{ info.address }}</p>
        <p v-if="info.ogrn">ОГРН {{ info.ogrn }}</p>
        <p v-if="info.inn">ИНН {{ info.inn }}</p>
      </div>
    </div>
    <div v-if="info.copyright" class="container">
      <p class="footer__copyright">{{ info.copyright }}</p>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";
import Logo from "./Logo.vue";

export default {
  computed: mapState({ info: (s) => s.info }),
  components: { Logo },
};
</script>
