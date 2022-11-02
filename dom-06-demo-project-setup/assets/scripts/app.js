const addEmpModal = document.getElementById("add-modal");
const startAddEmpButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddEmpButton = addEmpModal.querySelector(".btn--passive");
const confirmAddEmpButton = cancelAddEmpButton.nextElementSibling;
// const userInputs = addEmpModal.querySelectorAll("input");
const userInputs = document
  .getElementById("user-inputs")
  .querySelectorAll("input");

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleEmpModal = () => {
  addEmpModal.classList.toggle("visible");
  toggleBackdrop();
};

const backDropClickHandler = () => {
  toggleEmpModal();
};

const addEmpHandler = () => {
  const name = userInputs[0];
  const email = userInputs[1];
  const dob = userInputs[2];
  const salary = userInputs[3];
  const it = userInputs[4];
  const hr = userInputs[5];

  var mail_format = /^\S+@\S+\.\S+$/;

  var name_format = /^[A-Za-z]+$/;
  //   if (
  //     name.toString().trim() === "" ||
  //     email.toString().trim() === "" ||
  //     dob.toString().trim() === "" ||
  //     salary.toString().trim() === "" ||
  //     !name.value.match(name_format) ||
  //     !email.value.match(mail_format) ||
  //     !isNaN(salary)
  //   ) {
  //     alert("Please enter valid values!");
  //   } else {
  //     alert("Valid values");
  //   }

  if (name.value.trim() === "") {
    alert("Name is empty!");
  } else if (!name.value.match(name_format)) {
    alert("Please enter valid name!");
  } else if (email.value.trim() === "") {
    alert("Email is empty!");
  } else if (!email.value.match(mail_format)) {
    alert("Please enter valid email!");
  } else if (dob.value.trim() === "") {
    alert("Date of birth is empty!");
    //   } else if (salary.value.toString().trim() === "") {
    // alert("Salary is empty!");
  } else if (isNaN(salary)) {
    alert("Please enter valid salary!");
  } else {
    alert("Valid values");
  }

  console.log(name.value);
  console.log(email.value);
  console.log(dob.value);
  console.log(salary.value);
};

const cancelAddEmpHandler = () => {
  toggleEmpModal();
};

startAddEmpButton.addEventListener("click", toggleEmpModal);
backdrop.addEventListener("click", backDropClickHandler);
cancelAddEmpButton.addEventListener("click", cancelAddEmpHandler);
confirmAddEmpButton.addEventListener("click", addEmpHandler);
