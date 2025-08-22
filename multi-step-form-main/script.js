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

nextBtn.forEach((next) => {
  next.addEventListener("click", (e) => {
    e.preventDefault();
    const currentForm = main[formNum].querySelectorAll("input");
    console.log(currentForm);
    currentForm.forEach((el) => {
      el.addEventListener("input", () => {
        el.style.borderColor = "green";
        message.textContent = "";
      });
      if (el.value === "" || !el.checkValidity()) {
        el.style.borderColor = "red";
        message.textContent = "Please fill out all the form appropriately";
        message.style.color = "red";
        next[formNum].disabled = true;
        return false;
      } else {
        el.style.borderColor = "green";
      }
    });
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

const content = document.querySelectorAll(".step-number-content");

function contentChange() {
  content.forEach((el) => {
    el.classList.remove("active");
    el.classList.add("d-none");
  });
  content[formNum].classList.add("active");
}
//  selection type border
const optionBorder = document.querySelectorAll(".div-option-1");

document.querySelector(".div-option").addEventListener("click", (e) => {
  const parent = e.target.closest(".click");
  if (!parent) return;
  optionBorder.forEach((el) => {
    el.classList.remove("active-color");
  });
  parent.classList.add("active-color");
});

// add on element border

// document.querySelector(".add-ons_options").addEventListener("click", (e) => {
//   const parent = e.target.closest(".option-click");
//   if (!parent) return;
//   optionBlock.forEach((el) => {
//     el.classList.toggle("active-colors");
//   });
//   optionBlock[formNum].classList.toggle("active-colors");
// });

// const optionBlock = document.querySelectorAll(".add-ons_options-option");
// optionBlock.forEach((el) => {
//   el.addEventListener("click", () => {
//     el.classList.toggle("active-colors");
//   });
//   optionBlock[formNum].classList.toggle("active-colors");
// });

// checkbox validation

const checkOnline = document.querySelectorAll(".checkonline");
const checkLarge = document.querySelectorAll(".checklarge");
const checkProfile = document.querySelectorAll(".checkprofile");
const btnNext = document.querySelector(".btn");
function check() {
  btnNext.addEventListener("click", (e) => {
    e.preventDefault();
    //
    // check if at least one from each group is checked
    const onlineValid = Array.from(checkOnline).some((cb) => cb.checked);
    const largeValid = Array.from(checkLarge).some((cb) => cb.checked);
    const profileValid = Array.from(checkProfile).some((cb) => cb.checked);

    if (onlineValid || largeValid || profileValid) {
      alert("✅ Successful");
      formNum++;
      updateForm();
      progressForward();
      contentChange();
    } else {
      alert("❌ Not successful – please select required options.");
    }
  });
}
check();

const divOption = document.querySelectorAll(".div-option-1");
divOption.forEach((el) => {
  el.addEventListener("click", (e) => {
    document
      .querySelectorAll(".add-ons_options-option.active-colors")
      .forEach((addon) => {
        addon.classList.remove("active-colors");
        const checkbox = addon.querySelector("input[type='checkbox']");
        if (checkbox) checkbox.checked = false; // ✅ uncheck
      });

    // 2. Clear finishing page selections
    document
      .querySelectorAll(".first, .second, .third, .targets, .target1")
      .forEach((box) => {
        box.innerHTML = "";
      });

    // 3. Reset totals
    const monthlyTotalEl = document.querySelector(".append-sum");
    if (monthlyTotalEl) monthlyTotalEl.textContent = 0;

    const yearlyTotalEl = document.querySelector(".append-sum2");
    if (yearlyTotalEl) yearlyTotalEl.textContent = 0;
    // select plan again;
    const parent = e.target.closest(".click");
    if (!parent) return;
    const arcade = parent.querySelectorAll(".amount");
    arcade.forEach((el) => {
      console.log(el);
      const html = `

                      <div><span class="add-ons-amount block">${el.textContent}</span></div>

    `;
      document.querySelectorAll(".target").forEach((el) => {
        el.innerHTML = html;
      });
    });
  });
});

const addOptions = document.querySelectorAll(".add-ons_options-option");
addOptions.forEach((el) => {
  el.addEventListener("click", (e) => {
    el.classList.toggle("active-colors"); // select/deselect
    const parent = e.target.closest(".add-ons_options-option");
    console.log(parent);

    // If deselected → clear from finishing page
    if (!el.classList.contains("active-colors")) {
      document
        .querySelectorAll(".first, .second, .third, .targets, .target1")
        .forEach((box) => {
          if (
            box.textContent.includes(
              parent.querySelector(".add-ons-amount").textContent || ""
            )
          ) {
            box.innerHTML = "";
          }
        });
      add();
      return;
    }

    const siblingsHeaderA = parent.querySelectorAll(".text");
    siblingsHeaderA.forEach((el, i) => {
      console.log(el.textContent);
      const html = `
       <h3>${el.textContent}</h3>
      `;
      document.querySelectorAll(".first").forEach((el) => {
        el.innerHTML = html;
      });
    });
    const siblingsHeaderB = parent.querySelectorAll(".text1");
    siblingsHeaderB.forEach((el) => {
      const html = `
       <h3>${el.textContent}</h3>
      `;
      document.querySelectorAll(".second").forEach((el) => {
        el.innerHTML = html;
      });
    });

    // const siblingsHeaderC = parent.querySelectorAll(".text2");
    // siblingsHeaderC.forEach((el) => {
    //   console.log(el);
    //   const html = `
    //    <h3>${el.textContent}</h3>
    //   `;
    //   document.querySelectorAll(".third").forEach((el) => {
    //     el.innerHTML = html;
    //   });
    // });

    const siblings = parent.querySelectorAll(".check");
    siblings.forEach((el) => {
      console.log(el);
      const html = `
         <div><span class="add-ons-amount block1">${el.textContent}</span></div>
      `;
      document.querySelectorAll(".targets").forEach((el) => {
        el.innerHTML = html;
      });
    });
    const siblings1 = parent.querySelectorAll(".check1");
    siblings1.forEach((el) => {
      console.log(el);
      const HTML = `
         <div><span class="add-ons-amount block2">${el.textContent}</span></div>
      `;
      document.querySelectorAll(".target1").forEach((el) => {
        el.innerHTML = HTML;
      });
    });
    // const siblings2 = parent.querySelectorAll(".check2");
    // siblings2.forEach((el) => {
    //   const HTML = `
    //      <div><span class="add-ons-amount block2">${el.textContent}</span></div>
    //   `;
    //   document.querySelectorAll(".target2").forEach((el) => {
    //     el.innerHTML = HTML;
    //   });
    // });
    add();
  });
});

// helper: clean text → number
// helper: clean text → number
function toNumber(text) {
  if (!text) return 0;
  const match = text.match(/\d+/); // extract only digits
  return match ? parseInt(match[0], 10) : 0;
}

function add() {
  // ===================== MONTHLY =====================
  let monthlyTotal = 0;

  // base plan
  const monthlyPlan = document.querySelector(
    ".general-container:not(.hidden) .target .add-ons-amount"
  );
  if (monthlyPlan) monthlyTotal += toNumber(monthlyPlan.textContent);

  // add-ons
  const monthlyAddons = document.querySelectorAll(
    ".general-container:not(.hidden) .targets .add-ons-amount, .general-container:not(.hidden) .target1 .add-ons-amount"
  );
  monthlyAddons.forEach((addon) => {
    monthlyTotal += toNumber(addon.textContent);
  });

  const monthlyTotalEl = document.querySelector(".append-sum");
  if (monthlyTotalEl) monthlyTotalEl.textContent = monthlyTotal;

  // ===================== YEARLY =====================
  let yearlyTotal = 0;

  // base plan
  const yearlyPlan = document.querySelector(
    ".general-container.hidden .target .add-ons-amount"
  );
  if (yearlyPlan) yearlyTotal += toNumber(yearlyPlan.textContent);

  // add-ons
  const yearlyAddons = document.querySelectorAll(
    ".general-container.hidden .targets .add-ons-amount, .general-container.hidden .target1 .add-ons-amount"
  );
  yearlyAddons.forEach((addon) => {
    yearlyTotal += toNumber(addon.textContent);
  });

  const yearlyTotalEl = document.querySelector(".append-sum2");
  if (yearlyTotalEl) yearlyTotalEl.textContent = yearlyTotal;
}
