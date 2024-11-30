<template>
    <LyBackdrop :visible="isActive" @click="emit('update:modelValue', false)">
        <div v-if="isActive" ref="drawerRef" :class="['lordly-drawer', props.direction, { 'is-visible': isVisible }]"
            :style="sizeStyle" @click.stop>
            <slot />
        </div>
    </LyBackdrop>
</template>

<script setup>
import LyBackdrop from '../backdrop'
import { computed, ref, watch } from 'vue'
import { directions } from '.'

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    direction: {
        type: String,
        default: 'rtl',
        validator(val) {
            const allDirections = [...directions.x, ...directions.y]
            if (!allDirections.includes(val)) {
                throw new Error(`[Error] LyDrawer Invalid direction: type expect one of [ ${allDirections} ]. but got "${val}".`)
            }
            return true
        }
    },
    size: {
        type: [String, Number],
        default: '30vw'
    }
})
const emit = defineEmits(['update:modelValue'])

function isDirection(axis) {
    return directions[axis].includes(props.direction)
}

const sizeStyle = computed(() => {
    let size = props.size

    if (typeof size === 'number') size += 'px'

    const reg = /(\d+)(px|vw|vh|%)$/
    if (!reg.test(size)) {
        if (isDirection('x')) return { '--w': '30vw', '--h': '100vh' }
        if (isDirection('y')) return { '--w': '100vw', '--h': '30vh' }
    }

    const [, num, unit] = size.match(reg)
    if (unit === '%') {
        if (isDirection('x')) return { '--w': `${num}vw`, '--h': '100vh' }
        if (isDirection('y')) return { '--w': '100vw', '--h': `${num}vh` }
    }

    if (unit === 'px') {
        if (isDirection('x')) return { '--w': size, '--h': '100vh' }
        if (isDirection('y')) return { '--w': '100vw', '--h': size }
    }

    if (isDirection('x')) return { '--w': `${num}vw`, '--h': '100vh' }
    if (isDirection('y')) return { '--w': '100vw', '--h': `${num}vh` }
})


const isActive = ref(false)
const isVisible = ref(false)
const drawerRef = ref()
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

    if (!drawerRef.value) return
    drawerRef.value.ontransitionend = () => requestAnimationFrame(() => isActive.value = visibility)
}, { immediate: true })
</script>


<style scoped>
.lordly-drawer {
    background-color: var(--lordly-color-white);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: var(--w);
    height: var(--h);
    overflow: hidden;
    position: absolute;
    transition: .2s;
}

.lordly-drawer.ltr,
.lordly-drawer.rtl {
    top: 0;
    bottom: 0;
}

.lordly-drawer.ltr {
    left: 0;
    transform: translateX(calc(-1 * var(--w)));
}

.lordly-drawer.rtl {
    right: 0;
    transform: translateX(var(--w));
}

.lordly-drawer.ttb,
.lordly-drawer.btt {
    left: 0;
    right: 0;
}

.lordly-drawer.ttb {
    top: 0;
    transform: translateY(calc(-1 * var(--h)));
}

.lordly-drawer.btt {
    bottom: 0;
    transform: translateY(var(--h));
}

.lordly-drawer.ltr.is-visible,
.lordly-drawer.rtl.is-visible,
.lordly-drawer.ttb.is-visible,
.lordly-drawer.btt.is-visible {
    transform: translate(0);
}
</style>