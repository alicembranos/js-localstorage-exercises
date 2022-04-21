function exercise08() {
  let user = {
    name: "mark",
    age: 44,
  };

  // Complete the code of the function
  const usersString = localStorage.getItem("ex-08-users");
  const users = JSON.parse(usersString);

  users.push(user);

  const newUsersString = JSON.stringify(users);
  localStorage.setItem("ex-08-users", newUsersString);

}

export default exercise08;

// exercise08();