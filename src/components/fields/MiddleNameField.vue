<template>
  <base-field
    label="Отчество"
    name="middle_name"
    v-slot="{ fieldName: name, value, on: { blur, input } }"
  >
    <div class="flex items-center">
      <input
        type="text"
        class="form-control"
        :value="value"
        :name="name"
        :id="name"
        @blur="blur"
        @input="input"
      />
      <base-field
        class="ml-4 shrink-0"
        name="without_middle_name"
        fieldType="checkbox"
        v-slot="withoutMiddleNameField"
        :checkedValue="true"
        :uncheckedValue="false"
        :value="false"
      >
        <label>
          <input
            type="checkbox"
            :value="true"
            :checked="withoutMiddleNameField.checked"
            :name="withoutMiddleNameField.fieldName"
            :id="withoutMiddleNameField.fieldName"
            @blur="withoutMiddleNameField.on.blur"
            @input="withoutMiddleNameField.on.input"
          />
          <span class="ml-2">Нет</span>
        </label>
      </base-field>
    </div>
  </base-field>
</template>

<script setup lang="ts">
import { Field } from 'vee-validate';
import BaseField from './BaseField.vue';
</script>

<style scoped></style>
