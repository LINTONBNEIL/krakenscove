// -- DEAL --
// FORM Data
// Multiple different parameters
export async function listOfDeals(parameters) {
const response = await fetch(`https://www.cheapshark.com/api/1.0/deals?${parameters}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  }
// -- STORES --
// DETAILS
export async function listOfStores() {
  const response = await fetch("https://www.cheapshark.com/api/1.0/stores")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      return data
  }
  

// -- GAMES --
// DETAILS
// id/Multiple ids/title(case senstivie)&steamappID
export async function listOfGames(parameters) {
  const response = await fetch(`https://www.cheapshark.com/api/1.0/games?${parameters}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
}

// API_KEY = 6647bd5bf2e6433ea0c88ac36a77f01f
