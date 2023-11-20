<template>  
  <MainLayout>
    <template #content>
      {{ $t("example") }}
      <InputTextComponent v-model="text" label="тест"  />
      <ButtonComponent text="Click me" class="button__primary" :disabled="disable" />
    </template>
  </MainLayout>
</template>
<script lang="ts">
import InputTextComponent from "@/components/elements/InputTextComponent.vue";
import ButtonComponent from "@/components/elements/ButtonComponent.vue";
import MainLayout from "@/components/layouts/MainComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    MainLayout,
    InputTextComponent,
    ButtonComponent,
  },
  data() {
    return {
      text: "Пример",
      disable: true,
    }
  },
})
</script>