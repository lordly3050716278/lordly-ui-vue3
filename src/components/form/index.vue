<template>
    <div class="lordly-form">
        <slot />
    </div>
</template>

<script setup>
import { provide, ref, reactive, watch } from 'vue'

const props = defineProps({
    form: {
        type: Object,
        required: true
    },
    rules: {
        type: Object,
        required: true
    },
    labelWidth: {
        type: String,
        default: 'auto'
    },
    labelPosition: {
        type: String,
        default: 'left'
    }
})

provide('labelWidth', props.labelWidth)
provide('formItemStyle', props.labelPosition === 'top' ? { flexDirection: 'column' } : { flexDirection: 'row' })
provide('rules', props.rules)

const form = ref(props.form)
const rules = ref(props.rules)
const frozenForm = ref({ ...form.value })
const validMap = reactive({})
for (const key in form.value) {
    validMap[key] = true
}

function validateField(field) {
    const formValue = form.value[field]

    const validator = rules.value[field]?.validator
    validMap[field] = validator ? validator(formValue) : true

    return validMap[field]
}

function validate() {
    let valid = true
    for (const key in form.value) {
        if (validateField(key)) continue
        valid = false
    }

    return valid
}

watch(() => form.value, () => {
    for (const key in form.value) {
        const formValue = form.value[key]
        const frozenFormValue = frozenForm.value[key]
        if (formValue === frozenFormValue) continue
        validateField(key)
    }
    frozenForm.value = { ...form.value }
}, { deep: true })

provide('validMap', validMap)

defineExpose({ validateField, validate })
</script>