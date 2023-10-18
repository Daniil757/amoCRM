<template>
    <button class="btn__send" :class="{ active: statusBtn === 'active', load: statusBtn === 'load' }" @click="send">
        <span class="btn__create">Создать</span>
        <span class="btn__loader"></span>
    </button>
</template>

<script lang="ts">
/**
 * @file ButtonSend.vue
 * @description Создание и стилизация элемента button
 * @author Перевозчиков Даниил
 * @version 1.0
 */
import { defineComponent, PropType } from 'vue'
import BtnType from '../types/BtnType';

export default defineComponent({
    props: {
        statusBtn: {
            required: true,
            type: String as PropType<BtnType>
        }
    },
    methods: {
        send() {
            this.$emit('send')
        }
    }
})
</script>

<style scoped></style>