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
export default defineComponent({
  components: { DropDown, ButtonSend },
  setup() {
    const state = reactive({
      statusBtn: 'no_active' as BtnType,
      typeOption: 'not_selected' as ReqType
    })

    return { ...toRefs(state) }
  },
  methods: {
    onUpdateOption(option: ReqType) {
      this.typeOption = option
    },
    async send() {
      this.statusBtn = 'load';
      setTimeout(() => {
        this.statusBtn = this.typeOption === 'not_selected' ? 'no_active' : 'active';
      }, 1000);
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
    <ButtonSend :status-btn="statusBtn" @send="send"/>
  </div>
</template>

<style scoped></style>
