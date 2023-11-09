<template>
  <section
    v-if="technologies && technologies.length"
    class="section technologies"
  >
    <div class="container">
      <div class="section__title">Технологии</div>
      <div class="technologies__list">
        <Technology
          v-for="(technology, index) in technologies"
          :key="index"
          :data="technology"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Technology from "./Technology.vue";
export default {
  computed: mapState({ technologies: (s) => s.technologies }),
  components: { Technology },
};
</script>
