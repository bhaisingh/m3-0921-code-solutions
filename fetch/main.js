async function getData(url) {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderData(url) {
  const dataArray = await getData(url);
  console.log(dataArray);

}

renderData('https://jsonplaceholder.typicode.com/users');

renderData('https://pokeapi.co/api/v2/pokemon/1');
