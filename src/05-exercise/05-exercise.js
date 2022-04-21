function exercise05() {
  // Complete the code of the function
  const $city = document.getElementById("name");

  if (localStorage.getItem("ex-05-city") === null){
    localStorage.setItem("ex-05-city", "Barcelona");
    $city.textContent = localStorage.getItem("ex-05-city");
  } else {
    $city.textContent = localStorage.getItem("ex-05-city");
  }
}

export default exercise05;

// exercise05();
