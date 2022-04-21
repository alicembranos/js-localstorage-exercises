// Uncomment these lines if you want to see the result in the browser
// (() => localStorage.setItem("ex-04-city", "Sevilla"))();
// (() => localStorage.setItem("ex-04-name", "Ana Parks"))();
// (() => localStorage.setItem("ex-04-country", "Spain"))();

function exercise04() {
  // Complete the code of the function
  const $city = document.querySelector('.city');
  const $name = document.querySelector('.name');
  const $country = document.querySelector('.country');

  $city.textContent = localStorage.getItem("ex-04-city");
  $name.textContent = localStorage.getItem("ex-04-name");
  $country.textContent = localStorage.getItem("ex-04-country");

  localStorage.clear();

}

export default exercise04;

// exercise04();
