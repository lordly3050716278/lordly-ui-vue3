<template>
    <Teleport to="body">
        <div :class="['lordly-backdrop', { 'is-visible': props.visible }]" :style="{ zIndex }"
            @click.stop="emit('click')">
            <slot />
        </div>
    </Teleport>
</template>

<script setup>
import { useId, onMounted, onUnmounted, computed } from 'vue'
import zIndexManager from './ZIndexManager'

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['click'])

const id = useId()

onMounted(() => zIndexManager.register(id))
onUnmounted(() => zIndexManager.unregister(id))

const zIndex = computed(() => zIndexManager.getZIndex(id))

defineExpose({ zIndex })
</script>

<style scoped>
.lordly-backdrop {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .01);
    transform: scale(0);
    pointer-events: none;
}

.lordly-backdrop.is-visible {
    transform: scale(1);
    pointer-events: all;
}
</style>