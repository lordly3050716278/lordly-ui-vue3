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
    }
})

const classNames = [
    'lordly-button',
    props.type,
    props.size,
    {
        'is-block': props.block,
        'is-plain': props.plain,
        'is-disabled': props.disabled
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

    position: relative;
    overflow: hidden;

    transition: var(--lordly-t-fast);
}

.lordly-button.is-block {
    display: flex;
    width: 100%;
}

.lordly-button.mini {
    font-size: var(--lordly-font-size-mini);
    padding: 3px 6px;
}

.lordly-button.small {
    font-size: var(--lordly-font-size-small);
    padding: 4px 8px;
}

.lordly-button.normal {
    font-size: var(--lordly-font-size-normal);
    padding: 5px 10px;
}

.lordly-button.large {
    font-size: var(--lordly-font-size-large);
    padding: 6px 12px;
}

.lordly-button.huge {
    font-size: var(--lordly-font-size-huge);
    padding: 7px 14px;
}

.lordly-button.primary {
    background-color: var(--lordly-color-primary);
    color: var(--lordly-color-white);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-6);
    border: 1px solid var(--lordly-color-primary);
}

.lordly-button.primary:hover {
    background-color: var(--lordly-color-primary-dark-1);
    color: var(--lordly-color-white-dark-1);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-3);
    border: 1px solid var(--lordly-color-primary-dark-3);
}

.lordly-button.primary:active {
    background-color: var(--lordly-color-primary-dark-2);
    color: var(--lordly-color-white);
    box-shadow: 0px 0px 5px var(--lordly-color-white);
    border: 1px solid var(--lordly-color-primary-light-3);
}

.lordly-button.success {
    background-color: var(--lordly-color-success);
    color: var(--lordly-color-white);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-6);
    border: 1px solid var(--lordly-color-success);
}

.lordly-button.success:hover {
    background-color: var(--lordly-color-success-dark-1);
    color: var(--lordly-color-white-dark-1);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-3);
    border: 1px solid var(--lordly-color-success-dark-3);
}

.lordly-button.success:active {
    background-color: var(--lordly-color-success-dark-2);
    color: var(--lordly-color-white);
    box-shadow: 0px 0px 5px var(--lordly-color-white);
    border: 1px solid var(--lordly-color-success-light-3);
}

.lordly-button.danger {
    background-color: var(--lordly-color-danger);
    color: var(--lordly-color-white);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-6);
    border: 1px solid var(--lordly-color-danger);
}

.lordly-button.danger:hover {
    background-color: var(--lordly-color-danger-dark-1);
    color: var(--lordly-color-white-dark-1);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-3);
    border: 1px solid var(--lordly-color-danger-dark-3);
}

.lordly-button.danger:active {
    background-color: var(--lordly-color-danger-dark-2);
    color: var(--lordly-color-white);
    box-shadow: 0px 0px 5px var(--lordly-color-white);
    border: 1px solid var(--lordly-color-danger-light-3);
}

.lordly-button.warning {
    background-color: var(--lordly-color-warning);
    color: var(--lordly-color-white);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-6);
    border: 1px solid var(--lordly-color-warning);
}

.lordly-button.warning:hover {
    background-color: var(--lordly-color-warning-dark-1);
    color: var(--lordly-color-white-dark-1);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-3);
    border: 1px solid var(--lordly-color-warning-dark-3);
}

.lordly-button.warning:active {
    background-color: var(--lordly-color-warning-dark-2);
    color: var(--lordly-color-white);
    box-shadow: 0px 0px 5px var(--lordly-color-white);
    border: 1px solid var(--lordly-color-warning-light-3);
}

.lordly-button.info {
    background-color: var(--lordly-color-info);
    color: var(--lordly-color-white);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-6);
    border: 1px solid var(--lordly-color-info);
}

.lordly-button.info:hover {
    background-color: var(--lordly-color-info-dark-1);
    color: var(--lordly-color-white-dark-1);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-3);
    border: 1px solid var(--lordly-color-info-dark-3);
}

.lordly-button.info:active {
    background-color: var(--lordly-color-info-dark-2);
    color: var(--lordly-color-white);
    box-shadow: 0px 0px 5px var(--lordly-color-white);
    border: 1px solid var(--lordly-color-info-light-3);
}

.lordly-button.default {
    background-color: var(--lordly-color-white-dark-1);
    color: var(--lordly-color-black-light-3);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-6);
    border: 1px solid var(--lordly-color-white-dark-1);
}

.lordly-button.default:hover {
    background-color: var(--lordly-color-white-dark-1);
    color: var(--lordly-color-black);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-3);
    border: 1px solid var(--lordly-color-white-dark-1);
}

.lordly-button.default:active {
    background-color: var(--lordly-color-white-dark-1);
    color: var(--lordly-color-black-light-3);
    box-shadow: 0px 0px 5px var(--lordly-color-white);
    border: 1px solid var(--lordly-color-black-light-6);
}

.lordly-button.primary.is-plain {
    background-color: transparent;
    color: var(--lordly-color-primary);
    box-shadow: none;
    border: 1px solid var(--lordly-color-primary);
}

.lordly-button.primary.is-plain:hover {
    background-color: var(--lordly-color-primary-light-1);
    color: var(--lordly-color-white);
    box-shadow: none;
    border: 1px solid var(--lordly-color-primary);
}

.lordly-button.primary.is-plain:active {
    background-color: var(--lordly-color-primary-light-3);
    color: var(--lordly-color-black);
    box-shadow: none;
    border: 1px solid var(--lordly-color-primary);
}

.lordly-button.success.is-plain {
    background-color: transparent;
    color: var(--lordly-color-success);
    box-shadow: none;
    border: 1px solid var(--lordly-color-success);
}

.lordly-button.success.is-plain:hover {
    background-color: var(--lordly-color-success-light-1);
    color: var(--lordly-color-white);
    box-shadow: none;
    border: 1px solid var(--lordly-color-success);
}

.lordly-button.success.is-plain:active {
    background-color: var(--lordly-color-success-light-3);
    color: var(--lordly-color-black);
    box-shadow: none;
    border: 1px solid var(--lordly-color-success);
}

.lordly-button.danger.is-plain {
    background-color: transparent;
    color: var(--lordly-color-danger);
    box-shadow: none;
    border: 1px solid var(--lordly-color-danger);
}

.lordly-button.danger.is-plain:hover {
    background-color: var(--lordly-color-danger-light-1);
    color: var(--lordly-color-white);
    box-shadow: none;
    border: 1px solid var(--lordly-color-danger);
}

.lordly-button.danger.is-plain:active {
    background-color: var(--lordly-color-danger-light-3);
    color: var(--lordly-color-black);
    box-shadow: none;
    border: 1px solid var(--lordly-color-danger);
}

.lordly-button.warning.is-plain {
    background-color: transparent;
    color: var(--lordly-color-warning);
    box-shadow: none;
    border: 1px solid var(--lordly-color-warning);
}

.lordly-button.warning.is-plain:hover {
    background-color: var(--lordly-color-warning-light-1);
    color: var(--lordly-color-white);
    box-shadow: none;
    border: 1px solid var(--lordly-color-warning);
}

.lordly-button.warning.is-plain:active {
    background-color: var(--lordly-color-warning-light-3);
    color: var(--lordly-color-black);
    box-shadow: none;
    border: 1px solid var(--lordly-color-warning);
}

.lordly-button.info.is-plain {
    background-color: transparent;
    color: var(--lordly-color-info);
    box-shadow: none;
    border: 1px solid var(--lordly-color-info);
}

.lordly-button.info.is-plain:hover {
    background-color: var(--lordly-color-info-light-1);
    color: var(--lordly-color-white);
    box-shadow: none;
    border: 1px solid var(--lordly-color-info);
}

.lordly-button.info.is-plain:active {
    background-color: var(--lordly-color-info-light-3);
    color: var(--lordly-color-black);
    box-shadow: none;
    border: 1px solid var(--lordly-color-info);
}

.lordly-button.default.is-plain {
    background-color: transparent;
    color: var(--lordly-color-black-light-3);
    box-shadow: none;
    border: 1px solid var(--lordly-color-black-light-3);
}

.lordly-button.default.is-plain:hover {
    background-color: var(--lordly-color-white-dark-1);
    color: var(--lordly-color-black-light-1);
    box-shadow: none;
    border: 1px solid var(--lordly-color-black-light-3);
}

.lordly-button.default.is-plain:active {
    background-color: var(--lordly-color-black-light-6);
    color: var(--lordly-color-black);
    box-shadow: none;
    border: 1px solid var(--lordly-color-black-light-3);
}

.lordly-button.primary.is-disabled,
.lordly-button.primary.is-disabled:hover,
.lordly-button.primary.is-disabled:active {
    cursor: not-allowed;
    background-color: var(--lordly-color-primary-light-1);
    color: var(--lordly-color-white);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-6);
    border: 1px solid var(--lordly-color-primary);
}

.lordly-button.success.is-disabled,
.lordly-button.success.is-disabled:hover,
.lordly-button.success.is-disabled:active {
    cursor: not-allowed;
    background-color: var(--lordly-color-success-light-1);
    color: var(--lordly-color-white);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-6);
    border: 1px solid var(--lordly-color-success);
}

.lordly-button.danger.is-disabled,
.lordly-button.danger.is-disabled:hover,
.lordly-button.danger.is-disabled:active {
    cursor: not-allowed;
    background-color: var(--lordly-color-danger-light-1);
    color: var(--lordly-color-white);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-6);
    border: 1px solid var(--lordly-color-danger);
}

.lordly-button.warning.is-disabled,
.lordly-button.warning.is-disabled:hover,
.lordly-button.warning.is-disabled:active {
    cursor: not-allowed;
    background-color: var(--lordly-color-warning-light-1);
    color: var(--lordly-color-white);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-6);
    border: 1px solid var(--lordly-color-warning);
}

.lordly-button.info.is-disabled,
.lordly-button.info.is-disabled:hover,
.lordly-button.info.is-disabled:active {
    cursor: not-allowed;
    background-color: var(--lordly-color-info-light-1);
    color: var(--lordly-color-white);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-6);
    border: 1px solid var(--lordly-color-info);
}

.lordly-button.default.is-disabled,
.lordly-button.default.is-disabled:hover,
.lordly-button.default.is-disabled:active {
    cursor: not-allowed;
    background-color: var(--lordly-color-white-dark-2);
    color: var(--lordly-color-black-light-6);
    box-shadow: 0px 0px 5px var(--lordly-color-black-light-6);
    border: 1px solid var(--lordly-color-white-dark-2);
}

.lordly-button.primary.is-plain.is-disabled,
.lordly-button.primary.is-plain.is-disabled:hover,
.lordly-button.primary.is-plain.is-disabled:active {
    cursor: not-allowed;
    background-color: transparent;
    color: var(--lordly-color-primary-light-1);
    box-shadow: none;
    border: 1px solid var(--lordly-color-primary-light-1);
}

.lordly-button.success.is-plain.is-disabled,
.lordly-button.success.is-plain.is-disabled:hover,
.lordly-button.success.is-plain.is-disabled:active {
    cursor: not-allowed;
    background-color: transparent;
    color: var(--lordly-color-success-light-1);
    box-shadow: none;
    border: 1px solid var(--lordly-color-success-light-1);
}

.lordly-button.danger.is-plain.is-disabled,
.lordly-button.danger.is-plain.is-disabled:hover,
.lordly-button.danger.is-plain.is-disabled:active {
    cursor: not-allowed;
    background-color: transparent;
    color: var(--lordly-color-danger-light-1);
    box-shadow: none;
    border: 1px solid var(--lordly-color-danger-light-1);
}

.lordly-button.warning.is-plain.is-disabled,
.lordly-button.warning.is-plain.is-disabled:hover,
.lordly-button.warning.is-plain.is-disabled:active {
    cursor: not-allowed;
    background-color: transparent;
    color: var(--lordly-color-warning-light-1);
    box-shadow: none;
    border: 1px solid var(--lordly-color-warning-light-1);
}

.lordly-button.info.is-plain.is-disabled,
.lordly-button.info.is-plain.is-disabled:hover,
.lordly-button.info.is-plain.is-disabled:active {
    cursor: not-allowed;
    background-color: transparent;
    color: var(--lordly-color-info-light-1);
    box-shadow: none;
    border: 1px solid var(--lordly-color-info-light-1);
}

.lordly-button.default.is-plain.is-disabled,
.lordly-button.default.is-plain.is-disabled:hover,
.lordly-button.default.is-plain.is-disabled:active {
    cursor: not-allowed;
    background-color: transparent;
    color: var(--lordly-color-black-light-6);
    box-shadow: none;
    border: 1px solid var(--lordly-color-black-light-6);
}
</style>