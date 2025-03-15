<script setup>
import { ref, onMounted } from 'vue';
import ActionButtons from '~/components/ActionButtons.vue';

const controlsRef = ref(null);

function toActiveOrderControls() {
    controlsRef.value?.toActiveDBControls();
}
</script>

<template>
    <ActionButtons ref="controlsRef" />
    <div class="navigation-buttons">
        <Button @click="toActiveOrderControls()" variant="quaternary"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024"><path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"/><path fill="currentColor" d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"/></svg></Button>
        <NuxtLink to="/print">
            <Button variant="quaternary"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M16 8.616v-3H8v3H7v-4h10v4zm-11.423 1h14.846zm13.038 2.5q.425 0 .713-.288t.287-.712t-.287-.713t-.713-.288t-.712.288t-.288.713t.288.712t.713.288M16 19v-4.538H8V19zm1 1H7v-4H3.577v-5.384q0-.85.577-1.425t1.423-.576h12.846q.85 0 1.425.576t.575 1.424V16H17zm2.423-5v-4.384q0-.425-.287-.713t-.713-.288H5.577q-.425 0-.712.288t-.288.713V15H7v-1.538h10V15z"/></svg></Button>
        </NuxtLink>
    </div>
</template>

<style scoped>
.navigation-buttons {
    display: flex;
    flex-direction: row;
    gap: var(--spacing-md);

    margin-top: 40px;

    button {
        width: 110px;
    }
}
</style>