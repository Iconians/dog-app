export const deleteDogsFetch = (id) => {
  const requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };
  return fetch(`http://localhost:3000/dogs/${id}`, requestOptions)
}