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
                @click="changeOption('deal')" 
                :class="{ active: option === 'deal' }">Сделка</li>
            <li class="option option_3" 
                @click="changeOption('contact')"
                :class="{active: option === 'contact'}">Контакт</li>
            <li class="option option_4" 
                @click="changeOption('company')"
                :class="{active: option === 'company'}">Компания</li>
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
                case 'company':
                    state.optionTxt = 'Компания';
                    break;
                case 'contact':
                    state.optionTxt = 'Контакт';
                    break;
                case 'deal':
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