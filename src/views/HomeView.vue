<template>  
  <MainLayout>
    <template #content>
      {{ $t("example") }}
      <InputTextComponent v-model="text" label="тест"  />
      <ButtonComponent text="Click me" class="button__primary" :disabled="disable" />
      <TableEditableComponent :headers="headers" v-model="data" style="width: 400px !important;" :selectable="true" :tools="true" />
    </template>
  </MainLayout>
</template>
<script lang="ts">
import InputTextComponent from "@/components/elements/InputTextComponent.vue";
import ButtonComponent from "@/components/elements/ButtonComponent.vue";
import MainLayout from "@/components/layouts/MainComponent.vue";
import { defineComponent } from "vue";
import TableEditableComponent from "@/components/elements/TableEditableComponent.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    MainLayout,
    InputTextComponent,
    ButtonComponent,
    TableEditableComponent,
  },
  data() {
    return {
      text: "Пример",
      disable: true,
      data: [],
      headers: [
        { name: "Время начала", type: "time"},
        { name: "Время конца", type: "time"},
        { name: "стоимость", type: "text"}
      ]
    }
  },
})
</script>