<script setup>
import { ref, watch, onMounted } from 'vue';

const isDark = ref(false);

const toggleTheme = () => {
    const toggleText = document.querySelector('.toggle-text');

    document.body.classList.toggle('dark', isDark.value);

    if (isDark.value) {
        toggleText.style.paddingLeft = '18px';
    } else {
        toggleText.style.paddingLeft = '44px'
    }
}
</script>

<template>
    <header class="header"> <!--Definindo modo temporariamente-->
        <h1>MSP</h1>
        <div class="theme-toggle">
            <label class="switch">
                <input type="checkbox" v-model="isDark" @change="toggleTheme">
                <span class="slider">
                    <span class="toggle-text" style="display: block;">{{ isDark ? 'ON' : 'OFF' }}</span>
                </span>
            </label>
        </div>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 93px;
    width: 100%;

    padding: 20px;

    h1 {
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 36px;
        text-shadow: 0px 4px 4px rgba(47, 50, 57, 0.15);

        color: var(--text);
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 100px;
        height: 40px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    
    .slider {
        display: flex;
        align-items: center;
        position: absolute;
        cursor: pointer;
        background-color: var(--quaternary);
        border-radius: 34px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transition: 0.4s;
    }

    .slider::before {
        content: "";
        position: absolute;
        height: 34px;
        width: 34px;
        left: 3px;
        bottom: 3px;
        background-color: var(--text);
        border-radius: 50%;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: white;

        .toggle-text {
            color: var(--quaternary);
        }
    }

    input:checked + .slider::before {
        background-color: var(--tertiary);

        transform: translateX(60px);
    }
    
    .theme-toggle {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 100px;
    }

    .toggle-text {
        padding-left: 44px;

        font-family: 'Montserrat';
        font-weight: 600;
        font-size: var(--font-size-input);

        color: white;
    }
}
</style>