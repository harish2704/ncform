<template>
  <vSelect
    v-model="modelVal"
    :placeholder="placeholder || $nclang('selectPls')"
    v-show="!hidden"
    :disabled="disabled || readonly"
    :options="config.enumSource"
    :reduce="item => item.value"
  >
    <template #search="{ attributes, events }">
      <input
        class="vs__search"
        v-bind="attributes"
        v-on="events"
      />
    </template>
  </vSelect>
</template>

<script>
import vSelect from 'vue-select'
import ncformCommon from "@ncform/ncform-common";
const controlMixin = ncformCommon.mixins.vue.controlMixin;
export default {
  mixins:[controlMixin],
  components: {
    vSelect,
  },
}
</script>

<style lang="scss">
@import 'vue-select/src/scss/vue-select.scss';

input.vs__search::placeholder {
  color: #8c8c8c;
}
</style>
