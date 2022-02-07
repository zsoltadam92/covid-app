import { chart } from "./chart"

let id = 0;

export const addCard = (country, covidCasesData, vaccinesData) => {
  const cardsContainer = document.getElementById('cards-container')

  const population = covidCasesData.All.population
  const confirmed = covidCasesData.All.confirmed
  const deaths = covidCasesData.All.deaths
  const vaccinatedPeople = vaccinesData.All.people_vaccinated
  const partiallyVaccinatedPeople = vaccinesData.All.people_partially_vaccinated
  
  cardsContainer.insertAdjacentHTML('afterbegin', `
  <zizi-card title="${country}" id="card-${id}">
    <div class="card-content">
      <table>
        <tr>
          <th></th>
          <th>fő</th>
          <th>Teljes lakossághoz viszonyítva %</th>
        </tr>
        <tr>
          <td>Beazonosított fertőzöttek</td>
          <td>${numberWithCommas(confirmed)}</td>
          <td>${numberWithToFixed(confirmed)}</td>
        </tr>
        <tr>
          <td>Elhunytak</td>
          <td>${numberWithCommas(deaths)}</td>
          <td>${numberWithToFixed(deaths)}</td>
        </tr>
        <tr>
          <td>Teljesen oltottak</td>
          <td>${numberWithCommas(vaccinatedPeople)}</td>
          <td>${numberWithToFixed(vaccinatedPeople)}</td>
        </tr>
        <tr>
          <td>Részben oltottak</td>
          <td>${numberWithCommas(partiallyVaccinatedPeople)}</td>
          <td>${numberWithToFixed(partiallyVaccinatedPeople)}</td>
        </tr>
      </table>
            
      <div id="chart-error-message" style="display:none;">
        Hiba történt a diagram betöltése közben!
      </div>
      
      <div id="chart-container">
        <canvas id="myChart"></canvas>
      </div>
        
      <button id="delete-button${id}">Törlés</button>
    </div>  
  </zizi-card>
  `)

  // diagram meghívása
  chart(country)

  // kártya törlése
  const currentId = id
  document.getElementById(`delete-button${id}`).addEventListener('click', () => {
    cardsContainer.removeChild(document.getElementById(`card-${currentId}`))
  })

  id++

  
  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  
  function numberWithToFixed(number) {
    return ((number / population) * 100).toFixed(1);
  }
}

