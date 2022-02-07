// országnevek listázása
export const getCountryNames = async () => {
  const response = await fetch(`https://covid-api.mmediagroup.fr/v1/cases`)
  if(response.status !== 200) {
    throw 'Error loading country data'
  }
  const jsonResponse = await response.json()
 
  return jsonResponse
}

// fertőzöttségi és halálozási adatok
export const getCovidCasesData = async (country) => {
  const response = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`)
  if(response.status !== 200) {
    throw 'Error loading covid data'
  }
  const jsonResponse = await response.json()
  return jsonResponse
}

// oltottsági adatok
export const getVaccinesData = async (country) => {
  const response = await fetch(`https://covid-api.mmediagroup.fr/v1/vaccines?country=${country}`)
  if (response.status !== 200) {
    throw 'Error loading vaccines data'
  }
  const jsonResponse = await response.json()
  return jsonResponse
}

// diagram adatok
export const getHistoryData = async (country) => {
  const response = await fetch(`https://covid-api.mmediagroup.fr/v1/history?country=${country}&status=deaths`)
  if (response.status !== 200) {
    throw 'Error loading history data'
  }
  const jsonResponse = await response.json()
  
  const dates = jsonResponse.All.dates
  const arr = [dates['2021-02-01'], dates['2021-03-01'], dates['2021-04-01'], dates['2021-05-01'], dates['2021-06-01'], dates['2021-07-01'], dates['2021-08-01'], dates['2021-09-01'], dates['2021-10-01'], dates['2021-11-01'], dates['2021-12-01'], dates['2022-01-01'], dates['2022-02-01'],]

  return arr
}