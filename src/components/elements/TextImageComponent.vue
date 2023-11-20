<template>
    <div class="text-image">
        <img class="text-image__image" :src="loadFile(image)" :alt="text" :width="width" :height="height" v-if="image" />
        <p v-if="text">{{ text }}</p>
    </div>
</template>

<style lang="scss" scoped>
.text-image {
    display: flex;
    align-items: center;
    grid-column-gap: 10px;
    width: fit-content;
    &__image {
        object-fit: cover;
        object-position: center;
    }
}
</style>
<script lang="ts">

import { defineComponent } from 'vue'
import { loadFile } from '../../utils/loaders'

export default defineComponent({
    name: "TextImageComponent",
    props: {
        text: String,
        image: String,
        width: String,
        height: String,
    },
    data() {
        return {
            loadFile,
        }
    }
})
</script>