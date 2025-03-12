<template>
    <div>
        <form action="#" method="post">
            <InputField label="ID" type="text" name="id" id="iid" placeholder="auto" readonly width="120px"/>
            <InputField label="Data" type="text" name="date" id="idate" placeholder="dd/mm/aaaa" maxlength="10" width="200px" />
            <InputField label="Responsável" type="text" name="name" id="iresp" placeholder="Ex.: Agostinho de Hipona" maxlength="11" width="346px" />
            <div>
                <NuxtLink to="/historico" tabindex="-1">
                    <Button type="button" id="history" variant="secondary">HISTÓRICO</Button>
                </NuxtLink>
                <NuxtLink to="/makeOrder" tabindex="-1">
                    <Button type="submit" id="create" variant="primary">CRIAR</Button>
                </NuxtLink>
            </div>
        </form>               
    </div>
</template>

<style scoped>
form {
    display: flex;
    flex-flow: column nowrap;
    gap: var(--spacing-md);
    margin: var(--spacing-md) 0;

    font-weight: 600;
    font-size: var(--font-size-slg);
    text-align: center;
    text-shadow: 0px 4px 4px rgba(47, 50, 57, 0.15);

    color: var(--text);

    div:last-of-type {
        display: flex;
        flex-flow: row;
        justify-content: center;
        gap: var(--spacing-md);
    }
}
</style>