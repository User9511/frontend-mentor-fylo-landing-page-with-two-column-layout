const form = document.querySelector("form"),
  eInput = form.querySelector(".input"),
  text01 = form.querySelector(".text01");

form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form from submitting
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //Regex pattern to validate email
  form.classList.add("error");
  form.classList.remove("valid");
  if (eInput.value == "") {
    text01.innerText = "Email can't be blank";
    eInput.classList.add("error-border");
  } else if (!eInput.value.match(pattern)) {
    //if patter is not matched with user's enter value
    text01.innerText = "Please enter a valid email";
    eInput.classList.add("error-border");
  } else {
    form.classList.replace("error", "valid"); //replacing error class with valid class
    text01.innerText = "Thank you, let's get started!";
    eInput.classList.add("valid-border");
  }
});

const form02 = document.getElementById("form-02"),
  eInput02 = form02.querySelector(".input02"),
  text02 = form02.querySelector(".text02");

form02.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing form from submitting
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //Regex pattern to validate email
  form02.classList.add("error");
  form02.classList.remove("valid");
  if (eInput02.value == "") {
    text02.innerText = "Email can't be blank";
    eInput02.classList.add("error-border");
  } else if (!eInput02.value.match(pattern)) {
    //if patter is not matched with user's enter value
    text02.innerText = "Please enter a valid email";
    eInput02.classList.add("error-border");
  } else {
    form02.classList.replace("error", "valid"); //replacing error class with valid class
    text02.innerText = "Thank you, let's get started!";
    eInput02.classList.add("valid-border");
  }
});
