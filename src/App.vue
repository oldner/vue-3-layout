<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref, watch, markRaw, type Ref } from "vue";
import { RouterView, useRoute } from "vue-router";
// import BlankLayout from "./layouts/BlankLayout.vue";
import FullLayout from "./layouts/FullLayout.vue";

const route = useRoute()

const layout = ref()

// const layout = computed(() => route.meta.layout || defaultLayout.value)

watch(
  () => route.meta?.layout as string | undefined,
  async (metaLayout) => {
    try {
      const component = metaLayout && await import(`@layouts/${metaLayout}.vue`)
      layout.value = markRaw(component?.default || FullLayout)
    } catch (e) {
      layout.value = markRaw(FullLayout)
    }
  },
  { immediate: true }
)
</script>

<template>
  <component :is="layout">
    in component
    <RouterView />
  </component>
</template>