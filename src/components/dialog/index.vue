<template>
    <LyBackdrop :visible="isActive" @click="emit('update:modelValue', false)">
        <div v-if="isActive" :class="['lordly-dialog', { 'is-visible': isVisible }]">
            <div ref="dialogRef" class="lordly-dialog__wrapper" @click.stop>
                <slot />
            </div>
        </div>
    </LyBackdrop>
</template>

<script setup>
import LyBackdrop from '../backdrop'
import { ref, watch } from 'vue'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['update:modelValue'])

const isActive = ref(false)
const isVisible = ref(false)
const dialogRef = ref()
function setVisible(visibility) {
    requestAnimationFrame(() => isVisible.value = visibility)
}

watch(() => props['modelValue'], (visibility) => {
    if (visibility === true) {
        isActive.value = visibility
        setVisible(visibility)
        return
    }

    setVisible(visibility)
    if (!dialogRef.value) return
    dialogRef.value.ontransitionend = () => requestAnimationFrame(() => isActive.value = visibility)
}, { immediate: true })
</script>

<style scoped>
.lordly-dialog {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lordly-dialog__wrapper {
    overflow: hidden;
    opacity: 0;
    transform: scale(.95);
    transition: .4s;
    background-color: #fff;
    box-shadow:
        -1px -1px 5px #ffffff,
        1px 1px 5px #aaaaaaaa;
}

.lordly-dialog.is-visible>.lordly-dialog__wrapper {
    opacity: 1;
    transform: scale(1);
}
</style>