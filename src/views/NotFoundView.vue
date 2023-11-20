<template>  
  <MainLayout>
    <template #content>
      {{ $t("system.pageNotFound")  }}
    </template>
  </MainLayout>
</template>
<script lang="ts">
import MainLayout from "@/components/layouts/MainComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFoundView",
  components: {
    MainLayout,
  },
})
</script>