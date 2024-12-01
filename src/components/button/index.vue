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

    transition: .4s;
    border-radius: 5px;
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
    background-color: #4A88C7;
    border-color: #3577A8;
    color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.lordly-button.primary:hover {
    background-color: #3F7DAF;
    border-color: #2F6F98;
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15);
}

.lordly-button.primary:active {
    background-color: #336F9B;
    border-color: #285A7F;
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25), 0 6px 12px rgba(0, 0, 0, 0.2);
}

.lordly-button.success {
    background-color: #42B883;
    border-color: #3A9F75;
    color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.lordly-button.success:hover {
    background-color: #3A9F75;
    border-color: #2E855D;
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15);
}

.lordly-button.success:active {
    background-color: #328F65;
    border-color: #276D4F;
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25), 0 6px 12px rgba(0, 0, 0, 0.2);
}

.lordly-button.danger {
    background-color: #D84A4A;
    border-color: #C33D3D;
    color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.lordly-button.danger:hover {
    background-color: #C33D3D;
    border-color: #A02E2E;
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15);
}

.lordly-button.danger:active {
    background-color: #A02E2E;
    border-color: #8A2525;
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25), 0 6px 12px rgba(0, 0, 0, 0.2);
}

.lordly-button.warning {
    background-color: #F0A900;
    border-color: #D88C00;
    color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.lordly-button.warning:hover {
    background-color: #D88C00;
    border-color: #C77B00;
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15);
}

.lordly-button.warning:active {
    background-color: #C77B00;
    border-color: #B26C00;
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25), 0 6px 12px rgba(0, 0, 0, 0.2);
}

.lordly-button.info {
    background-color: #00A8D4;
    border-color: #0090B2;
    color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.lordly-button.info:hover {
    background-color: #0090B2;
    border-color: #00789D;
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15);
}

.lordly-button.info:active {
    background-color: #00789D;
    border-color: #006788;
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25), 0 6px 12px rgba(0, 0, 0, 0.2);
}

.lordly-button.default {
    background-color: #B0B0B0;
    border-color: #999999;
    color: #2C3E50;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.lordly-button.default:hover {
    background-color: #999999;
    border-color: #888888;
    box-shadow: 0 8px 14px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15);
}

.lordly-button.default:active {
    background-color: #888888;
    border-color: #777777;
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.25), 0 6px 12px rgba(0, 0, 0, 0.2);
}

.lordly-button.primary.is-plain {
    background-color: transparent;
    color: #3577A8;
    box-shadow: none;
    border: 1px solid #3577A8;
}

.lordly-button.primary.is-plain:hover {
    background-color: #D1E3F7;
    color: #ffffff;
    box-shadow: none;
    border: 1px solid #3577A8;
}

.lordly-button.primary.is-plain:active {
    background-color: #A0C1D9;
    color: #ffffff;
    box-shadow: none;
    border: 1px solid #3577A8;
}

.lordly-button.success.is-plain {
    background-color: transparent;
    color: #3A9F75;
    box-shadow: none;
    border: 1px solid #3A9F75;
}

.lordly-button.success.is-plain:hover {
    background-color: #A8D6B4;
    color: #ffffff;
    box-shadow: none;
    border: 1px solid #3A9F75;
}

.lordly-button.success.is-plain:active {
    background-color: #7BBF7F;
    color: #ffffff;
    box-shadow: none;
    border: 1px solid #3A9F75;
}

.lordly-button.danger.is-plain {
    background-color: transparent;
    color: #C33D3D;
    box-shadow: none;
    border: 1px solid #C33D3D;
}

.lordly-button.danger.is-plain:hover {
    background-color: #F8C2C2;
    color: #ffffff;
    box-shadow: none;
    border: 1px solid #C33D3D;
}

.lordly-button.danger.is-plain:active {
    background-color: #F1A4A1;
    color: #ffffff;
    box-shadow: none;
    border: 1px solid #C33D3D;
}

.lordly-button.warning.is-plain {
    background-color: transparent;
    color: #D88C00;
    box-shadow: none;
    border: 1px solid #D88C00;
}

.lordly-button.warning.is-plain:hover {
    background-color: #F2D48A;
    color: #ffffff;
    box-shadow: none;
    border: 1px solid #D88C00;
}

.lordly-button.warning.is-plain:active {
    background-color: #E0B36A;
    color: #ffffff;
    box-shadow: none;
    border: 1px solid #D88C00;
}

.lordly-button.info.is-plain {
    background-color: transparent;
    color: #0090B2;
    box-shadow: none;
    border: 1px solid #0090B2;
}

.lordly-button.info.is-plain:hover {
    background-color: #A7D5E6;
    color: #ffffff;
    box-shadow: none;
    border: 1px solid #0090B2;
}

.lordly-button.info.is-plain:active {
    background-color: #80B8D3;
    color: #ffffff;
    box-shadow: none;
    border: 1px solid #0090B2;
}

.lordly-button.default.is-plain {
    background-color: transparent;
    color: #2C3E50;
    box-shadow: none;
    border: 1px solid #2C3E50;
}

.lordly-button.default.is-plain:hover {
    background-color: #E7E7E7;
    color: #2C3E50;
    box-shadow: none;
    border: 1px solid #2C3E50;
}

.lordly-button.default.is-plain:active {
    background-color: #D1D1D1;
    color: #2C3E50;
    box-shadow: none;
    border: 1px solid #2C3E50;
}

.lordly-button.primary.is-disabled,
.lordly-button.primary.is-disabled:hover,
.lordly-button.primary.is-disabled:active {
    cursor: not-allowed;
    background-color: #D4E2F5;
    color: #B0C9E2;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #A6C7E1;
}

.lordly-button.success.is-disabled,
.lordly-button.success.is-disabled:hover,
.lordly-button.success.is-disabled:active {
    cursor: not-allowed;
    background-color: #D4E9D0;
    color: #A3C6A2;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #A3C6A2;
}

.lordly-button.danger.is-disabled,
.lordly-button.danger.is-disabled:hover,
.lordly-button.danger.is-disabled:active {
    cursor: not-allowed;
    background-color: #F2D0D1;
    color: #D6A6A7;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #D6A6A7;
}

.lordly-button.warning.is-disabled,
.lordly-button.warning.is-disabled:hover,
.lordly-button.warning.is-disabled:active {
    cursor: not-allowed;
    background-color: #F9E0A9;
    color: #E1C17D;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #E1C17D;
}

.lordly-button.info.is-disabled,
.lordly-button.info.is-disabled:hover,
.lordly-button.info.is-disabled:active {
    cursor: not-allowed;
    background-color: #D1E8F2;
    color: #A8C8D9;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #A8C8D9;
}

.lordly-button.default.is-disabled,
.lordly-button.default.is-disabled:hover,
.lordly-button.default.is-disabled:active {
    cursor: not-allowed;
    background-color: #F4F4F4;
    color: #B0B0B0;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #B0B0B0;
}

.lordly-button.primary.is-plain.is-disabled,
.lordly-button.primary.is-plain.is-disabled:hover,
.lordly-button.primary.is-plain.is-disabled:active {
    cursor: not-allowed;
    background-color: transparent;
    color: #A6C7E1;
    box-shadow: none;
    border: 1px solid #A6C7E1;
}

.lordly-button.success.is-plain.is-disabled,
.lordly-button.success.is-plain.is-disabled:hover,
.lordly-button.success.is-plain.is-disabled:active {
    cursor: not-allowed;
    background-color: transparent;
    color: #A3C6A2;
    box-shadow: none;
    border: 1px solid #A3C6A2;
}

.lordly-button.danger.is-plain.is-disabled,
.lordly-button.danger.is-plain.is-disabled:hover,
.lordly-button.danger.is-plain.is-disabled:active {
    cursor: not-allowed;
    background-color: transparent;
    color: #D6A6A7;
    box-shadow: none;
    border: 1px solid #D6A6A7;
}

.lordly-button.warning.is-plain.is-disabled,
.lordly-button.warning.is-plain.is-disabled:hover,
.lordly-button.warning.is-plain.is-disabled:active {
    cursor: not-allowed;
    background-color: transparent;
    color: #E1C17D;
    box-shadow: none;
    border: 1px solid #E1C17D;
}

.lordly-button.info.is-plain.is-disabled,
.lordly-button.info.is-plain.is-disabled:hover,
.lordly-button.info.is-plain.is-disabled:active {
    cursor: not-allowed;
    background-color: transparent;
    color: #A8C8D9;
    box-shadow: none;
    border: 1px solid #A8C8D9;
}

.lordly-button.default.is-plain.is-disabled,
.lordly-button.default.is-plain.is-disabled:hover,
.lordly-button.default.is-plain.is-disabled:active {
    cursor: not-allowed;
    background-color: transparent;
    color: #B0B0B0;
    box-shadow: none;
    border: 1px solid #B0B0B0;
}
</style>