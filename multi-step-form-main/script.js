const main = document.querySelectorAll(".main");
const nextBtn = document.querySelectorAll(".next_button");
const BackBtn = document.querySelectorAll(".back_button");
const num = document.querySelectorAll(".step-number");
const stepList = document.querySelectorAll(".progressive-bar li");
const message = document.getElementById("message");
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".div-option-1, .add-ons_options-option, .general-container-hidden, .finshing-container"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("hidden");
  });
  ball.classList.toggle("active");
});

let formNum = 0;
let passwordMatch = false;
nextBtn.forEach((next) => {
  next.addEventListener("click", (e) => {
    e.preventDefault();
    // const currentForm = main[formNum].querySelectorAll("input");
    // console.log(currentForm);
    // currentForm.forEach((el) => {
    //   el.addEventListener("input", () => {
    //     el.style.borderColor = "green";
    //     message.textContent = "";
    //   });
    //   if (el.value === "" || !el.checkValidity()) {
    //     el.style.borderColor = "red";
    //     message.textContent = "Please fill out all the form appropriately";
    //     message.style.color = "red";
    //     next[formNum].disabled = true;
    //     return false;
    //   } else {
    //     el.style.borderColor = "green";
    //   }
    // });
    formNum++;
    updateForm();
    progressForward();
    contentChange();
  });
});

BackBtn.forEach((next) => {
  next.addEventListener("click", () => {
    formNum--;
    updateForm();
    progressBackward();
    contentChange();
  });
});

function updateForm() {
  main.forEach((el) => {
    el.classList.remove("active");
  });
  main[formNum].classList.add("active");
}

function progressForward() {
  num.innerHTML = formNum + 1;
  stepList[formNum].classList.add("active");
}

function progressBackward() {
  let formValue = formNum + 1;
  stepList[formValue].classList.remove("active");
  num.innerHTML = formValue;
}

// const content = document.querySelectorAll(".step-number-content");

// function contentChange() {
//   content.forEach((el) => {
//     el.classList.remove("active");
//     el.classList.add("d-none");
//   });
//   content[formNum].classList.add("active");
// }

// const divOption = document.querySelectorAll(".div-option-1");
// divOption.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     const parent = e.target.closest(".click");
//     if (!parent) return;
//     // const amount = parent.querySelectorAll(".amount").textContent;
//     const arcade = parent.querySelectorAll(".amount");
//     arcade.forEach((el) => {
//       console.log(el);
//       const html = `

//                       <div><span class="add-ons-amount">${el.textContent}</span></div>

//     `;
//       document.querySelectorAll(".target").forEach((el) => {
//         el.innerHTML = html;
//       });
//     });
//   });
// });

// const addOptions = document.querySelectorAll(".add-ons_options-option");
// addOptions.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     const parent = e.target.closest(".add-ons_options-option");
//     console.log(parent);
//     const siblings = parent.querySelectorAll(".check");
//     siblings.forEach((el) => {
//       console.log(el);
//       const html = `
//          <div><span class="add-ons-amount">${el.textContent}</span></div>
//       `;
//       document.querySelectorAll(".targets").forEach((el) => {
//         el.innerHTML = html;
//       });
//     });
//   });
// });
