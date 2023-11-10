<template>
  <form :class="['form', addClass]">
    <div class="form__fields">
      <textarea placeholder="Введите ваш вопрос" name="question"></textarea>
      <input type="text" name="name" placeholder="Ваше имя" required minlength="2" />
      <input
        required
        type="text"
        name="phone"
        v-mask="'+7 (###) ###-####'"
        placeholder="+7 (___) ___-____"
        pattern="\+7 \(\d{3}\) \d{3}-\d{4}"
        title="Введите номер телефона в формате +7 (___) ___-____"
      />
      <input type="email" name="email" placeholder="Электронная почта" />
    </div>
    <button class="form__btn scale">Отправить</button>
  </form>
</template>

<script>
import { TheMask } from "vue-the-mask";
export default {
  props: ["addClass"],
  data() {
    return {
      loading: false,
      question: "",
      name: "",
      phone: "",
      email: "",
    };
  },
  components: { TheMask },
};
</script>
