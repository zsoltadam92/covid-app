import { getCovidCasesData, getVaccinesData} from "./api"
import { addCard } from "./card"

export const initForm = () =>{
  const form = document.getElementById('form')
  const errorMessage = document.getElementById('error-message')
  const cardsContainer = document.getElementById('cards-container')
  const submitButton = document.getElementById('submit')

  
  form.addEventListener("submit", async e => {
    const country = document.getElementById('country-input').value
    e.preventDefault()

    cardsContainer.insertAdjacentHTML('afterbegin', `<div class="loader" id="loading"></div>`)
    const loadingSpinner = document.getElementById('loading')
    submitButton.disabled = true

    try {
      const covidCasesData = await getCovidCasesData(country)
      const vaccinesData = await getVaccinesData(country)
      addCard(country, covidCasesData, vaccinesData)
      form.reset() 
    } catch (e) {
      errorMessage.style.display = "block"
      setTimeout(() =>{
        errorMessage.style.display = "none";
        cardsContainer.removeChild(loadingSpinner)
        submitButton.disabled = false
      }, 3000)
      console.error("Error loading covid info", e)
      throw e
    }
    
    submitButton.disabled = false
    cardsContainer.removeChild(loadingSpinner)
  })
}