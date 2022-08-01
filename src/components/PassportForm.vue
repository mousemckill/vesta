<script setup lang="ts">
import { Form } from 'vee-validate';
import { passportFormSchema } from '../validations/passportFormSchema';
import GenderField from './fields/GenderField.vue';
import BirthdayField from './fields/BirthdayField.vue';
import LastNameField from './fields/LastNameField.vue';
import FirstNameField from './fields/FirstNameField.vue';
import MiddleNameField from './fields/MiddleNameField.vue';
import WorkInfoField from './fields/WorkInfoField.vue';

const handleSubmit = () => {};
</script>

<template>
  <div class="bg-gray-100 p-6">
    <Form
      @submit="handleSubmit"
      :validation-schema="passportFormSchema"
      :initial-values="{ works: [] }"
    >
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <div class="px-4 sm:px-0">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Общие сведения
            </h3>
          </div>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2 space-y-6">
          <gender-field />
          <birthday-field />
          <last-name-field />
          <first-name-field />
          <middle-name-field />
        </div>
      </div>
      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200"></div>
        </div>
      </div>
      <WorkInfoField />
      <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
          <div class="border-t border-gray-200"></div>
        </div>
      </div>
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="mt-5 md:mt-0 md:col-span-2 space-y-6 md:col-start-2">
          <button
            type="submit"
            class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 focus:ring focus:ring-green-300 focus:outline-none"
          >
            Сохранить
          </button>
        </div>
      </div>
    </Form>
  </div>
</template>

<style></style>
