<script setup></script>

<template>
    <div class="quantity-selector">
        <button class="navigate-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="var(--text)" d="M6.325 12.85q-.225-.15-.337-.375T5.874 12t.113-.475t.337-.375l8.15-5.175q.125-.075.263-.112T15 5.825q.4 0 .7.288t.3.712v10.35q0 .425-.3.713t-.7.287q-.125 0-.262-.038t-.263-.112z"/></svg></button>
        <input type="number" name="qtd" id="iqtd" value="0" min="0">
        <select class="custom-select" name="item-type" id="iitem-type">
            <option value="">UND</option>
            <option value="">SAC</option>
            <option value="">FAR</option>
        </select>
        <button class="navigate-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="var(--text)" d="M8 17.175V6.825q0-.425.3-.713t.7-.287q.125 0 .263.037t.262.113l8.15 5.175q.225.15.338.375t.112.475t-.112.475t-.338.375l-8.15 5.175q-.125.075-.262.113T9 18.175q-.4 0-.7-.288t-.3-.712"/></svg></button>
    </div>
</template>

<style scoped>
.quantity-selector {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-smd);

    margin-top: 40px;

    select, input {
        height: 53px;
        width: 120px;

        font-family: 'Montserrat';
        font-weight: bold;
        font-size: var(--font-size-input);
        text-align: center;

        color: var(--quaternary);
        background-color: var(--text);
        
        border: 0;
        border-radius: 10px;

        cursor: pointer;

        option {
            font-weight: bold;
        }
    }
}

.navigate-button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;

    background: #374B57;
    
    border: 0;
    border-radius: 5px;

    cursor: pointer;
}

.custom-select {
    flex-grow: 1;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    background-image: url('../assets/images/arrow-down.png');
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 36px;
    padding-right: 30px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
</style>