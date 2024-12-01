<template>
    <div :class="classNames">
        <label class="lordly-checkbox__label" :for="id" />
        <label class="lordly-checkbox__content" :for="id">
            <slot />
        </label>
        <input :id="id" class="lordly-checkbox__input" v-model="inputValue" type="checkbox" hidden />
    </div>
</template>

<script setup>
import { useId, ref, watch, computed } from 'vue'
import { types, sizes } from '.'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'primary',
        validator(val) {
            if (!types.includes(val)) {
                throw new Error(`[Error] LyCheckbox Invalid prop: type expect one of [ ${types} ]. but got "${val}".`)
            }
            return true
        }
    },
    size: {
        type: String,
        default: 'normal',
        validator(val) {
            if (!sizes.includes(val)) {
                throw new Error(`[Error] LyCheckbox Invalid prop: size expect one of [ ${sizes} ]. but got "${val}".`)
            }
            return true
        }
    }
})
const emit = defineEmits(['update:modelValue'])

const id = useId()

const inputValue = ref(props['modelValue'])
watch(() => inputValue.value, val => emit('update:modelValue', val))

const isChecked = ref(false)
const notChecked = ref(false)

const classNames = computed(() => [
    'lordly-checkbox',
    props.type,
    props.size,
    {
        'is-checked': isChecked.value,
        'not-checked': notChecked.value
    }
])

watch(() => inputValue.value, val => {
    isChecked.value = val
    notChecked.value = !val
})
</script>

<style scoped>
* {
    cursor: pointer;
    user-select: none;
}

.lordly-checkbox {
    --lordly-checkbox-border-width: calc(var(--lordly-checkbox-size) / 100 * 10);
    --lordly-checkbox-virtual-width: calc(var(--lordly-checkbox-size) / 100 * 15);
    --lordly-checkbox-before-top: calc(var(--lordly-checkbox-size) / 100 * 72);
    --lordly-checkbox-before-left: calc(var(--lordly-checkbox-size) / 100 * 41);
    --lordly-checkbox-after-top: calc(var(--lordly-checkbox-size) / 100 * 37);
    --lordly-checkbox-after-left: calc(var(--lordly-checkbox-size) / 100 * 5);
    --lordly-checkbox-after-height: calc(var(--lordly-checkbox-size) / 100 * 40);
    --lordly-checkbox-before-height: calc(var(--lordly-checkbox-size) / 100 * 120);
    --lordly-checkbox-border-radius: calc(var(--lordly-checkbox-size) / 100 * 5);
    --lordly-checkbox-before-box-shadow: calc(var(--lordly-checkbox-size) / 100 * 5);

    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: #B0B0B0;
    transition: .2s;
}

.lordly-checkbox__label {
    height: var(--lordly-checkbox-size);
    width: var(--lordly-checkbox-size);
    background-color: transparent;
    border: var(--lordly-checkbox-border-width) solid;
    border-radius: var(--lordly-checkbox-border-radius);

    position: relative;
    display: inline-block;
    box-sizing: border-box;
    transition: .4s;
}

.lordly-checkbox:hover>.lordly-checkbox__label {
    border-color: var(--lordly-checkbox-checked-color);
    box-shadow:
        -1px -1px 5px #ffffff,
        1px 1px 5px #aaaaaaaa;
}

.lordly-checkbox__label::before,
.lordly-checkbox__label::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    height: 0;
    width: var(--lordly-checkbox-virtual-width);
    background: var(--lordly-checkbox-checked-color);
    display: inline-block;
    transform-origin: left top;
    border-radius: var(--lordly-checkbox-border-radius);
    transition: opacity .5s;
}

.lordly-checkbox__label::before {
    top: var(--lordly-checkbox-before-top);
    left: var(--lordly-checkbox-before-left);
    transform: rotate(-135deg);
    box-shadow: 0 0 0 var(--lordly-checkbox-before-box-shadow) #ffffff;
}

.lordly-checkbox__label::after {
    top: var(--lordly-checkbox-after-top);
    left: var(--lordly-checkbox-after-left);
    transform: rotate(-45deg);
}

.lordly-checkbox.is-checked {
    color: var(--lordly-checkbox-checked-color);
}

.lordly-checkbox.is-checked>.lordly-checkbox__label {
    border-color: var(--lordly-checkbox-checked-color);
    box-shadow:
        -1px -1px 10px #ffffff,
        1px 1px 10px #aaaaaaaa;
}

.lordly-checkbox.is-checked>.lordly-checkbox__label::after {
    animation: after-check .2s ease 0s forwards;
}

.lordly-checkbox.is-checked>.lordly-checkbox__label::before {
    animation: before-check .4s ease 0s forwards;
}

.lordly-checkbox.not-checked>.lordly-checkbox__label::after {
    animation: after-uncheck .4s ease 0s forwards;
}

.lordly-checkbox.not-checked>.lordly-checkbox__label::before {
    animation: before-uncheck .2s ease 0s forwards;
}

@keyframes after-check {
    0% {
        height: 0;
    }

    100% {
        height: var(--lordly-checkbox-after-height);
    }
}

@keyframes before-check {

    0%,
    50% {
        height: 0;
    }

    100% {
        height: var(--lordly-checkbox-before-height);
    }
}

@keyframes after-uncheck {

    0%,
    50% {
        height: var(--lordly-checkbox-after-height);
    }

    100% {
        height: 0;
    }
}

@keyframes before-uncheck {

    0% {
        height: var(--lordly-checkbox-before-height);
    }

    100% {
        height: 0;
    }
}


.lordly-checkbox.mini {
    --lordly-checkbox-size: 10px;
    font-size: 10px;
}

.lordly-checkbox.small {
    --lordly-checkbox-size: 12px;
    font-size: 12px;
}

.lordly-checkbox.normal {
    --lordly-checkbox-size: 14px;
    font-size: 14px;
}

.lordly-checkbox.large {
    --lordly-checkbox-size: 16px;
    font-size: 16px;
}

.lordly-checkbox.huge {
    --lordly-checkbox-size: 18px;
    font-size: 18px;
}

.lordly-checkbox.primary {
    --lordly-checkbox-checked-color: #4550FE;
}

.lordly-checkbox.success {
    --lordly-checkbox-checked-color: #3DB56F;
}

.lordly-checkbox.danger {
    --lordly-checkbox-checked-color: #E82557;
}

.lordly-checkbox.warning {
    --lordly-checkbox-checked-color: #F4A261;
}

.lordly-checkbox.info {
    --lordly-checkbox-checked-color: #3D97D3;
}
</style>