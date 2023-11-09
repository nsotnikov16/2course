<script setup>
import { formatePhone } from "@/utils/functions";
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <Logo />
      <div class="header__contacts">
        <a class="underline scale" :href="`tel:${formatePhone(info.phone)}`">{{ info.phone }}</a>
        <a class="scale" :href="`mailto:${info.email}`">{{ info.email }}</a>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "./Logo.vue";
import { mapState } from "vuex";

export default {
  computed: mapState({ info: (s) => s.info }),
  components: { Logo },
};
</script>

<style></style>
