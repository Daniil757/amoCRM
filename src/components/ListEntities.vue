<template>
   <div class="entities">
      <h3 class="entities__title">Созданные сущности</h3>
      <ul class="entities__list">
         
         <li class="entities__item" v-for="entity in entities" :key="entity">
            <p class="entities__item_id">ID: {{ entity }}</p>
         </li>
      </ul>
   </div>
</template>
 
<script lang="ts">
/**
* @file ListEntities.vue
* @description 
* @author Daniil Perevozchikov
* @version 1.0
* @date 21.10.2023
*/
import { defineComponent } from 'vue'

export default defineComponent({
   props: {
      entities: {
         required: true,
         type: Array<number>
      }
   }
})
</script>
 
<style scoped></style>