// selecting all call buttons
const callButtons = document.querySelectorAll(".call-button");
// selecting the call history container
const callHistoryContainer = document.getElementById("call-history-container");

// clear call history button
const clearHistoryButton = document.getElementById("clear-history-button");


// adding event listener to each call button
callButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    // console.log("clicked", button);
    // find the parent card of the clicked button
    const card = event.target.closest(".card");
    const serviceName = card.querySelector(".service-name").textContent;  //innerText or textContent or innerHTML
    const serviceNumber = card.querySelector(".service-number").textContent;
    const now = new Date();
    // const timestamp = now.toLocaleString();
    const currentTime = now.toLocaleTimeString();
    // console.log({ serviceName, serviceNumber, currentTime });

    // add new call history item
    const historyItem = document.createElement("div");
    historyItem.className =
      "flex justify-between items-center mt-4 p-4 bg-gray-50 rounded-2xl";

    historyItem.innerHTML = `
                           <div class="space-y-1">
                                   <h6 class="text-sm font-medium">${serviceName}</h6>
                                   <h2 class="text-lg ">${serviceNumber}</h2>
                            </div>
                            <p class="text-sm text-gray-500">${currentTime}</p>
`;
// callHistoryContainer.appendChild(historyItem);
callHistoryContainer.prepend(historyItem);
  });
});



// clear call history list
clearHistoryButton.addEventListener("click",function(){
    callHistoryContainer.innerHTML="";
})



