<template>
  <base-field
    label="Пол"
    name="gender"
    v-slot="{ fieldName: name, value, on: { blur, input } }"
    :value="null"
  >
    <select
      class="peer form-control"
      :value="value"
      :name="name"
      :id="name"
      @blur="blur"
      @input="input"
    >
      <option value="m">Мужской</option>
      <option value="w">Женский</option>
    </select>
  </base-field>
</template>

<script setup lang="ts">
import BaseField from './BaseField.vue';
</script>

<style scoped></style>
