

export const onloadDogsFetch = () => {
    return fetch("http://localhost:3000/dogs")
      .then((res) => res.json())
}