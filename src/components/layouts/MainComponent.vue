<template>
    <HeaderComponent />
    <main class="main">
      <slot name="content"></slot>
    </main>
    <FooterComponent />
  </template>
  
  <style lang="scss" scoped></style>
  
  <script lang="ts">
  
  import FooterComponent from '../components/FooterComponent.vue';
  import HeaderComponent from '../components/HeaderComponent.vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'MainComponent',
    components: {
      HeaderComponent,
      FooterComponent
    }
  })
  </script>