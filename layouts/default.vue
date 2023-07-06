<script lang="ts" setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<template>
    <div class="bg-white dark:bg-slate-900">
        <NavBar />
        <slot />
        <MainFoot />
    </div>
</template>

<style lang="scss" scoped></style>
