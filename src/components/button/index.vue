<template>
    <button :class="classNames" :disabled="props.disabled">
        <slot />
    </button>
</template>

<script setup>
import { types, sizes } from '.'

const props = defineProps({
    type: {
        type: String,
        default: 'default',
        validator(val) {
            if (!types.includes(val)) {
                throw new Error(`[Error] LyButton Invalid prop: type expect one of [ ${types} ]. but got "${val}".`)
            }
            return true
        }
    },
    size: {
        type: String,
        default: 'normal',
        validator(val) {
            if (!sizes.includes(val)) {
                throw new Error(`[Error] LyButton Invalid prop: size expect one of [ ${sizes} ]. but got "${val}".`)
            }
            return true
        }
    },
    block: {
        type: Boolean,
        default: false
    },
    plain: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    neumorphism: {
        type: Boolean,
        default: false
    }
})

const classNames = [
    'lordly-button',
    props.type,
    props.size,
    {
        'is-block': props.block,
        'is-plain': props.plain,
        'is-disabled': props.disabled,
        'is-neumorphism': props.neumorphism
    }
]
</script>

<style scoped>
.lordly-button {
    all: unset;
    user-select: none;

    width: fit-content;
    display: inline-flex;

    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    box-sizing: border-box;

    transition: .4s;
    border-radius: 5px;
}

.lordly-button {
    background-color: #ffffff;
    box-shadow:
        2px 2px 8px #cccccc,
        -2px -2px 8px #ffffff,
        2px 2px 8px transparent inset,
        -2px -2px 8px transparent inset;
}

.lordly-button:hover {
    box-shadow:
        2px 2px 8px transparent,
        -2px -2px 8px transparent,
        2px 2px 8px #cccccc inset,
        -2px -2px 8px #ffffff inset;
}

.lordly-button:active {
    box-shadow:
        2px 2px 8px transparent,
        -2px -2px 8px transparent,
        2px 2px 4px #cccccc inset,
        -2px -2px 4px #ffffff inset;
}

.lordly-button.is-disabled,
.lordly-button.is-disabled:hover,
.lordly-button.is-disabled:active {
    cursor: not-allowed;
    background-color: #ffffff;
    box-shadow:
        2px 2px 8px #ccccccaa,
        -2px -2px 8px #ffffff;
}

.lordly-button.is-block {
    display: flex;
    width: 100%;
}

.lordly-button.mini {
    font-size: 10px;
    padding: 3px 6px;
}

.lordly-button.small {
    font-size: 12px;
    padding: 4px 8px;
}

.lordly-button.normal {
    font-size: 14px;
    padding: 5px 10px;
}

.lordly-button.large {
    font-size: 16px;
    padding: 6px 12px;
}

.lordly-button.huge {
    font-size: 18px;
    padding: 7px 14px;
}

.lordly-button.primary {
    color: #4550FE;
}

.lordly-button.primary.is-disabled {
    color: #4550FEaa;
}

.lordly-button.success {
    color: #3DB56F;
}

.lordly-button.success.is-disabled {
    color: #3DB56Faa;
}

.lordly-button.danger {
    color: #E82557;
}

.lordly-button.danger.is-disabled {
    color: #E82557aa;
}

.lordly-button.warning {
    color: #F4A261;
}

.lordly-button.warning.is-disabled {
    color: #F4A261aa;
}

.lordly-button.info {
    color: #4DB8FF;
}

.lordly-button.info.is-disabled {
    color: #4DB8FFaa;
}

.lordly-button.default {
    color: #B0B0B0;
}

.lordly-button.default.is-disabled {
    color: #B0B0B0aa;
}
</style>