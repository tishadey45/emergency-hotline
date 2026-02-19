// selecting copy count button
const copyCount = document.getElementById("copy-count");

// selecting copy button of all cards
const copyButton = document.querySelectorAll(".card-copy-button");

// incrementing copy count on click of heart button

// let count = 0;
copyButton.forEach((button) => {
  button.addEventListener("click", () => {
    let count = parseInt(copyCount.textContent);
    copyCount.textContent = count + 1;

    //alternatively, you can use this method to increment count
    // count++;
    // copyCount.textContent = count;

    // collecting service number and copying to clipboard
    const card = button.closest(".card")
    const serviceNumber = card.querySelector(".service-number").textContent;
    navigator.clipboard.writeText(serviceNumber);

  });
});














