<script setup lang="ts">
    import { defineComponent } from 'vue';
    import Navbar from './components/Navbar/Navbar.vue';
    defineComponent({
        name: "FullLayout"
    })

</script>

<template>
    <div>
        <Navbar />
        slot
        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        <slot></slot>
    </div>
</template>