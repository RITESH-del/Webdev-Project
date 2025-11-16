// use localforage, match-sorter and sort-by for login page
 const usernames = [{"username": "Grp15", "password": "123"}];
  const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
  const usernameInput = document.querySelector("input[type='text']").value;
  const passwordInput = document.querySelector("input[type='password']").value;

    const user = usernames.find(
    (u) => u.username === usernameInput && u.password === passwordInput
  );

  if (user) {
    window.location.href = "/Home";
  } else {
    alert("Invalid username or password");
  }
})