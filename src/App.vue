<template>
  <metainfo />
  <!-- <metainfo>
    <template v-slot:title="{ title }">{{  title }}</template>
  </metainfo>   -->
  <RouterView />
</template>

<style scoped></style>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import { useMeta } from 'vue-meta'

export default defineComponent({
  name: 'App',
  components: {
    RouterView
  },
  data() {
    return {
      meta: this.$route.meta.meta,
    }
  },   
  watch: {
    '$route.meta.meta'() {
      this.meta = this.$route.meta.meta;
    },
  },
  mounted() {
    
    let selectedLang = localStorage.language || this.$i18n.availableLocales[0];
    if (!this.$i18n.availableLocales.includes(selectedLang)) {
      selectedLang = this.$i18n.availableLocales[0];
    }
    this.$i18n.locale = selectedLang;
    useMeta({
      ...(this.meta as {}),
      htmlAttrs: { lang: selectedLang, amp: true },} 
    )
  },
})
</script>