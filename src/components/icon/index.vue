<template>
    <i class="lordly-icon">
        <slot />
    </i>
</template>

<style scoped>
.lordly-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: 1em;
    height: 1em;
    fill: currentColor;
}
</style>