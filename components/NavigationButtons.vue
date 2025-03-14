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
        <Button @click="toActiveOrderControls()" variant="quaternary"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 2048 2048"><path fill="var(--text)" d="M2048 1088H250l787 787l-90 90L6 1024L947 83l90 90l-787 787h1798z"/></svg></Button>
        <Button variant="quaternary"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 28 27" fill="none">
  <path d="M20.6485 7.36346V2.37711H7.35154V7.36346H5.68942V0.714996H22.3106V7.36346H20.6485ZM23.3328 13.1809C23.8037 13.1809 24.1987 13.0213 24.5179 12.7022C24.837 12.383 24.996 11.9886 24.9949 11.5187C24.9938 11.0489 24.8348 10.6539 24.5179 10.3337C24.201 10.0134 23.8059 9.85386 23.3328 9.85497C22.8596 9.85608 22.4652 10.0156 22.1494 10.3337C21.8336 10.6517 21.674 11.0467 21.6707 11.5187C21.6673 11.9908 21.8269 12.3853 22.1494 12.7022C22.4718 13.0191 22.8652 13.1786 23.3328 13.1809ZM20.6485 24.6229V17.0802H7.35154V24.6229H20.6485ZM22.3106 26.285H5.68942V19.6365H0V10.6877C0 9.74582 0.31968 8.95632 0.959041 8.31917C1.5984 7.68203 2.3868 7.3629 3.32423 7.3618H24.6758C25.6176 7.3618 26.4071 7.68092 27.0443 8.31917C27.6814 8.95743 28 9.74638 28 10.686V19.6365H22.3106V26.285ZM26.3379 17.9744V10.6877C26.3379 10.2168 26.1789 9.82173 25.8609 9.5026C25.5428 9.18347 25.1478 9.02391 24.6758 9.02391H3.32423C2.8533 9.02391 2.45882 9.18347 2.1408 9.5026C1.82279 9.82173 1.66322 10.2168 1.66212 10.6877V17.9744H5.68942V15.4181H22.3106V17.9744H26.3379Z" fill="var(--text)"/>
</svg></Button>
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