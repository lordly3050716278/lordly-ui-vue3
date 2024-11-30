<template>
    <div class="spinner">
        <div class="spinner-wrapper">
            <div class="spinner-circle"></div>
            <div class="spinner-circle"></div>
            <div class="spinner-circle"></div>
            <div class="spinner-circle"></div>
        </div>
        <div class="spinner-wrapper">
            <div class="spinner-circle"></div>
            <div class="spinner-circle"></div>
            <div class="spinner-circle"></div>
            <div class="spinner-circle"></div>
        </div>
        <div class="spinner-wrapper">
            <div class="spinner-circle"></div>
            <div class="spinner-circle"></div>
            <div class="spinner-circle"></div>
            <div class="spinner-circle"></div>
        </div>
    </div>
</template>

<style scoped>
.spinner {
    width: 20px;
    height: 20px;
    position: relative;
}

.spinner-circle {
    width: 5px;
    height: 5px;
    background-color: var(--lordly-color-primary);

    border-radius: 100%;
    position: absolute;
    animation: bouncedelay 1.2s infinite ease-in-out;
    animation-fill-mode: both;
}

.spinner-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
}

.spinner-wrapper:nth-child(1) {
    transform: rotateZ(0deg);
}

.spinner-wrapper:nth-child(2) {
    transform: rotateZ(45deg);
}

.spinner-wrapper:nth-child(3) {
    transform: rotateZ(90deg);
}

.spinner-circle:nth-child(1) {
    top: 0;
    left: 0;
}

.spinner-circle:nth-child(2) {
    top: 0;
    right: 0;
}

.spinner-circle:nth-child(3) {
    right: 0;
    bottom: 0;
}

.spinner-circle:nth-child(4) {
    left: 0;
    bottom: 0;
}

.spinner-wrapper:nth-child(1) .spinner-circle:nth-child(1) {
    animation-delay: 0s;
}

.spinner-wrapper:nth-child(1) .spinner-circle:nth-child(2) {
    animation-delay: -.9s;
}

.spinner-wrapper:nth-child(1) .spinner-circle:nth-child(3) {
    animation-delay: -.6s;
}

.spinner-wrapper:nth-child(1) .spinner-circle:nth-child(4) {
    animation-delay: -.3s;
}

.spinner-wrapper:nth-child(2) .spinner-circle:nth-child(1) {
    animation-delay: -1.1s;
}

.spinner-wrapper:nth-child(2) .spinner-circle:nth-child(2) {
    animation-delay: -.8s;
}

.spinner-wrapper:nth-child(2) .spinner-circle:nth-child(3) {
    animation-delay: -.5s;
}

.spinner-wrapper:nth-child(2) .spinner-circle:nth-child(4) {
    animation-delay: -.2s;
}

.spinner-wrapper:nth-child(3) .spinner-circle:nth-child(1) {
    animation-delay: -1s;
}

.spinner-wrapper:nth-child(3) .spinner-circle:nth-child(2) {
    animation-delay: -.7s;
}

.spinner-wrapper:nth-child(3) .spinner-circle:nth-child(3) {
    animation-delay: -.4s;
}

.spinner-wrapper:nth-child(3) .spinner-circle:nth-child(4) {
    animation-delay: -.1s;
}

@keyframes bouncedelay {

    0%,
    80%,
    100% {
        transform: scale(0.0);
    }

    40% {
        transform: scale(1.0);
    }
}
</style>