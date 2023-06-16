export const getData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => json);

  return data;
};
