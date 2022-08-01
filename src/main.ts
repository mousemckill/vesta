import { createApp } from 'vue';
import { configure, defineRule } from 'vee-validate';
import { localize, setLocale } from '@vee-validate/i18n';
import AllRules from '@vee-validate/rules';
import ru from '@vee-validate/i18n/dist/locale/ru.json';

import App from './App.vue';

import './index.css';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({
    ru: {
      ...ru,
      names: {
        gender: 'Пол',
        birthday: 'Дата рождения',
      },
    },
  }),
});

setLocale('ru');

createApp(App).mount('#app');
