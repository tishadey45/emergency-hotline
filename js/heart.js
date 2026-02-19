// selecting heart count button
const heartCount = document.getElementById("heart-count");

// selecting heart button of all cards
const heartButtons = document.querySelectorAll(".card-heart-icon");

// incrementing heart count on click of heart button

// let count = 0;
heartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let count = parseInt(heartCount.textContent);
    heartCount.textContent = count + 1;

    // count++;
    // heartCount.textContent = count;

    // optional , you can skip this part

    // heart style change on click and color change to red
      button.classList.remove("fa-regular");
      button.classList.add("fa-solid","text-red-500");
  });
});


// slightly updated feature
// heartButtons.forEach((button) => {
//   button.addEventListener("click", () => {

//     let count = parseInt(heartCount.textContent);

//     // যদি already liked থাকে (fa-solid থাকে)
//     if (button.classList.contains("fa-solid")) {

//       // unlike → count কমাও (0 এর নিচে যাবে না)
//       if (count > 0) {
//         heartCount.textContent = count - 1;
//       }

//       button.classList.remove("fa-solid", "text-red-500");
//       button.classList.add("fa-regular");

//     } else {

//       // like → count বাড়াও
//       heartCount.textContent = count + 1;

//       button.classList.remove("fa-regular");
//       button.classList.add("fa-solid", "text-red-500");
//     }

//   });
// });








