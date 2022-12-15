export const addDogsFetch = (newDog) => {
  return  fetch("http://localhost:3000/dogs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newDog),
})
}