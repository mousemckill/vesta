<template>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0 flex">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          Место работы
        </h3>
        <div class="ml-2 text-blue-700 cursor-pointer" @click="add">
          <svg
            class="h-6 w-6 stroke-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2 space-y-6">
      <div class="space-y-6" v-for="(field, idx) in fields" :key="field.key">
        <div class="py-2" v-if="!field.isFirst">
          <div class="border-t border-gray-200"></div>
        </div>
        <div @click="remove(idx)" class="text-red-500 cursor-pointer">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="8" y1="12" x2="16" y2="12"></line>
          </svg>
        </div>
        <base-field label="Должность" :name="`works[${idx}].title`" />
        <base-field label="Компания" :name="`works[${idx}].company`" />
        <div class="flex">
          <base-field
            class="flex-1"
            label="Дата начала"
            placeholder="В формате dd/mm/yyyy или mm/dd/yyyy"
            :name="`works[${idx}].date_start`"
          />
          <div class="w-20"></div>
          <base-field
            class="flex-1"
            label="Дата окончания"
            placeholder="В формате dd/mm/yyyy или mm/dd/yyyy"
            :name="`works[${idx}].date_end`"
          />
        </div>
      </div>
    </div>
    <form-inline-error v-if="errorMessage">
      {{ errorMessage }}
    </form-inline-error>
  </div>
</template>

<script setup lang="ts">
import { useFieldArray, useFieldError } from 'vee-validate';
import BaseField from './BaseField.vue';
import FormInlineError from '../FormInlineError.vue';

type WorkInfo = {
  company: string | null;
  title: string | null;
  dateStart: string | null;
  dateEnd: string | null;
};

const { fields, push, remove } = useFieldArray<WorkInfo>('works');
const errorMessage = useFieldError('works');

const add = () =>
  push({
    company: null,
    dateEnd: null,
    title: null,
    dateStart: null,
  });
</script>

<style scoped></style>
