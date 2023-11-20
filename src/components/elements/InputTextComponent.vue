<template>
    <InputComponentVue :text="label" :direction="direction" :labelWidth="labelWidth">
        <template #input>
            <input :type="type" :placeholder="placeholder" :maxlength="maxLength" :autocomplete="autocomplete" v-model="value" />
        </template>
    </InputComponentVue>
</template>

<style lang="scss" scoped></style>
<script lang="ts">

import { defineComponent, type PropType } from 'vue';
import InputComponentVue, { InputDirection } from './InputComponent.vue';

export default defineComponent({
    name: "InputTextComponent",
    components: {
        InputComponentVue,
    },
    props: {
        type: {
            type: String,
            default: "text"
        },
        label: String,
        labelWidth: {
            type: String,
            default: "fit-content"
        },
        direction: {
            type: String as PropType<InputDirection>,
            required: false,
            default: InputDirection.TOP
        },
        placeholder: String!,
        maxLength: Number,
        autocomplete: String,
        modelValue: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            value: this.modelValue
        }
    },
    watch: {
        modelValue: {
            immediate: true,
            handler(value) {
                this.value = value;
            }
        },
        value: {
            immediate: true,
            handler(value) {
                this.$emit("update:modelValue", value);
            }
        }
    }
})
</script>