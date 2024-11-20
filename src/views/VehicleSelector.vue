<template>
  <div class="vehicle-selector">
    <h1>Select Your Vehicle</h1>
    <Dropdown
      label="Year"
      :options="vehicleStore.years"
      v-model="selectedYear"
      :disabled="vehicleStore.loading || !vehicleStore.years.length"
    />
    <Dropdown
      label="Make"
      :options="vehicleStore.makes"
      v-model="selectedMake"
      :disabled="vehicleStore.loading || !vehicleStore.selectedYear"
    />
    <Dropdown
      label="Model"
      :options="vehicleStore.models"
      v-model="selectedModel"
      :disabled="vehicleStore.loading || !vehicleStore.selectedMake"
    />

    <div v-if="vehicleStore.error" class="error">{{ vehicleStore.error }}</div>
    <div class="vehicle">
      <span v-if="vehicleStore.loading">Loading...</span>
      <span v-else>{{ vehicleStore.selectedVehicle }}</span>
    </div>
  </div>
</template>

<script setup>
import { useVehicleStore } from '../stores/vehicleStore'
import Dropdown from '../components/Dropdown.vue'
import { watch, computed, ref } from 'vue'

const vehicleStore = useVehicleStore()
const selectedYear = ref(null)
const selectedMake = ref(null)
const selectedModel = ref(null)

vehicleStore.loadYears()

watch(
  () => selectedYear.value,
  (year) => {
    if (year) {
      selectedMake.value = null
      selectedModel.value = null
      vehicleStore.setSelectedYear(year)
    }
  },
)

watch(
  () => selectedMake.value,
  (make) => {
    if (make) {
      selectedModel.value = null
      vehicleStore.setSelectedMake(make)
    }
  },
)

watch(
  () => selectedModel.value,
  (model) => {
    if (model) {
      vehicleStore.setSelectedModel(model)
    }
  },
)
</script>

<style scoped lang="scss">
@use '../assets/scss/views/vehicle-selector';
</style>
