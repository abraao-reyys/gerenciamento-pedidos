<script setup>
</script>

<template>
    <div class="select-box">
        <span class="status-flag"></span>
        <select name="" id="" class="custom-select">
            <option value="food">AÇÚCAR DEMERARA KG</option>
            <option value="food">FEIJÃO</option>
            <option value="food">ARROZ NAMORADO KG</option>
            <option value="food">CAFÉ MARATÁ 250G</option>
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