<template>
  <section class="section contact-us">
    <div class="container contact-us__container">
      <div class="contact-us__left">
        <h2 class="section__title">Остались вопросы?</h2>
        <p class="section__subtitle">Свяжитесь с нами!</p>
      </div>
      <div class="contact-us__right">
        <Form add-class="contact-us__form" />
      </div>
    </div>
  </section>
</template>

<script>
import Form from "./Form.vue";

export default {
  components: { Form },
};
</script>
