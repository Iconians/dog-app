export const favoriteDogFetch = (id) => {
  const requestOptions = {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({isFavorite: true,}),
    redirect: "follow",
  };
  return fetch(`http://localhost:3000/dogs/${id}`, requestOptions)
}

