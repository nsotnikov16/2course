<template>
  <form @submit.prevent="submit" :class="['form', addClass]" ref="form">
    <div class="form__fields">
      <textarea
        placeholder="Введите ваш вопрос"
        name="question"
        v-model="fields.question"
      ></textarea>
      <input
        type="text"
        name="name"
        placeholder="Ваше имя"
        required
        minlength="2"
        v-model="fields.name"
      />
      <input
        required
        type="text"
        name="phone"
        v-mask="'+7 (###) ###-####'"
        placeholder="+7 (___) ___-____"
        pattern="\+7 \(\d{3}\) \d{3}-\d{4}"
        title="Введите номер телефона в формате +7 (___) ___-____"
        v-model="fields.phone"
      />
      <input
        type="email"
        name="email"
        placeholder="Электронная почта"
        v-model="fields.email"
      />
    </div>
    <button :disabled="loading" class="form__btn scale">
      {{ loading ? "Отправляем..." : "Отправить" }}
    </button>
  </form>
</template>

<script>
import { TheMask } from "vue-the-mask";
import { mapActions } from "vuex";

export default {
  props: ["addClass"],
  data() {
    return {
      loading: false,
      fields: {
        question: "",
        name: "",
        phone: "",
        email: "",
      },
    };
  },
  methods: {
    ...mapActions(["sendToTelegram"]),
    createText() {
      const date = new Date();

      const dateStr = `${date.getDay()}.${
        date.getMonth() + 1
      }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

      let text = `<b>Заявка с формы от ${dateStr}</b>\n`;
      if (this.fields.name) text += `Имя: ${this.fields.name}\n`;
      if (this.fields.phone) text += `Номер телефона: ${this.fields.phone}\n`;
      if (this.fields.email) {
        text += `Электронная почта: ${this.fields.email}\n`;
      }
      if (this.fields.question) text += `Вопрос: ${this.fields.question}`;
      return encodeURIComponent(text);
    },
    async submit() {
      try {
        this.loading = true;
        if (!this.$refs.form.checkValidity()) {
          throw new Error("Форма заполнена некорректно");
        }
        const result = await this.sendToTelegram({
          text: this.createText(),
          parse_mode: "html",
        });

        if (result.error || !result.success)
          throw new Error(result.error ?? "Ошибка отправки сообщения");

        alert("Отправлено успешно!");
        Object.entries(this.fields).forEach(([k, v]) => this.fields[k] = '');
      } catch (error) {
        alert(error.message);
      } finally {
        this.loading = false;
      }
    },
  },
  components: { TheMask },
};
</script>
