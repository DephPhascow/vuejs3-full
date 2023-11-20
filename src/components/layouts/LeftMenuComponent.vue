<script setup lang="ts">
import { defineComponent } from "vue";
</script>

<template>
  <main class="main">
    <div class="main__menu">
      <slot name="menu"></slot>
    </div>
    <div class="main__header">
      <slot name="header"></slot>
    </div>
    <div class="main__content">
      <slot name="content"></slot>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  display: grid;
  height: 100dvh;
  grid-template-areas:
    "menu header"
    "menu content";
  grid-template-columns: min-content auto;
  grid-template-rows: min-content 1fr;
  &__menu {
    grid-area: menu;
  }
  &__header {
    grid-area: header;
  }
  &__content {
    grid-area: content;
    background-color: white;
    border-radius: 8px;
    height: 100%;
  }
  @media(max-width: 1000px) {
    grid-template-areas:
      "header"
      "content"
      "menu";
    grid-template-columns: auto;
    grid-template-rows: 10% 80% 10%;
    &__content {
      overflow: auto;
    }
    &__menu {
      box-shadow: -1px -1px 10px rgba(0,0,0,0.75);
    }
  }
}
</style>

<script lang="ts">
export default defineComponent({
  name: "LeftMenuComponent",
});
</script>
