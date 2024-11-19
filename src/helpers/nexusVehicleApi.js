import axios from 'axios'

const vehicleApi = axios.create({
  baseURL: 'https://new.api.nexusautotransport.com/api/vehicles',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const fetchYears = () => vehicleApi.get('/years')

export const fetchMakes = (year) =>
  vehicleApi.get('/makes', {
    params: { year },
  })

export const fetchModels = (year, make) =>
  vehicleApi.get('/models', {
    params: { year, make },
  })
