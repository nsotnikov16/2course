<template>
  <div class="technology">
    <div class="technology__img">
      <img :src="data.img" :alt="data.name" />
    </div>
    
    <h5 class="technology__name">{{ data.name }}</h5>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>
