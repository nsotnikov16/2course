<script setup>
import Hero from "@/assets/images/hero.svg";
</script>

<template>
  <section class="section hero">
    <div class="container hero__container">
      <h1 class="title hero__title">
        Разрабатываем <span class="orange">IT-решения</span> для бизнеса
      </h1>
      <p class="hero__subtitle">
        Специализируемся в области разработки информационных систем и приложений
        для автоматизации бизнеса.
      </p>
      <ul class="hero__list">
        <li>IT-консалтинг</li>
        <li>Проектирование и разработка веб-приложений</li>
        <li>Комплексная автоматизация</li>
        <li>Поддержка и сопровождение разработанных решений</li>
      </ul>
      <img class="hero__img" :src="Hero" alt="Разрабатываем IT-решения для бизнеса" />
    </div>
  </section>
</template>

<script>
import Logo from "./Logo.vue";

export default {
  components: { Logo },
};
</script>

<style></style>
