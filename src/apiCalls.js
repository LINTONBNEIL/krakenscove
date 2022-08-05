// -- DEAL --
// FORM Data
// Multiple different parameters
export const listOfDeals = (parameters) => {
  return fetch(`https://www.cheapshark.com/api/1.0/deals?${parameters}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
  }
// -- STORES --
// DETAILS
export const listOfStores = () => {
return fetch("https://www.cheapshark.com/api/1.0/stores")
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
  }

// -- GAMES --
// DETAILS
// id/Multiple ids/title(case senstivie)&steamappID
export const listOfGames = (parameters) => {
return fetch(`https://www.cheapshark.com/api/1.0/games?${parameters}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
}

// API_KEY = 6647bd5bf2e6433ea0c88ac36a77f01f
