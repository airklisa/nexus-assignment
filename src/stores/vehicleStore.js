import { defineStore } from 'pinia'
import { fetchYears, fetchModels, fetchMakes } from '../helpers/nexusVehicleApi'

export const useVehicleStore = defineStore('vehicleStore', {
  state: () => ({
    years: [],
    makes: [],
    models: [],
    selectedYear: null,
    selectedMake: null,
    selectedModel: null,
    loading: null,
    error: null,
  }),

  getters: {
    selectedVehicle(state) {
      if (state.selectedYear && state.selectedMake && state.selectedModel) {
        return `Your currently selected vehicle is ${state.selectedYear} ${state.selectedMake} ${state.selectedModel}`
      }
      return 'No vehicle selected'
    },
  },

  actions: {
    handleError(actionName, err) {
      console.error(`Error in ${actionName} function:`, err)
      this.error = `Failed to ${actionName}. Please try again.`
    },

    async loadYears() {
      this.loading = true
      this.error = null
      try {
        const { data } = await fetchYears()
        this.years = data.data
      } catch (err) {
        this.handleError('load years', err)
      } finally {
        this.loading = false
      }
    },

    async loadMakes(year) {
      if (!year) {
        this.error = 'Year is required to load makes.'
        return
      }

      this.loading = true
      this.error = null
      try {
        const { data } = await fetchMakes(year)
        this.makes = data.data
      } catch (err) {
        this.handleError('load makes', err)
      } finally {
        this.loading = false
      }
    },

    async loadModels(year, make) {
      if (!year || !make) {
        this.error = 'Year and make are required to load models.'
        return
      }

      this.loading = true
      this.error = null
      try {
        const { data } = await fetchModels(year, make)
        this.models = data.data
      } catch (err) {
        this.handleError('load models', err)
      } finally {
        this.loading = false
      }
    },

    resetSelections() {
      this.makes = []
      this.models = []
      this.selectedMake = null
      this.selectedModel = null
      this.error = null
    },

    setSelectedYear(year) {
      this.selectedYear = year
      this.resetSelections()
      if (year) {
        this.loadMakes(year)
      }
    },

    setSelectedMake(make) {
      this.selectedMake = make
      this.selectedModel = null
      if (make && this.selectedYear) {
        this.loadModels(this.selectedYear, make)
      }
    },

    setSelectedModel(model) {
      this.selectedModel = model
    },
  },
})
