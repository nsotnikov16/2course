

<template>
  <div class="project">
    <img class="project__img" :src="data.img" :alt="data.name" />
    <a :href="data.link" class="project__name orange">{{ data.name }}</a>
    <p v-if="data.description" class="project__description">{{ data.description }}</p>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>
