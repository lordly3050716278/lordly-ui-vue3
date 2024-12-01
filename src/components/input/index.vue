<template>
    <div :class="['lordly-input', { 'not-empty': inputValue !== '' }]">
        <div class="lordly-input__prefix">
            <slot name="prefix" />
        </div>

        <input v-model="inputValue" :placeholder="props.placeholder" :type="type">

        <div class="lordly-input__suffix">
            <Transition name="lordly-input__suffix-item">
                <LyIcon v-if="inputValue" class="lordly-input__suffix-item" @click="clearInput">
                    <Clear />
                </LyIcon>
            </Transition>
            <Transition name="lordly-input__suffix-item" style="transition-delay: .2s;">
                <LyIcon v-if="inputValue && props.type === 'password'" class="lordly-input__suffix-item"
                    @click="togglePassword">
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
    padding: 5px 10px;
    font-size: 14px;
    transition: .4s;
    border-radius: 5px;

    background-color: #fff;
    box-shadow:
        -1px -1px 5px #ffffff,
        1px 1px 5px #aaaaaaaa,
        -1px -1px 5px transparent inset,
        1px 1px 5px transparent inset;
}

.lordly-input:hover {
    box-shadow:
        -1px -1px 10px #ffffff,
        1px 1px 10px #aaaaaaaa,
        -1px -1px 5px transparent inset,
        1px 1px 5px transparent inset;
}

.lordly-input:has(:focus),
.lordly-input.not-empty {
    box-shadow:
        -1px -1px 5px transparent,
        1px 1px 5px transparent,
        -1px -1px 5px #ffffff inset,
        1px 1px 5px #aaaaaaaa inset;
}

input {
    all: unset;
    flex: 1;
    width: 100%;
    color: inherit;
    font-size: inherit;
    padding: 0;
}

input[type="password"]::-ms-reveal,
input[type="password"]::-ms-clear,
input[type="password"]::-webkit-inner-spin-button,
input[type="password"]::-webkit-outer-spin-button {
    display: none;
}

input::placeholder {
    color: #b0b0b0;
}

.lordly-input__prefix,
.lordly-input__suffix {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    gap: 5px;
}

.lordly-input__suffix-item {
    cursor: pointer;
    transition: .2s;
}

.lordly-input__suffix-item:hover {
    opacity: .6;
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