// -- DEAL --
// FORM Data
// Multiple different parameters
export const listOfDeals = (parameters) => {
  fetch(`https://www.cheapshark.com/api/1.0/deals?${parameters}`)
    .then(response => response.json())
    .then(result => console.log('Deals:', result))
    .catch(error => console.log('Error:', error))
}
// -- STORES --
// DETAILS
export const listOfStores = () => {
  fetch("https://www.cheapshark.com/api/1.0/stores")
    .then(response => response.json())
    .then(result => console.log('Stores:', result))
    .catch(error => console.log('Error:', error));
}

// -- GAMES --
// DETAILS
// id/Multiple ids/title(case senstivie)&steamappID
export const listOfGames = (parameters) => {
  fetch(`https://www.cheapshark.com/api/1.0/games?${parameters}`)
    .then(response => response.json())
    .then(result => console.log('Games:', results))
    .catch(error => console.log('Error:', error))
}
