import { getCountryNames } from "./api";
import { initForm } from "./forms";
import "./style.css";
import "zizi-card"


window.addEventListener('DOMContentLoaded', async() => {
  initForm()

  // drop-down list létrehozása országnevekből
  try {
    const countries = await getCountryNames()
    const dataList = document.getElementById('country-list')
    const options = Object.keys(countries).map(country => `<option value="${country}"></option>`).join('')
    dataList.innerHTML = options
  } catch (e){
    document.getElementById('country-list-error-message').style.display = "block"   
    setTimeout(() =>{
      document.getElementById('country-list-error-message').style.display = "none";
    }, 3000)
    console.error("Error loading country names", e)
    throw e
  }

  
})