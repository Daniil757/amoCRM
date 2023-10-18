<template>
    <!-- <select name="" id="" class="drop-down">
        <option value="" class="drop-down__element drop-down__element_1">Не выбрано</option>
        <option value="" class="drop-down__element drop-down__element_2">Сделка</option>
        <option value="" class="drop-down__element drop-down__element_3">Контакт</option>
        <option value="" class="drop-down__element drop-down__element_4">Компания</option>
    </select> -->
    <div class="select__container">
        <p class="select__container_selected" @click="toggleClassArrow">Вид: {{ optionTxt }}
            <span class="arrow" :class="{active: isDDActive}"></span>
        </p>
        <ul class="select__block" :class="{active: isDDActive}">
            <li class="option option_1" @click="changeOption('not_selected')">Не выбрано</li>
            <li class="option option_2" @click="changeOption('deal')">Сделка</li>
            <li class="option option_3" @click="changeOption('contact')">Контакт</li>
            <li class="option option_4" @click="changeOption('company')">Компания</li>
        </ul>
    </div>
</template>

<script lang="ts" >
import { defineComponent, reactive, toRefs } from 'vue';
import ReqType from '../types/ReqType';
export default defineComponent({
    setup() {
        const state = reactive({
            option: 'not_selected' as ReqType,
            optionTxt: 'Не выбрано',
            isDDActive: false
        })

        const changeOption = (option: ReqType) => {
            state.option = option;
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

        const toggleClassArrow = () => {
            state.isDDActive = !state.isDDActive;
        }

        return { ...toRefs(state), changeOption, toggleClassArrow }
    },
})
</script>

<style scoped></style>