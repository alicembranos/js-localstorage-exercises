function exercise03() {
  // Complete the code of the function
  const value = localStorage.getItem("ex-03-city");
  const $name = document.getElementById("name");

  $name.textContent = value;

  localStorage.removeItem("ex-03-city");
}

export default exercise03;
