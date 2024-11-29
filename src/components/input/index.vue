<template>
    <div :class="['lordly-input', { 'not-empty': inputValue !== '' }]">
        <div class="lordly-input__prefix">
            <slot name="prefix" />
        </div>

        <input v-model="inputValue" :placeholder="props.placeholder" :type="type">

        <div class="lordly-input__suffix">
            <Transition name="lordly-input__suffix-item">
                <LyIcon v-if="inputValue" @click="clearInput">
                    <Clear />
                </LyIcon>
            </Transition>
            <Transition name="lordly-input__suffix-item" style="transition-delay: .2s;">
                <LyIcon v-if="inputValue && props.type === 'password'" @click="togglePassword">
                    <EyeOpen v-if="type === 'password'" />
                    <EyeClose v-if="type === 'text'" />
                </LyIcon>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import LyIcon from '../icon'
import Clear from './Clear.vue'
import EyeOpen from './EyeOpen.vue'
import EyeClose from './EyeClose.vue'
import { ref, watch } from 'vue'
import { types } from '.'

const props = defineProps({
    moduleValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: 'input placeholder'
    },
    type: {
        type: String,
        default: 'text',
        validator(val) {
            if (!types.includes(val)) {
                throw new Error(`[Error] LyInput Invalid prop: type expect one of [ ${types} ]. but got "${val}".`)
            }
            return true
        }
    }
})
const emit = defineEmits(['update:modelValue'])

const inputValue = ref(props.moduleValue)
watch(() => inputValue.value, val => emit('update:modelValue', val))

function clearInput() {
    inputValue.value = ''
}

const type = ref(props.type)

function togglePassword() {
    type.value = type.value === 'password' ? 'text' : 'password'
}
</script>

<style scoped>
.lordly-input {
    width: 100%;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    box-sizing: border-box;
    border: 1px solid var(--lordly-color-white-dark-1);
    background-color: var(--lordly-color-white-dark-1);
    border-radius: 5px;
    padding: 5px 10px;
    font-size: var(--lordly-font-size-normal);
    transition: var(--lordly-t-fast);
}

.lordly-input:hover {
    border-color: var(--lordly-color-white-dark-2);
}

.lordly-input:has(:focus),
.lordly-input.not-empty {
    border-color: var(--lordly-color-primary-dark-1);
    background-color: var(--lordly-color-white);
}

input {
    all: unset;
    flex: 1;
    width: 100%;
}

input[type="password"]::-ms-reveal,
input[type="password"]::-ms-clear,
input[type="password"]::-webkit-inner-spin-button,
input[type="password"]::-webkit-outer-spin-button {
    display: none;
}


.lordly-input__prefix,
.lordly-input__suffix {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    gap: 5px;
}

.lordly-input__suffix-item-enter-active,
.lordly-input__suffix-item-leave-active {
    transition: .2s;
}

.lordly-input__suffix-item-enter-from,
.lordly-input__suffix-item-leave-to {
    opacity: 0;
    transform: translateX(20px);
}

.lordly-input__suffix-item-enter-to,
.lordly-input__suffix-item-leave-from {
    opacity: 1;
    transform: translate(0);
}
</style>