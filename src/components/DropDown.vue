<template>
    <div class="select__container">
        <p class="select__container_selected" @click="toggleClassArrow">Вид: {{ optionTxt }}
            <span class="arrow" :class="{ active: isDDActive }"></span>
        </p>
        <ul class="select__block" :class="{ active: isDDActive }">
            <li class="option option_1" 
            @click="changeOption('not_selected')" 
            :class="{ active: option === 'not_selected' }">Не выбрано</li>
            <li class="option option_2" 
                @click="changeOption('leads')" 
                :class="{ active: option === 'leads' }">Сделка</li>
            <li class="option option_3" 
                @click="changeOption('contacts')"
                :class="{active: option === 'contacts'}">Контакт</li>
            <li class="option option_4" 
                @click="changeOption('companies')"
                :class="{active: option === 'companies'}">Компания</li>
        </ul>
    </div>
</template>

<script lang="ts" >
/**
 * @file DropDown.vue
 * @description Создание и стилизация элемента DropDown через ul-li
 * @author Перевозчиков Даниил
 * @version 1.0
 */
import { defineComponent, reactive, toRefs } from 'vue';
import ReqType from '../types/ReqType';
export default defineComponent({
    setup() {
        const state = reactive({
            option: 'not_selected' as ReqType,
            optionTxt: 'Не выбрано',
            isDDActive: false
        })

        const toggleClassArrow = () => {
            state.isDDActive = !state.isDDActive;
        }

        const changeOption = (option: ReqType) => {
            state.option = option;
            toggleClassArrow();
            switch (option) {
                case 'not_selected':
                    state.optionTxt = 'Не выбрано';
                    break;
                case 'companies':
                    state.optionTxt = 'Компания';
                    break;
                case 'contacts':
                    state.optionTxt = 'Контакт';
                    break;
                case 'leads':
                    state.optionTxt = 'Сделка';
                    break;
                default: break;
            }
        }

        return { ...toRefs(state), changeOption, toggleClassArrow }
    },
    watch: {
        option(newValue: ReqType) {
            this.$emit('updateOption', newValue)
        }
    }
})
</script>

<style scoped></style>