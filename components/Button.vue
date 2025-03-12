<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'button'
    },
    id: String,
    variant: {
        type: String,
        default: 'primary'
    }
});

const colorMap = {
    primary: 'var(--primary)',
    secondary: 'var(--secondary)',
    tertiary: 'var(--tertiary)',
    quaternary: 'var(--quaternary)'
};

const backgroundColor = colorMap[props.variant] || 'var(--primary)'
</script>

<template>
    <button
    :id="id"
    :type="type"
    :style="{ backgroundColor }"
    >
        <slot />
    </button>
</template>

<style scoped>
button {
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 53px;
    width: 162px;
    
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: var(--font-size-base);
    
    color: var(--text);
    
    border: 0;
    border-radius: 10px;
    
    cursor: pointer;

    a {
        text-decoration: none;
    }
}

button:focus {
    box-shadow: 0 0 8px rgba(47, 50, 57, 0.6);

    outline: none;
}
</style>