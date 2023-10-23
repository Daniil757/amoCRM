<script lang="ts">
/**
 * @file App.vue
 * @description Главный файл
 * @author Перевозчиков Даниил
 * @version 1.0
 */
import { defineComponent, reactive, toRefs } from 'vue';
import DropDown from './components/DropDown.vue';
import './scss/main.scss'
import ButtonSend from './components/ButtonSend.vue';
import BtnType from './types/BtnType';
import ReqType from './types/ReqType';
import ListEntities from './components/ListEntities.vue';
import axios, { AxiosError } from 'axios';
import { unAuth } from './types/unAuthType';
export default defineComponent({
  components: { DropDown, ButtonSend, ListEntities },
  setup() {
    const state = reactive({
      statusBtn: 'no_active' as BtnType,
      typeOption: 'not_selected' as ReqType,
      entities: [] as number[]
    })

    return { ...toRefs(state) }
  },
  methods: {
    onUpdateOption(option: ReqType) {
      this.typeOption = option
    },
    // отправка запроса на добавление сущности
    async send() {
      // 2-ой уровень проверки
      if (this.statusBtn === 'no_active') return;

      this.statusBtn = 'load';
      try {
        const fetch = await axios.post("http://127.0.0.1:3500/create", {
          "entityType": this.typeOption
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        })

        if (fetch.data.status === 401) {

          return;
        }
        const data: number = fetch.data.values;
        this.entities.unshift(data)
        this.statusBtn = this.typeOption === 'not_selected' ? 'no_active' : 'active';
      } catch (e) {
        const { status } = (e as AxiosError).response?.data as unAuth;
        if (status === 401) {
          alert("Токен обновлён. Попробуйте ещё раз");
        } else {
          alert("Ошибка при добавлении сущности");
        }
        this.statusBtn = this.typeOption === 'not_selected' ? 'no_active' : 'active';
      }
    }
  },
  watch: {
    typeOption(newValue: ReqType) {
      this.statusBtn = newValue === 'not_selected' ? 'no_active' : 'active'
    }
  }
})
</script>

<template>
  <div class="container">
    <DropDown @updateOption="onUpdateOption" />
    <ButtonSend :status-btn="statusBtn" @send="send" />
    <ListEntities :entities="entities" />
  </div>
</template>

<style scoped></style>
