<template>
    <header class="header"> <!--Definindo modo temporariamente-->
        <h1>MSP</h1>
        <div class="buttontemp"></div>
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
    
    .buttontemp {
        height: 40px;
        width: 100px;
    
        background-color: white;
    }
}
</style>