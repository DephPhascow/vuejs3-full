<template>  
  <LeftMenuComponent>
    <template #menu>Menu</template>
    <template #header>Header</template>
    <template #content>
      {{ $t("example") }}
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <InputTextComponent v-model="text" label="тест"  />
      <ButtonComponent text="Click me" class="button__primary" :disabled="disable" @click="editableRow = !editableRow" />
      <TableEditableComponent :headers="headers" v-model="data" style="width: 400px !important;" :selectable="true" :tools="true" :editableRow="editableRow" />
    </template>
  </LeftMenuComponent>
</template>
<script lang="ts">
import InputTextComponent from "@/components/elements/InputTextComponent.vue";
import ButtonComponent from "@/components/elements/ButtonComponent.vue";
import LeftMenuComponent from "@/components/layouts/LeftMenuComponent.vue";
import { defineComponent } from "vue";
import TableEditableComponent from "@/components/elements/TableEditableComponent.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    LeftMenuComponent,
    InputTextComponent,
    ButtonComponent,
    TableEditableComponent,
  },
  data() {
    return {
      text: "Пример",
      disable: false,
      editableRow: true,
      data: [{
        id: 1,
        data: [
          { name: "Время начала", value: "10:00"},
          { name: "Время конца", value: "11:00"},
          { name: "стоимость", value: "100"}
        ]
      }],
      headers: [
        { name: "Время начала", type: "time"},
        { name: "Время конца", type: "time"},
        { name: "стоимость", type: "text"}
      ]
    }
  },
})
</script>