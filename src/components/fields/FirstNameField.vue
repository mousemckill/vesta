<template>
  <base-field
    label="Имя"
    name="first_name"
    v-slot="{ fieldName: name, value, on: { blur, input } }"
  >
    <input
      type="text"
      class="form-control"
      :value="value"
      :name="name"
      :id="name"
      @blur="blur"
      @input="input"
    />
  </base-field>
</template>

<script setup lang="ts">
import BaseField from './BaseField.vue';
</script>

<style scoped></style>
