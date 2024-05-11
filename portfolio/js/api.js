async function getdata() {
  // github api username

  let response = await fetch("https://api.github.com/users/deepaksharmadk");
  let data = await response.json();
  //   console.log(data);
  return data;
}
getdata();
console.log(data);
