<template>
    <main>
        <Header />
        <h1>Gestão de Pedidos</h1>
        <slot />
        <Footer />
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: var(--spacing-md);

    font-family: 'Montserrat';
}

main h1 {
    padding: var(--spacing-md) 0;
    
    font-weight: 700;
    font-size: var(--font-size-lg);
    text-align: center;
    text-shadow: 0px 4px 4px rgba(47, 50, 57, 0.15);
    
    color: var(--text);

    user-select: none;
}
</style>