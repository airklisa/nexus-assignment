# Nexus Auto Transport Frontend Assignment - Dynamic Dropdown Selection Interface for Year, Make, and Model

## Objective
Using Vue.js, create a dynamic dropdown selection interface for Year, Make, and Model based on data retrieved from a third-party API. 

### API Endpoints
- **Get Available Years:**  
  **Endpoint:** `GET https://new.api.nexusautotransport.com/api/vehicles/years`  
  **Description:** Returns a list of all available vehicle years.

- **Get Available Makes for a Given Year:**  
  **Endpoint:** `GET https://new.api.nexusautotransport.com/api/vehicles/makes?year=2020`  
  **Description:** Returns a list of makes for the specified year. Replace `{year}` with the desired year.

- **Get Available Models for a Given Year and Make:**  
  **Endpoint:** `GET https://new.api.nexusautotransport.com/api/vehicles/models?year=2010&make=Audi`  
  **Description:** Returns a list of models based on the specified year and make. Replace `{year}` with the desired year and `{make}` with the desired make.

**Note:** Set the HTTP request headers to:  
- `Accept: application/json`  
- `Content-Type: application/json`

---

## Requirements

1. **Dynamic Dropdowns:**  
   - Create dropdown menus for selecting Year, Make, and Model.
   - Selecting a Year dynamically populates the Make dropdown.
   - Selecting a Make dynamically populates the Model dropdown.

2. **Best Practices:**  
   - Use modern Vue.js (Vue 3) features.
   - Ensure clean code structure, proper state management, and error handling.

3. **Deployment:**  
   - Deploy your solution to a platform where it can be easily tested (e.g., Vercel, Netlify, GitHub Pages).
   - Provide a link for review.