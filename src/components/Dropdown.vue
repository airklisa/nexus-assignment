<template>
  <div class="dropdown">
    <label :for="label">{{ label }}</label>
    <select :id="label" :disabled="!options.length" v-model="modelValueProxy">
      <option value="" disabled>Select {{ label }}</option>
      <option
        v-for="option in options"
        :key="option.id || option"
        :value="option.name || option.model || option"
      >
        {{ option.name || option.model || option }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  label: String,
  options: Array,
  modelValue: [String, Number],
})

const modelValueProxy = computed({
  get: () => props.modelValue,
  set: (newValue) => emit('update:modelValue', newValue),
})
</script>

<style scoped lang="scss">
@use '../assets/scss/components/dropdown';
</style>
