<template>
  <base-field label="Дата рождения" name="birthday" v-slot="field">
    <input
      class="form-control"
      type="text"
      placeholder="В формате dd/mm/yyyy или mm/dd/yyyy"
      :value="field.value"
      :id="field.fieldName"
      :name="field.fieldName"
      @blur="field.on.blur"
      @input="field.on.input"
    />
  </base-field>
</template>

<script setup lang="ts">
import BaseField from './BaseField.vue';
</script>

<style scoped></style>
