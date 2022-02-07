import { getHistoryData } from "./api";

export const chart = async (country) => {
  
  const chartContainer = document.getElementById('chart-container')
  const chartErrorMessage = document.getElementById('chart-error-message')
  chartContainer.insertAdjacentHTML('afterbegin', `<div class="loader" id="loading"></div>`)
  const loadingSpinner = document.getElementById('loading')

  try {
    const labels = [
      '2021 February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
      '2022 January',
      'February',
    ];
    
    const data = {
      labels: labels,
      datasets: [{
        label: 'Elhunytak számának változása',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: await getHistoryData(country),
      }]
    };
    
    const config = {
      type: 'line',
      data: data,
      options: {}
    };
  
    const myChart = new Chart(
      document.getElementById('myChart'),
  config
  );
  
} catch (e) {
    chartErrorMessage.style.display = "block"
    chartContainer.removeChild(loadingSpinner)
    chartContainer.style.display = "none"
    console.error("Error loading covid info", e)
    throw e
  }
  chartContainer.removeChild(loadingSpinner)
  
}