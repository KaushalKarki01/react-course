// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// console.log("first thing");

//better approach of doing above work by async function

async function fetchData() {
  const res = fetch("https://jsonplaceholder.typicode.com/posts");
  const data = (await res).json();
  console.log(data);
}

fetchData();

console.log("hello world");
