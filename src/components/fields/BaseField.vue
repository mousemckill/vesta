<template>
  <div :class="{ 'has-error': !!errorMessage, success: meta.valid }">
    <form-label :html-for="name">{{ label }}</form-label>
    <slot
      :fieldName="name"
      :value="inputValue"
      :placeholder="placeholder"
      :checked="checked"
      :on="{
        input: handleChange,
        blur: handleBlur,
      }"
    >
      <input
        type="text"
        class="form-control"
        :value="inputValue"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        @input="handleChange"
        @blur="handleBlur"
      />
    </slot>
    <form-inline-error v-if="errorMessage">
      {{ errorMessage }}
    </form-inline-error>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate';

import FormLabel from '../FormLabel.vue';
import FormInlineError from '../FormInlineError.vue';
import { toRef } from 'vue';

const props = defineProps<{
  name: string;
  label?: string;
  placeholder?: string;
  value?: unknown;
  fieldType?: string;
  checkedValue?: unknown;
  uncheckedValue?: unknown;
}>();

const name = toRef(props, 'name');

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
  checked,
} = useField(name, undefined, {
  type: props.fieldType,
  initialValue: props.value,
  checkedValue: props.checkedValue,
  uncheckedValue: props.uncheckedValue,
});
</script>

<style scoped></style>
