<script setup>
import { watch } from 'vue';
import { useSelectControlStore } from '#imports';

const controlStore = useSelectControlStore();

function toNextOption() {
    const productList = document.getElementById('productList');
    const currentOption = productList.selectedIndex;
    if (currentOption < productList.length - 1) {
        productList.selectedIndex = currentOption + 1
    } else {
        productList.selectedIndex = 0;
    }
}

function toPreviousOption() {
    const productList = document.getElementById('productList');
    const currentOption = productList.selectedIndex;
    if (currentOption > 0) {
        productList.selectedIndex = currentOption - 1
    } else {
        productList.selectedIndex = productList.length - 1;
    }
}

watch(() => controlStore.triggerNext, (val) => {
    if (val) {
        toNextOption();
        controlStore.resetTriggers();
    }
});

watch(() => controlStore.triggerPrevious, (val) => {
    if (val) {
        toPreviousOption();
        controlStore.resetTriggers();
    }
});
</script>

<template>
    <div class="select-box">
        <span class="status-flag"></span>
        <select name="productList" id="productList" class="custom-select">
            <option value="food">AÇÚCAR REFINADO</option>
            <option value="food">AÇÚCAR DEMERARA</option>
            <option value="food">FEIJÃO</option>
            <option value="food">CAFÉ MARATÁ 250G</option>
            <option value="food">CAFÉ MARATÁ 500G</option>
            <option value="food">CAFÉ SANTA CLARA 250G</option>
            <option value="food">CAFÉ SANTA CLARA 250G</option>
            <option value="food">ARROZ URBANO KG</option>
            <option value="food">ARROZ URBANO 5KG</option>
            <option value="food">ARROZ TIO URBANO KG</option>
            <option value="food">ARROZ TIO URBANO 5KG</option>
        </select>
    </div>
</template>

<style scoped>
select {
    height: 100%;

    padding: 0 var(--spacing-lg);

    font-family: 'Montserrat';
    font-weight: bold;
    font-size: var(--font-size-base);
    text-align: left;

    color: var(--quaternary);
    background-color: var(--text);

    border: 0;
    border-radius: 10px;

    cursor: pointer;

    option {
        font-weight: bold;
    }
}

.custom-select {
    flex-grow: 1;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background-image: url('../assets/images/arrow-down.png');
    background-repeat: no-repeat;
    background-position: right 10px center; /* Posição da seta */
    background-size: 36px; /* Tamanho da seta */
    padding-right: 30px;
}

.select-box {
    display: flex;
    align-items: center;

    height: 53px;
    width: 370px;

    margin-top: 60px;
}

.status-flag {
    position: absolute;
    height: 15px;
    width: 15px;

    margin-left: 10px;
    margin-right: 10px;

    background-color: var(--tertiary); /*Vai alternar entre primary/tertiary para sinalização*/

    border-radius: 50%;
    box-shadow: 1px 1px 4px rgba(55, 75, 87, 0.151);
}
</style>