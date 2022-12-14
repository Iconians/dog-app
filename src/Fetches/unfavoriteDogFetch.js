export const unfavoriteDogFetch = (id) => {
  const requestOptions = {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({isFavorite: false,}),
    redirect: "follow",
  };
  return fetch(`http://localhost:3000/dogs/${id}`, requestOptions)
}