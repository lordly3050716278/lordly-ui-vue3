<template>
    <div ref="selectRef" :class="classNames" :style="{ zIndex: nextZIndex }" @mouseenter="isHovering = true"
        @mouseleave="isHovering = false" @mousedown="focus">

        <div class="lordly-select__selection-wrapper">

            <div v-for="item in selectedOptions" :key="item.value" class="lordly-select__selection">
                <span>{{ item.label }}</span>
                <LyIcon class="lordly-select__selection-remove" @click="removeOption(item)">
                    <Remove />
                </LyIcon>
            </div>

            <div v-if="placeholderVisible" class="lordly-select__placeholder">{{ placeholder }}</div>
            <div class="lordly-select__input-wrapper">
                <input ref="inputRef" v-model="filterWord" :style="{ width: inputWidth }" type="text" @blur="onBlur" />
                <span ref="inputCalculatorRef" />
            </div>
        </div>
        <LyIcon class="lordly-select__suffix">
            <ArrowDown />
        </LyIcon>

        <LyBackdrop ref="backdropRef" :visible="isFocused" @click="blur">
            <Teleport to="body">
                <div ref="optionWrapperRef" class="lordly-select__option-wrapper" :style="optionWrapperStyle">
                    <template v-if="isRemoting">
                        <div class="lordly-select__loading-spinner">
                            <Spinner />
                        </div>
                    </template>
                    <template v-else>
                        <div v-for="option in filteredOptions" :key="option.value"
                            :class="['lordly-select__option', { 'is-selected': isSelectedOption(option) }]"
                            @click="selectOption(option)">
                            <span>{{ option.label }}</span>
                            <LyIcon class="lordly-select__option-check">
                                <Check />
                            </LyIcon>
                        </div>
                    </template>
                </div>
            </Teleport>
        </LyBackdrop>
    </div>
</template>

<script setup>
import LyIcon from '../icon'
import LyBackdrop from '../backdrop'
import ArrowDown from './ArrowDown.vue'
import Spinner from './Spinner.vue'
import Check from './Check.vue'
import Remove from './Remove.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { debounce } from 'lordly-utils'

const props = defineProps({
    moduleValue: {
        type: [String, Number, Array],
        default: null
    },
    placeholder: {
        type: String,
        default: 'select placeholder'
    },
    options: {
        type: Array,
        default: []
    },
    multiple: {
        type: Boolean,
        default: false
    },
    remote: {
        type: Boolean,
        default: false
    },
    remoteMethod: {
        type: Function,
        default: null
    }
})
const emit = defineEmits(['update:modelValue'])

const isHovering = ref(false)
const isFocused = ref(false)

const classNames = computed(() => [
    'lordly-select',
    {
        'is-hovering': isHovering.value,
        'is-focused': isFocused.value
    }
])

const filterWord = ref('')
const inputRef = ref()
const inputCalculatorRef = ref()
const inputWidth = computed(() => {
    const _default = 12
    if (filterWord.value === '' || !inputCalculatorRef.value) return `${_default}px`
    inputCalculatorRef.value.textContent = filterWord.value
    const offset = inputCalculatorRef.value.offsetWidth

    return offset < _default ? `${_default}px` : `${offset}px`
})

function focus() {
    isFocused.value = true
    setTimeout(() => inputRef.value.focus())
}
function onBlur() {
    if (!isFocused.value) return
    inputRef.value.focus()
}
function blur() {
    isFocused.value = false
    setTimeout(() => inputRef.value.blur())
}

const placeholderVisible = computed(() => {
    if (selectedOptions.value.length > 0) return false
    return !filterWord.value
})

const backdropRef = ref()
const nextZIndex = computed(() => {
    if (!backdropRef.value) return 0
    return backdropRef.value.zIndex + 1
})

const filteredOptions = ref(props.options)
const isRemoting = ref(false)
const filter = debounce(() => filteredOptions.value = props.options.filter(option => option.label.toLowerCase().includes(filterWord.value.toLowerCase())), 200)
const remote = debounce(async () => {
    const remoteMethod = props.remoteMethod
    isRemoting.value = true
    await remoteMethod()
    filteredOptions.value = props.options
    isRemoting.value = false
}, 200)

watch(filterWord, () => {
    if (!props.remote) return filter()
    remote()
})

const selectedValues = ref([])
watch(() => props.moduleValue, val => {
    if ([null, undefined].includes(props.moduleValue)) return
    selectedValues.value = props.multiple ? val : [val]
}, { immediate: true }
)
watch(() => selectedValues.value,
    vals => emit('update:modelValue', props.multiple ? vals : vals[0]),
    { deep: true }
)

const selectedOptions = computed(() => props.options.filter(option => selectedValues.value.includes(option.value)))
function isSelectedOption(option) {
    return selectedValues.value.includes(option.value)
}
function selectOption(option) {
    if (isSelectedOption(option)) return selectedValues.value = selectedValues.value.filter(val => val !== option.value)

    if (props.multiple) return selectedValues.value.push(option.value)

    selectedValues.value = [option.value]
}
function removeOption(option) {
    selectedValues.value = selectedValues.value.filter(val => val !== option.value)
}

const selectRef = ref()
const optionWrapperRef = ref()
const optionWrapperStyle = ref({
    top: '0px',
    left: '0px',
    width: `0px`,
    height: '0px',
    maxHeight: '0px',
    overflow: 'hidden',
    zIndex: nextZIndex.value
})
function updateOptionWrapperStyle() {
    if (!selectRef.value || !optionWrapperRef.value) return
    const rect = selectRef.value.getBoundingClientRect()
    optionWrapperStyle.value = {
        top: `${rect.bottom}px`,
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        height: isFocused.value ? `${optionWrapperRef.value.scrollHeight}px` : `0px`,
        maxHeight: isFocused.value ? `300px` : `0px`,
        overflow: isFocused.value ? `hidden auto` : `hidden`,
        zIndex: nextZIndex.value
    }
}
onMounted(updateOptionWrapperStyle)
window.addEventListener('resize', debounce(updateOptionWrapperStyle, 200))
watch(isFocused, updateOptionWrapperStyle)
watch(filteredOptions, () => setTimeout(updateOptionWrapperStyle))
watch(selectedValues, () => setTimeout(updateOptionWrapperStyle), { deep: true })
</script>

<style scoped>
.lordly-select {
    width: 100%;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    box-sizing: border-box;
    border: 1px solid var(--lordly-color-white-dark-1);
    background-color: var(--lordly-color-white-dark-1);
    padding: 5px 10px;
    font-size: var(--lordly-font-size-normal);
    transition: var(--lordly-t-fast);
    cursor: text;
    position: relative;
}

.lordly-select.is-hovering {
    border-color: var(--lordly-color-white-dark-2);
}

.lordly-select.is-focused,
.lordly-select:has(.lordly-select__selection) {
    border-color: var(--lordly-color-primary-dark-1);
    background-color: var(--lordly-color-white);
}

.lordly-select__selection-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    position: relative;
}

.lordly-select__selection {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    cursor: default;
    font-size: var(--lordly-font-size-normal);
    background-color: var(--lordly-color-white-dark-1);
}

.lordly-select__selection-remove {
    transition: var(--lordly-t-fast);
    cursor: pointer;
    border-radius: 50%;
}

.lordly-select__selection-remove:hover {
    background-color: var(--lordly-color-danger-light-1);
    color: var(--lordly-color-white);
}

.lordly-select__placeholder {
    background-color: transparent;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    user-select: none;
    color: var(--lordly-color-black-light-3);
    cursor: text;
}

.lordly-select__input-wrapper {
    background-color: transparent;
}

.lordly-select__input-wrapper>input {
    all: unset;
    color: var(--lordly-color-black-light-1);
}

.lordly-select__input-wrapper>span {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0;
    max-width: 100%;
    overflow: hidden;
}

.lordly-select__suffix {
    color: var(--lordly-color-black-light-6);
    transition: var(--lordly-t-fast);
}

.lordly-select.is-focused>.lordly-select__suffix {
    transform: rotateZ(180deg);
}

.lordly-select__option-wrapper {
    position: fixed;
    box-sizing: border-box;
    margin-top: 5px;
    background-color: var(--lordly-color-white-dark-1);
    transition: var(--lordly-t-fast);
}

.lordly-select__option-wrapper::-webkit-scrollbar {
    display: none;
}

.lordly-select__option {
    padding: 8px 10px;
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: var(--lordly-t-fast);
    color: var(--lordly-color-black-light-6);
}

.lordly-select__option>span {
    flex: 1;
}

.lordly-select__option-check {
    opacity: 0;
    transform: scale(0);
    transition: var(--lordly-t-fast);
}

.lordly-select__option:hover {
    background-color: var(--lordly-color-white-dark-2);
    color: var(--lordly-color-black);
}

.lordly-select__option.is-selected {
    color: var(--lordly-color-primary);
}

.lordly-select__option.is-selected>.lordly-select__option-check {
    opacity: 1;
    transform: scale(1);
}

.lordly-select__loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>