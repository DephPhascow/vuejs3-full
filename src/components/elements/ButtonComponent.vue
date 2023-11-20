<template>
    <button class="button" :class="{
        'button__size-min': minSize,
    }" :style="{
        justifyContent: textAlign,
        whiteSpace: wrapText ? 'pre' : 'normal',
    }">
        <TextImageComponentVue :text="text" :image="image" :width="width" :height="height"/>
    </button>
</template>

<style lang="scss" scoped>

.button {
    border-radius: 8px;
    padding: 0px var(--element-padding);
    border: none;
    outline: none;
    justify-content: center;
    align-items: center;
    display: flex;
    box-shadow: 1px 1px 3px black;
    &:active:not(:disabled) {
        box-shadow: none;
    }
    &:disabled {
        background-color: var(--disabled-color);
        color: var(--disabled-text-color);
    }
    &__primary {
        @include set-font(var(--primary-text-color), 15px, 600,);
        background-color: var(--primary-color);
    }
    &__secondary {
        background-color: var(--secondary-color);
        @include set-font(var(--secondary-text-color), 15px, 600,);
        border: 1px solid var(--secondary-text-color);
    }
    &__size-min {
        padding: 0;
        margin: 0;
        width: fit-content;
        height: fit-content;
    }
}
</style>
<script lang="ts">
import { defineComponent } from 'vue'
import TextImageComponentVue from './TextImageComponent.vue'

export default defineComponent({
    name: "ButtonComponent",
    props: {
        text: String,
        image: String,
        width: String,
        height: String,
        minSize: Boolean,
        textAlign: String,
        wrapText: Boolean,
    },
    components: {
        TextImageComponentVue
    }
})
</script>