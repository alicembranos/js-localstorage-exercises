function exercise06() {
  // Complete the code of the function
  const citieslist = document.querySelector('.ex-list');
  const citiesArray = localStorage.getItem("ex-06-data");
  const citiesObject = JSON.parse(citiesArray);

  for (let i = 0; i < citiesObject.length; i++) {
    let item = document.createElement("li");
    citieslist.appendChild(item);
    item.textContent = citiesObject[i].name;
  }

}

export default exercise06;

// exercise06();