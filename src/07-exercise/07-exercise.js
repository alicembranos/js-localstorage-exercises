function exercise07() {
  let users = [
    {
      name: "alex",
      age: 24,
    },
    {
      name: "ana",
      age: 34,
    },
  ];

  // Complete the code of the function
  const usersString = JSON.stringify(users);
  localStorage.setItem("ex-07-users", usersString);
}

export default exercise07;

// exercise07();