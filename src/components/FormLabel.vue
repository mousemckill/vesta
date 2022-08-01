<script setup lang="ts">
defineProps<{ required?: boolean; htmlFor: string }>();
</script>

<template>
  <label :for="htmlFor" class="block text-sm font-medium text-gray-700">
    <slot></slot>
    <span v-if="required" class="text-red-500">*</span>
  </label>
</template>
