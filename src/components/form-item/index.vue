<template>
    <div class="lordly-form-item" :style="formItemStyle">
        <div v-if="props['label']" class="lordly-form-item__label" :style="{ width: labelWidth }">
            <i v-if="isRequired" class="lordly-form-item__required">*</i>
            <span>{{ label }}</span>
        </div>
        <div class="lordly-form-item__content">
            <div class="lordly-form-item__content-wrapper">
                <slot />
            </div>
            <Transition name="lordly-form-item__error-msg">
                <div v-if="!isValid" class="lordly-form-item__error-msg">
                    {{ errorMsg }}
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import { ref, inject, computed } from 'vue'

const props = defineProps({
    prop: {
        type: String,
        required: false
    },
    label: {
        type: String,
        required: false
    }
})

const labelWidth = ref(inject('labelWidth'))
const formItemStyle = ref(inject('formItemStyle'))

const rules = ref(inject('rules'))
const isRequired = ref(rules.value[props['prop']]?.required)
const errorMsg = ref(rules.value[props['prop']]?.message)

const validMap = ref(inject('validMap'))
const isValid = computed(() => validMap.value[props['prop']])
</script>

<style scoped>
.lordly-form-item {
    margin: 20px 0;
    display: flex;
    gap: 5px;
}

.lordly-form-item__label {
    font-weight: 700;
    font-size: 12px;
    color: #6B7280;
    height: 30px;
    display: inline-flex;
    align-items: center;
    gap: 5px;
}

.lordly-form-item__content {
    flex: 1;
}

.lordly-form-item__required {
    color: #E82557;
}

.lordly-form-item__error-msg {
    color: #9C1F1F;
    font-size: 12px;
    margin-top: 5px;
    user-select: none;
}

.lordly-form-item__error-msg-enter-active,
.lordly-form-item__error-msg-leave-active {
    transition: .2s
}

.lordly-form-item__error-msg-enter-from,
.lordly-form-item__error-msg-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.lordly-form-item__error-msg-enter-to,
.lordly-form-item__error-msg-leave-from {
    opacity: 1;
    transform: translate(0);
}
</style>