<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="h-full w-full">
    <SInput v-model="route.query.q" />
  </div>
</template>
