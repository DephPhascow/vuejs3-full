<template>
    <label class="input" :style="{
        'flex-direction': direction,
        'justify-content': alignItems,
    }" :class="{
        'input__size__left': itemSize == InputItemSize.LEFT,
        'input__size__right': itemSize == InputItemSize.RIGHT,
        'input__size__equals': itemSize == InputItemSize.EQUALS,
    }">
        <p :style="{
            minWidth: labelWidth,
        }">
            <slot name="label">
                {{ text }}
            </slot>        
         </p>
        <slot name="input"></slot>
    </label>
</template>

<style lang="scss">

@mixin set-size-position($input_width, $p_width) {
    input {
        width: $input_width;
    }
    p {
        width: $p_width;
    }
}

.input {
    display: flex;
    grid-gap: 8px;
    width: 100%;
    p {
        @include set-font(#333333, 14px, 600,);
    }
    input {
        width: 100%;
        border: 1px solid var(--input-text-color);
        border-radius: 6px;
        padding: 4px 12px;
        @include set-font(var(--input-text-color), 14px, 400,);
    } 
    &__size {
        &__left {
            @include set-size-position(min-content, 100%);
        } 
        &__right {
            @include set-size-position(100%, min-content);
        }
        &__equals {
            @include set-size-position(100%, 100%);
        }        
    }
}
</style>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export enum InputDirection {
    LEFT = "row",
    RIGHT = "row-reverse",
    TOP = "column",
    BOTTOM = "column-reverse",
}

export enum InputItemSize {
    EQUALS = "equals",
    LEFT = "left",
    RIGHT = "right",
}

export default defineComponent({
    name: "InputComponent",
    props: {
        text: String,
        labelWidth: {
            type: String,
            default: "fit-content"
        },
        direction: {
            type: String as PropType<InputDirection>,
            required: false,
            default: InputDirection.LEFT,
        },
        alignItems: {
            type: String,
            default: "space-between"
        },
        itemSize: {
            type: String as PropType<InputItemSize>,
            default: InputItemSize.EQUALS,
        }
    },
    data() {
        return {
            InputItemSize,
        }
    }
})
</script>